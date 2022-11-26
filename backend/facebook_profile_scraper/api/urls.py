from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, UserProfileViewSet

router = DefaultRouter()
router.register('project', ProjectViewSet)
router.register('profile', UserProfileViewSet)

urlpatterns = router.urls
