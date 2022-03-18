from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

# from dotenv import load_dotenv

# load_dotenv()

db = SQLAlchemy()

def create_app():
    print("running flask")
    app = Flask(__name__, instance_relative_config=False)

    if not 'WEBSITE_HOSTNAME' in os.environ:
        # local development, where we'll use environment variables
        print("Loading config.development and environment variables from .env file.")
        app.config.from_pyfile('configs/dev.py')
        # app.config.from_object('app.configs.dev')
        # print(app.config)
    else:
        # production
        print("Loading config.production.")
        app.config.from_pyfile('configs/prod.py')

    app.config.update(
        ### TODO: uncomment this when ready
        # SQLALCHEMY_DATABASE_URI=app.config.get('DATABASE_URI'),
        SQLALCHEMY_DATABASE_URI='sqlite://app.db',
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
    )
    
    db.init_app(app)
    # from yourapplication.views.admin import admin
    # from yourapplication.views.frontend import frontend
    # app.register_blueprint(admin)
    # app.register_blueprint(frontend)

    @app.route("/")
    def hello():
        return "Hello World!"

    return app



# if __name__ == '__main__':
#     print("name is main")
#     app.run()