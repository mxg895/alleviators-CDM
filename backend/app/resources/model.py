from app.db import db
from enum import Enum
import datetime
from sqlalchemy.dialects.postgresql import UUID, ARRAY, ENUM, JSONB
# from sqlalchemy.ext.mutable import MutableDict
import uuid

class Aspect(str, Enum):
    PHYSICAL = 'physical'
    SOCIAL = 'social'
    EMOTIONAL = 'emotional'

    def __str__(self) -> str:
        return str.__str__(self)

class Goal(str, Enum):
    PEER_SUPPORT = 'peer-spt'
    MANAGE_PAIN = 'manage-pain'
    PAIN_EDUCATION= 'pain-edu'

    def __str__(self) -> str:
        return str.__str__(self)

class SubCategory(str, Enum):
    VIDEO = 'video'
    PROGRAM = 'prgm'
    WEBSITE = 'website'
    APP = 'app'
    READING = 'reading'
    TOOL = 'tool'
    DEVICE = 'device'
    SUPPORT_LINE = 'support-line'
    COMMUNITY_PROGRAM = 'comm-prgm'
    PEER_SUPPORT = 'peer'
    PODCAST = 'pod'

    def __str__(self) -> str:
        return str.__str__(self)

class Resource(db.Model):
    id = db.Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4)
    title = db.Column(
        db.String(150),
        nullable=False)
    description = db.Column(db.Text)
    content = db.Column(
        ARRAY(db.Text),
    )
    aspect = db.Column(
        ARRAY(ENUM(Aspect)),
        nullable=False)
    goal = db.Column(
        ARRAY(ENUM(Goal)),
        nullable=False)
    sub_category = db.Column(
        ARRAY(ENUM(SubCategory)),
        nullable=False
    )
    image_name = db.Column(db.String(200))
    external_links = db.Column(ARRAY(db.Text))
    created = db.Column(
        db.DateTime,
        default=datetime.datetime.utcnow,
        nullable=False)
    last_updated = db.Column(
        db.DateTime,
        default=datetime.datetime.utcnow,
        onupdate=datetime.datetime.utcnow,
        nullable=False)