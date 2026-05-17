class Car:
    def __init__(self, name, fuelRate, velocity):
        self.name = name
        self.fuelRate = fuelRate
        self.velocity = velocity

    @property
    def velocity(self):
        return self._velocity
    
    @velocity.setter
    def velocity(self, value):
        if 0 <= value <= 200:
            self._velocity = value
        else:
            print("Velocity must be between 0 and 200.")
            self._velocity = max(0, min(200, value))

    @property
    def fuelRate(self):
        return self._fuelRate
    
    @fuelRate.setter
    def fuelRate(self, value):
        if 0 <= value <= 100:
            self._fuelRate = value
        else:
            print("Fuel rate must be between 0 and 100.")
            self._fuelRate = max(0, min(100, value))

    def run(self, velocity, distance):
        self.velocity = velocity
        fuel_decrease = (distance / 10) * 10
        if self.fuelRate >= fuel_decrease:
            self.fuelRate -= fuel_decrease
            self.stop(distance)
        else:
            distance_covered = (self.fuelRate / 10) * 10
            self.fuelRate = 0
            self.stop(distance_covered, arrived=False)

    def stop(self, distance, arrived=True):
        self.velocity = 0
        if arrived:
            print(f"Arrived at destination. Distance covered: {distance}km.")
        else:
            print(f"Out of fuel! Stopped after {distance}km.")
