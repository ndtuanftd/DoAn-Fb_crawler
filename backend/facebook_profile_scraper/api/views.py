from rest_framework.viewsets import ModelViewSet
from facebook_profile_scraper.models import Project, UserProfile
from .serializers import ProjectSerializer, UserProfileSerializer

class ProjectViewSet(ModelViewSet):
    queryset= Project.objects.all()
    serializer_class = ProjectSerializer

class UserProfileViewSet(ModelViewSet):
    queryset= UserProfile.objects.all()
    serializer_class = UserProfileSerializer