from car import Car
from employee import Employee
from office import Office

def main():
    print("--- Testing OOP System ---")
    

    iti_office = Office("ITI Smart Village")
    

    samy_car = Car(name="Fiat 128", fuelRate=100, velocity=0)
    

    samy = Employee(
        name="Samy", 
        money=5000, 
        mood="happy", 
        healthRate=100, 
        id=1, 
        car=samy_car, 
        email="samy@iti.com", 
        salary=2000, 
        distanceToWork=20
    )
    

    iti_office.hire(samy)
    
    
    samy.sleep(7)
    samy.eat(3)
    samy.drive(20) 
    
    iti_office.check_lateness(empId=1, moveHour=9.5)
    
    print(f"Samy's Salary after lateness check: {samy.salary}")
    
    iti_office.save_data()

if __name__ == "__main__":
    main()
