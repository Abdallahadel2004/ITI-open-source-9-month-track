from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.contrib import messages
from django.core.exceptions import ValidationError
from .models import Student, Course, Teacher, Enrollment




def home(request):
    return render(request, 'home.html')

def about_us(request):
    return render(request, 'about_us.html')

def contact_us(request):
    return render(request, 'contact_us.html')




def students(request):
    student_list = Student.objects.all()

    name = request.GET.get('name')
    phone = request.GET.get('phone')
    age = request.GET.get('age')
    gender = request.GET.get('gender')
    level = request.GET.get('level')
    address = request.GET.get('address')

    if name:
        student_list = student_list.filter(name__icontains=name)
    if phone:
        student_list = student_list.filter(phone__icontains=phone)
    if age:
        student_list = student_list.filter(age=age)
    if gender:
        student_list = student_list.filter(gender=gender)
    if level:
        student_list = student_list.filter(level=level)
    if address:
        student_list = student_list.filter(address__icontains=address)

    context = {
        'students': student_list,
        'levels': [('L1', 'Level 1'), ('L2', 'Level 2'), ('L3', 'Level 3'),
                   ('L4', 'Level 4'), ('L5', 'Level 5'), ('L6', 'Level 6')],
        'genders': [('M', 'Male'), ('F', 'Female')],
    }
    return render(request, 'students.html', context)


def add_student(request):
    if request.method == 'POST':
        try:
            student = Student(
                name=request.POST.get('name'),
                phone=request.POST.get('phone'),
                age=int(request.POST.get('age', 0)),
                gender=request.POST.get('gender'),
                address=request.POST.get('address'),
                level=request.POST.get('level'),
            )
            if request.FILES.get('image'):
                student.image = request.FILES['image']
            student.save()
            messages.success(request, f'Student "{student.name}" added successfully!')
        except Exception as e:
            messages.error(request, f'Error adding student: {e}')
    return redirect('students')


def delete_student(request, student_id):
    student = get_object_or_404(Student, id=student_id)
    student.delete()
    messages.success(request, f'Student "{student.name}" deleted.')
    return redirect('students')



def courses(request):
    course_list = Course.objects.select_related('teacher').all()


    name = request.GET.get('name')
    level = request.GET.get('level')
    hours = request.GET.get('hours')
    teacher_name = request.GET.get('teacher')

    if name:
        course_list = course_list.filter(name__icontains=name)
    if level:
        course_list = course_list.filter(level=level)
    if hours:
        course_list = course_list.filter(hours=hours)
    if teacher_name:
        course_list = course_list.filter(teacher__name__icontains=teacher_name)

    context = {
        'courses': course_list,
        'teachers': Teacher.objects.all(),
        'levels': [('L1', 'Level 1'), ('L2', 'Level 2'), ('L3', 'Level 3'),
                   ('L4', 'Level 4'), ('L5', 'Level 5'), ('L6', 'Level 6')],
    }
    return render(request, 'courses.html', context)


def add_course(request):
    if request.method == 'POST':
        try:
            teacher_id = request.POST.get('teacher')
            teacher = Teacher.objects.get(id=teacher_id) if teacher_id else None
            course = Course(
                name=request.POST.get('name'),
                hours=int(request.POST.get('hours', 0)),
                level=request.POST.get('level'),
                teacher=teacher,
            )
            course.save()
            messages.success(request, f'Course "{course.name}" added successfully!')
        except Exception as e:
            messages.error(request, f'Error adding course: {e}')
    return redirect('courses')


def delete_course(request, course_id):
    course = get_object_or_404(Course, id=course_id)
    course.delete()
    messages.success(request, f'Course "{course.name}" deleted.')
    return redirect('courses')


def assign_teacher(request):
    """Assign a teacher to a course."""
    if request.method == 'POST':
        try:
            course_id = request.POST.get('course_id')
            teacher_id = request.POST.get('teacher_id')
            course = get_object_or_404(Course, id=course_id)
            teacher = get_object_or_404(Teacher, id=teacher_id)
            course.teacher = teacher
            course.save()
            messages.success(request, f'Teacher "{teacher.name}" assigned to course "{course.name}".')
        except Exception as e:
            messages.error(request, f'Error assigning teacher: {e}')
    return redirect('courses')




def teachers(request):
    teacher_list = Teacher.objects.all()
    name = request.GET.get('name')
    age = request.GET.get('age')
    min_salary = request.GET.get('min_salary')
    max_salary = request.GET.get('max_salary')

    if name:
        teacher_list = teacher_list.filter(name__icontains=name)
    if age:
        teacher_list = teacher_list.filter(age=age)
    if min_salary:
        teacher_list = teacher_list.filter(salary__gte=min_salary)
    if max_salary:
        teacher_list = teacher_list.filter(salary__lte=max_salary)

    context = {
        'teachers': teacher_list,
    }
    return render(request, 'teachers.html', context)


def add_teacher(request):
    if request.method == 'POST':
        try:
            teacher = Teacher(
                name=request.POST.get('name'),
                age=int(request.POST.get('age', 0)),
                salary=float(request.POST.get('salary', 0)),
            )
            teacher.save()
            messages.success(request, f'Teacher "{teacher.name}" added successfully!')
        except Exception as e:
            messages.error(request, f'Error adding teacher: {e}')
    return redirect('teachers')


def delete_teacher(request, teacher_id):
    teacher = get_object_or_404(Teacher, id=teacher_id)
    teacher.delete()
    messages.success(request, f'Teacher "{teacher.name}" deleted.')
    return redirect('teachers')




def enroll_student(request):
    """Add a course to a student with grade — with validation."""
    if request.method == 'POST':
        try:
            student_id = request.POST.get('student_id')
            course_id = request.POST.get('course_id')
            grade = request.POST.get('grade')

            student = get_object_or_404(Student, id=student_id)
            course = get_object_or_404(Course, id=course_id)

            enrollment = Enrollment(
                student=student,
                course=course,
                grade=float(grade) if grade else None,
            )
            enrollment.save() 
            messages.success(request, f'Student "{student.name}" enrolled in "{course.name}" successfully!')
        except ValidationError as e:
            messages.error(request, e.message)
        except Exception as e:
            messages.error(request, f'Error enrolling student: {e}')
    return redirect('enrollments')


def unenroll_student(request, enrollment_id):
    enrollment = get_object_or_404(Enrollment, id=enrollment_id)
    enrollment.delete()
    messages.success(request, 'Student unenrolled successfully.')
    return redirect('enrollments')


def enrollments(request):
    enrollment_list = Enrollment.objects.select_related('student', 'course', 'course__teacher').all()

    student_name = request.GET.get('student')
    course_name = request.GET.get('course')
    level = request.GET.get('level')

    if student_name:
        enrollment_list = enrollment_list.filter(student__name__icontains=student_name)
    if course_name:
        enrollment_list = enrollment_list.filter(course__name__icontains=course_name)
    if level:
        enrollment_list = enrollment_list.filter(student__level=level)

    context = {
        'enrollments': enrollment_list,
        'students': Student.objects.all(),
        'courses': Course.objects.filter(teacher__isnull=False),  
        'levels': [('L1', 'Level 1'), ('L2', 'Level 2'), ('L3', 'Level 3'),
                   ('L4', 'Level 4'), ('L5', 'Level 5'), ('L6', 'Level 6')],
    }
    return render(request, 'enrollments.html', context)
