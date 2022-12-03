from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from facebook_profile_scraper.models import Project, UserProfile
from .serializers import ProjectSerializer, UserProfileSerializer, ProfileRequestSerializer

import json

class ProjectViewSet(ModelViewSet):
    queryset= Project.objects.all()
    serializer_class = ProjectSerializer

class UserProfileViewSet(ModelViewSet):
    queryset= UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def list(self, request):
        proj_id = request.GET.get('q')
        if proj_id is None:
            queryset = UserProfile.objects.all()
            serializer = UserProfileSerializer(queryset, many=True)
            return Response(serializer.data)

        try:
            project = Project.objects.get(id=proj_id)
            queryset = project.userprofile_set.all()
            serializer = UserProfileSerializer(queryset, many=True)
        except Project.DoesNotExist:
            return Response({"detail": 'No Project with this ID exist'}, status=status.HTTP_404_NOT_FOUND)
        
        return Response(serializer.data)

class ProfileRequestView(APIView):
    def post(self, request, id, format=None):
        serializer = ProfileRequestSerializer(data=request.data)
        if serializer.is_valid():
            try:
                proj = Project.objects.get(id=id)
                users = serializer.data['user']
                print(users)
                for user in users:
                    print(user)
                    user = json.loads(user)
                    if user['id'] is None:
                        return Response({'detail': 'Bad input format'}, status=status.HTTP_400_BAD_REQUEST)
                    prof, created = UserProfile.objects.get_or_create(
                        profile_id=user['id'], name=user['Name'] if user['Name'] is not None else '')
                    prof.friend_count = user['Friend_count'] if user['Friend_count'] is not None else 0
                    prof.follower_count = user['Follower_count'] if user['Follower_count'] is not None else 0
                    prof.following_count = user['Following_count'] if user['Following_count'] is not None else 0
                    prof.belong_to.add(proj.id)
            except Project.DoesNotExist:
                return Response({"detail": 'No Project with this ID exist'}, status=status.HTTP_404_NOT_FOUND)

            return Response({"detail":"Success"}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
