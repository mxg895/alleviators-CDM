from pepita_project.settings.base import *

# Override base settings as needed for dev environment
DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'OPTIONS': {
            'service': 'my_service',
            'passfile': '.my_pgpass',
        },
    }
}

CORS_ORIGIN_WHITELIST = [
     'http://localhost:3000',
]
