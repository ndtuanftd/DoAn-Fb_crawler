from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User

class UserTokenObtainSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class UserSerializer(ModelSerializer):
    class Meta: 
        model = User
        # fields = '__all__'
        fields = ['id','username', 'email', 'password']
        # extra_