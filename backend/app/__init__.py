import csv
from posixpath import split
from tkinter import image_names
from app.db import db
from app.resources.data import transform_resources
from app.resources.model import *
# from app.resources.model import Resource
from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
import os
from uuid import UUID
import sys



def create_app():
    print("running flask")
    app = Flask(__name__, instance_relative_config=False)

    if not 'WEBSITE_HOSTNAME' in os.environ:
        # local development, where we'll use environment variables
        print("Loading config.development and environment variables from .env file.")
        app.config.from_pyfile('configs/dev.py')
    else:
        # production
        print("Loading config.production.")
        app.config.from_pyfile('configs/prod.py')

    app.config.update(
        SQLALCHEMY_DATABASE_URI=app.config.get('DATABASE_URI'),
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
    )
    print(app.config.get('SQLALCHEMY_DATABASE_URI'))

    db.init_app(app)
    with app.app_context():
        db.create_all()
        if len(args := sys.argv) > 2:
            transform_resources(args[1], args[2])
            # TODO: figure out why are resources being added twice
            try:
                with open('data.csv', 'r', encoding='utf-8-sig', newline='') as f:
                    reader = csv.DictReader(f)
                    for row in reader:
                        resource = Resource(
                            id = UUID(row['id']),
                            title=row['title'],
                            description = row['description'],
                            content = row['content'],
                            aspect = map(lambda val: Aspect[val.strip()], row['aspect'].split(',')),
                            goal = map(lambda val: Goal[val.strip()], row['goal'].split(',')),
                            sub_category = map(lambda val: SubCategory[val.strip()], row['sub_category'].split(',')),
                            image_name = row['image_name'],
                            external_links = row['external_links'])
                        db.session.add(resource)
                    db.session.commit()
                    print("commited to db")
                    f.close()
            except Exception as e:
                print("Error transferring data from data.csv to PostgreSQL db")
                print(e)
    # from yourapplication.views.admin import admin
    # from yourapplication.views.frontend import frontend
    # app.register_blueprint(admin)
    # app.register_blueprint(frontend)

    return app

# @app.route("/")
# def hello():
#     return "Hello World!"

# if __name__ == '__main__':
#     print("name is main")
#     app.run()