from employee import Employee
import json

class Office:
    employeesNum = 0

    def __init__(self, name):
        self.name = name
        self.employees = []

    @classmethod
    def change_emps_num(cls, num):
        cls.employeesNum = num

    def get_all_employees(self):
        return self.employees

    def get_employee(self, empId):
        for emp in self.employees:
            if emp.id == empId:
                return emp
        return None

    def hire(self, employee):
        self.employees.append(employee)
        Office.employeesNum += 1

    def fire(self, empId):
        emp = self.get_employee(empId)
        if emp:
            self.employees.remove(emp)
            Office.employeesNum -= 1

    def deduct(self, empId, deduction):
        emp = self.get_employee(empId)
        if emp:
            emp.salary -= deduction

    def reward(self, empId, reward):
        emp = self.get_employee(empId)
        if emp:
            emp.salary += reward

    def check_lateness(self, empId, moveHour):
        is_late = Office.calculate_lateness(moveHour)
        if is_late:
            self.deduct(empId, 10)
        else:
            self.reward(empId, 10)

    @staticmethod
    def calculate_lateness(moveHour):
        target_hour = 9
        return moveHour > target_hour

    def save_data(self):
        data = {
            'office_name': self.name,
            'employees': [emp.to_dict() for emp in self.employees]
        }
        with open('office_data.json', 'w') as f:
            json.dump(data, f, indent=4)
        print("Data saved to office_data.json")

    def load_data(self):
        try:
            with open('office_data.json', 'r') as f:
                data = json.load(f)
                print(f"Loaded data for office: {data.get('office_name')}")
                return data
        except FileNotFoundError:
            print("No saved data found.")
            return None
