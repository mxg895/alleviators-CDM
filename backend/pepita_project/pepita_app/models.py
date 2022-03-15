from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.

class Aspect(models.TextChoices):
    PHYSICAL = 'physical'
    SOCIAL = 'social'
    EMOTIONAL = 'emotional'

class MediaType(models.TextChoices):
    DIGITAL = 'digital'
    MATERIAL = 'material'
    INFORMATIONAL = 'inform'

class Goal(models.TextChoices):
    PEER_SUPPORT = 'peer-spt'
    MANAGE_PAIN = 'manage'
    PAIN_EDUCATION= 'pain-edu'

class SubCat(models.TextChoices):
    VIDEO = 'video'
    PROGRAM = 'prgm'
    WEBSITE = 'website'
    APP = 'app'
    SHOP = 'shop'
    READING = 'read'
    PHONE_NUMBER = 'phone-num'
    TOOL = 'tool'
    DEVICE = 'device'
    EXERCISE = 'exercise'
    PROFESSIONAL_SUPPORT = 'pro-support'
    SUPPORT_LINE = 'support-line'
    ONLINE_COUNSELLING = 'online-couns'
    COMMUNITY_PROGRAM = 'comm-prgm'
    ### TODO: check if this is a duplicate with APP above
    APPS = 'apps'
    PEER_SUPPORT = 'peer'
    PODCAST = 'pod'


### TODO: check why do we need duplciate Peer Support & Exercise in both sub-categories and resource type
class ResourceType(models.TextChoices):
    TREATMENT = 'trt'
    PEER_SUPPORT = 'peer-sup'
    SELF_MANAGEMENT = 'self-mgmt'
    CONSULTATION = 'cons'
    EXERCISE = 'exer'

class Attendance(models.TextChoices):
    IN_PERSON = 'in-pers'
    ONLINE_ASYNC = 'o-async'
    ONLINE_LIVE = 'o-live'
    NONE = 'none'
    BY_PHONE = 'phone'
    EMAIL = 'email'
    TEXT = 'txt'
    ONLINE_FORM = 'o-form'

    
class Resource(models.Model):
    id = models.UUIDField(primary_key=True, editable=False)
    aspect = ArrayField(
        models.CharField(max_length=15, choices=Aspect.choices),
        default=list,
        ### TODO: check if this (and other tags are required fields)
    )
    media = ArrayField(
        models.CharField(max_length=15, choices=MediaType.choices),
    )
    goal = ArrayField(
        models.CharField(max_length=15, choices=Goal.choices),
    )
    sub_category = ArrayField(
        models.CharField(max_length=15, choices=SubCat.choices),
    )
    resource_type = ArrayField(
        models.CharField(max_length=15, choices=ResourceType.choices),
    )
    is_free = models.BooleanField(default=False)
    attendance = ArrayField(
        models.CharField(max_length=15, choices=Attendance.choices),
    )
    created = models.DateTimeField(auto_now_add=True)
    last_upated = models.DateTimeField(auto_now=True)



# TODO: create Azure db for dev