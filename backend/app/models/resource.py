from app import db
from enum import Enum
import datetime
from sqlalchemy.dialects.postgresql import UUID, ARRAY, ENUM, JSONB
from sqlalchemy.ext.mutable import MutableDict
import uuid

class Aspect(str, Enum):
    PHYSICAL = 'physical'
    SOCIAL = 'social'
    EMOTIONAL = 'emotional'

    def __str__(self) -> str:
        return str.__str__(self)

### TODO: confirm that this type is indeed removed
class MediaType(str, Enum):
    DIGITAL = 'digital'
    MATERIAL = 'material'
    INFORMATIONAL = 'inform'

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


### TODO: confirm that these types are indeed removed
# class ResourceType(models.TextChoices):
#     TREATMENT = 'trt'
#     PEER_SUPPORT = 'peer-sup'
#     SELF_MANAGEMENT = 'self-mgmt'
#     CONSULTATION = 'cons'
#     EXERCISE = 'exer'

# class Attendance(models.TextChoices):
#     IN_PERSON = 'in-pers'
#     ONLINE_ASYNC = 'o-async'
#     ONLINE_LIVE = 'o-live'
#     NONE = 'none'
#     BY_PHONE = 'phone'
#     EMAIL = 'email'
#     TEXT = 'txt'
#     ONLINE_FORM = 'o-form'


class Resource(db.Model):
    id = db.Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4)
    ### TODO: confirm if title is unique=True
    title = db.Column(
        db.String(150),
        nullable=False)
    ### TODO: confirm content structure
    content = db.Column(
        ARRAY(MutableDict.as_mutable(JSONB)),
        nullable=False
    )
    image_name = db.Column(db.String(200))
    ### TODO: confirm that array of enums are all non-empty for every resource
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
    isFree = db.Column(db.Boolean)
    created = db.Column(
        db.DateTime,
        default=datetime.datetime.utcnow,
        nullable=False)
    last_updated = db.Column(
        db.DateTime,
        default=datetime.datetime.utcnow,
        onupdate=datetime.datetime.utcnow,
        nullable=False)