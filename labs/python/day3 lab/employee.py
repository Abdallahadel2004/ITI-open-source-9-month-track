import re
from person import Person

class Employee(Person):
    def __init__(self, name, money, mood, healthRate, id, car, email, salary, distanceToWork):
        super().__init__(name, money, mood, healthRate)
        self.id = id
        self.car = car
        self.email = email
        self.salary = salary
        self.distanceToWork = distanceToWork

    @property
    def salary(self):
        return self._salary
    
    @salary.setter
    def salary(self, value):
        if value >= 1000:
            self._salary = value
        else:
            print("Salary must be 1000 or more.")
            self._salary = 1000

    @property
    def email(self):
        return self._email
    
    @email.setter
    def email(self, value):
        pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
        if re.match(pattern, value):
            self._email = value
        else:
            print("Invalid email format.")
            self._email = "invalid@example.com"

    @property
    def healthRate(self):
        return self._healthRate
    
    @healthRate.setter
    def healthRate(self, value):
        if 0 <= value <= 100:
            self._healthRate = value
        else:
            print("Health rate must be between 0 and 100.")
            self._healthRate = max(0, min(100, value))

    def work(self, hours):
        if hours == 8:
            self.mood = "happy"
        elif hours > 8:
            self.mood = "tired"
        else:
            self.mood = "lazy"

    def drive(self, distance):
        print(f"Driving to work. Distance: {distance}km")
        self.car.run(60, distance)

    def refuel(self, gasAmount):
        self.car.fuelRate += gasAmount

    def send_mail(self, to_addr, subject, receiver_name):
        from email_composer import compose_email
        compose_email(self.email, to_addr, subject, receiver_name)

    def to_dict(self):
        return {
            'name': self.name,
            'money': self.money,
            'mood': self.mood,
            'healthRate': self.healthRate,
            'id': self.id,
            'email': self.email,
            'salary': self.salary,
            'distanceToWork': self.distanceToWork,
            'car': {
                'name': self.car.name,
                'fuelRate': self.car.fuelRate,
                'velocity': self.car.velocity
            }
        }
