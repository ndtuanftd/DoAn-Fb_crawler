from django.contrib import admin
from .models import Project, UserProfile

# Register your models here.
admin.site.register(Project)
admin.site.register(UserProfile)