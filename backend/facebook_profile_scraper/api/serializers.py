from rest_framework.serializers import ModelSerializer, Serializer, CharField, ListField
from facebook_profile_scraper.models import Project, UserProfile


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        extra_kwargs = {
            'created_on': {
                'read_only': True
            }
        }


class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'


class ProfileRequestSerializer(Serializer):
    user = ListField(child=CharField(max_length=255))
