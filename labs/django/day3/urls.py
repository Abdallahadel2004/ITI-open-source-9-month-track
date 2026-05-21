from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserSignUpView,
    UserSignInView,
    ProductViewSet,
    TeacherViewSet,
    CourseViewSet,
    StudentViewSet,
    EnrollmentViewSet
)

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')
router.register(r'teachers', TeacherViewSet, basename='teacher')
router.register(r'courses', CourseViewSet, basename='course')
router.register(r'students', StudentViewSet, basename='student')
router.register(r'enrollments', EnrollmentViewSet, basename='enrollment')

urlpatterns = [
    path('signup/', UserSignUpView.as_view(), name='api-signup'),
    path('signin/', UserSignInView.as_view(), name='api-signin'),
    path('', include(router.urls)),
]
