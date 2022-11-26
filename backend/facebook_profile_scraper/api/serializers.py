from rest_framework.serializers import ModelSerializer
from facebook_profile_scraper.models import Project, UserProfile

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'