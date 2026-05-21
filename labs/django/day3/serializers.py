from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Teacher, Course, Student, Enrollment


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6, style={'input_type': 'password'})
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    teacher_name = serializers.CharField(source='teacher.name', read_only=True)

    class Meta:
        model = Course
        fields = '__all__'


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class EnrollmentSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.name', read_only=True)
    course_name = serializers.CharField(source='course.name', read_only=True)

    class Meta:
        model = Enrollment
        fields = '__all__'

    def validate(self, attrs):
        student = attrs.get('student')
        course = attrs.get('course')

        if self.instance:
            student = student or self.instance.student
            course = course or self.instance.course

        if student and course:
            if student.level != course.level:
                raise serializers.ValidationError(
                    f"Student level ({student.get_level_display()}) "
                    f"does not match course level ({course.get_level_display()}). "
                    f"Student can only enroll in courses of the same level."
                )
            if course.teacher is None:
                raise serializers.ValidationError(
                    f"Course '{course.name}' does not have an assigned teacher. "
                    f"A teacher must be assigned before students can enroll."
                )
        return attrs
