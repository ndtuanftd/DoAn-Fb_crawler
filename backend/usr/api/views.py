from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User
from .serializers import UserSerializer, UserTokenObtainSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = UserTokenObtainSerializer
