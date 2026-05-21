from django.urls import path
from . import views

urlpatterns = [

    path('', views.home, name='home'),
    path('about/', views.about_us, name='about_us'),
    path('contact/', views.contact_us, name='contact_us'),

    path('students/', views.students, name='students'),
    path('students/add/', views.add_student, name='add_student'),
    path('students/delete/<int:student_id>/', views.delete_student, name='delete_student'),

    path('courses/', views.courses, name='courses'),
    path('courses/add/', views.add_course, name='add_course'),
    path('courses/delete/<int:course_id>/', views.delete_course, name='delete_course'),
    path('courses/assign-teacher/', views.assign_teacher, name='assign_teacher'),

    path('teachers/', views.teachers, name='teachers'),
    path('teachers/add/', views.add_teacher, name='add_teacher'),
    path('teachers/delete/<int:teacher_id>/', views.delete_teacher, name='delete_teacher'),

    path('enrollments/', views.enrollments, name='enrollments'),
    path('enrollments/enroll/', views.enroll_student, name='enroll_student'),
    path('enrollments/unenroll/<int:enrollment_id>/', views.unenroll_student, name='unenroll_student'),
]
