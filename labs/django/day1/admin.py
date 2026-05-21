from django.contrib import admin
from .models import Product, Student, Course, Teacher, Enrollment

admin.site.register([Product, Student, Course, Teacher, Enrollment])

