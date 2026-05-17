class Student:

    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    def get_details(self):
        return f"Name: {self.name}, Age: {self.age}, Grade: {self.grade}"
  
    school_name = "ABC High School"

    def update_grade(self, new_grade):
        self.grade = new_grade

    @staticmethod
    def school_motto():
        return "Knowledge is Power"

student1 = Student("Abdallah", 22, "ITI")
student2 = Student("Sara", 21, "ITI")
student3 = Student("Ahmed", 20, "ITI")

print("--- student details ---")
print(student1.get_details())
print(student2.get_details())
print(student3.get_details())

print("\n--- updating grade ---")
student1.update_grade("NTI")
print(student1.get_details())

print("\n--- school info ---")
print(f"School Name: {Student.school_name}")
print(f"School Motto: {Student.school_motto()}")
