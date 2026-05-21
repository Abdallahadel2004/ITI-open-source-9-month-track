from django.db import models
from django.core.exceptions import ValidationError

level_choices = [
    ('L1', 'Level 1'),
    ('L2', 'Level 2'),
    ('L3', 'Level 3'),
    ('L4', 'Level 4'),
    ('L5', 'Level 5'),
    ('L6', 'Level 6'),
]

gender_choices = [
    ('M', 'Male'),
    ('F', 'Female'),
]


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()

    def __str__(self):
        return self.name


class Teacher(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    salary = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name


class Course(models.Model):
    name = models.CharField(max_length=100)
    hours = models.IntegerField()
    level = models.CharField(max_length=2, choices=level_choices)
    teacher = models.ForeignKey(
        Teacher,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='courses'
    )

    def __str__(self):
        return self.name


class Student(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    age = models.IntegerField()
    gender = models.CharField(max_length=1, choices=gender_choices)
    address = models.CharField(max_length=200)
    level = models.CharField(max_length=2, choices=level_choices)
    courses = models.ManyToManyField(Course, through='Enrollment', blank=True)

    def __str__(self):
        return self.name


class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='enrollments')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='enrollments')
    grade = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    enrolled_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('student', 'course')

    def __str__(self):
        return f"{self.student.name} - {self.course.name}"

    def clean(self):
        """Validation: student level must match course level, and course must have a teacher."""
        if self.student.level != self.course.level:
            raise ValidationError(
                f"Student level ({self.student.get_level_display()}) "
                f"does not match course level ({self.course.get_level_display()}). "
                f"Student can only enroll in courses of the same level."
            )
        if self.course.teacher is None:
            raise ValidationError(
                f"Course '{self.course.name}' does not have an assigned teacher. "
                f"A teacher must be assigned before students can enroll."
            )

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)
