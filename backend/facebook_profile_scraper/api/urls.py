from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, UserProfileViewSet, ProfileRequestView

router = DefaultRouter()
router.register('project', ProjectViewSet)
router.register('profile', UserProfileViewSet)

urlpatterns = [
    path('project/<int:id>/add-profile', ProfileRequestView.as_view(), name='add-profile-request'),
] +router.urls
