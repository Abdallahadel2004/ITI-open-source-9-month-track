#task1
student_data="""1,Ahmed Ali
2,Sara Mohamed
3,Omar Hassan"""

grades_data = """1,Python,85
1,Math,90
2,Python,78"""

file=open("student.txt","w")
file.write(student_data)
file.close()

file=open("grades.txt","w")
file.write(grades_data)
file.close()


def task2():
    with open("student.txt", "r") as file:
        student_list = file.readlines()
        for i in student_list:
            data = i.strip().split(",")
            print(f"name: {data[1]}")

def task3():
    with open("grades.txt", "r") as file2:
        grades = file2.readlines()
        for i in grades:
            if "Python" in i:
                print(i.strip())

def task4():
    student_id = int(input("enter student id: "))
    with open("student.txt", "r") as student_names, open("grades.txt", "r") as student_grades_file:
        student_list = student_names.readlines()
        student_grades = student_grades_file.readlines()
        for i in student_list:
            data = i.strip().split(",")
            if int(data[0]) == student_id:
                print(f"name: {data[1]}")
        for i in student_grades:
            data = i.strip().split(",")
            if int(data[0]) == student_id:
                print(f"{data[1]}:-{data[2]}")

task2()
print("--------------------------------------")
task3()
print("--------------------------------------")
task4()



