import os
from app import create_app

application=create_app()


### TODO: uncomment when ready
# migrate = Migrate(app, db)

if __name__ == '__main__':
    application.run()