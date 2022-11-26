from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Project(models.Model):
    ownner = models.ForeignKey(User, on_delete=models.CASCADE)
    groupname = models.CharField(max_length=255, blank=False, null=False)

class UserProfile(models.Model):
    profile_id = models.CharField(max_length=50, unique=True, blank=False, null=False)
    name = models.CharField(max_length=255, blank=False, null=False)
    friend_count = models.IntegerField(null=False, default=0)
    follower_count = models.IntegerField(null=False, default=0)
    following_count = models.IntegerField(null=False, default=0)
    belong_to = models.ManyToManyField(Project)
