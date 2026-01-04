#include <iostream>
#include <string>
using namespace std;

class SmartDevice {
private:
    string name;
    double powerLevel;
    double energyConsumption;
    int* history;
    static int deviceCount;

public:
    SmartDevice(string n = "Unknown", double power = 0.0, double consumption = 0.0)
        : name(n), powerLevel(power), energyConsumption(consumption)
    {
        history = new int[3];
        for (int i = 0; i < 3; ++i) {
            history[i] = 0;
        }
        deviceCount++;
    }

    SmartDevice(const SmartDevice& other)
        : name(other.name), powerLevel(other.powerLevel), energyConsumption(0.0)
    {
        history = new int[3];
        for (int i = 0; i < 3; ++i) {
            history[i] = other.history[i];
        }
        deviceCount++;
    }

    ~SmartDevice() {
        delete[] history;
        deviceCount--;
    }

    void AddConsumption(double amount) {
        if (amount > 0) {
            energyConsumption += amount;
        }
    }

    static int GetCount() {
        return deviceCount;
    }

    void SetHistory(int h1, int h2, int h3) {
        history[0] = h1;
        history[1] = h2;
        history[2] = h3;
    }

    double GetEnergyConsumption() const {
        return energyConsumption;
    }

    double GetPowerLevel() const {
        return powerLevel;
    }

    string GetName() const {
        return name;
    }

    SmartDevice& operator++() {
        powerLevel += 5;
        if (powerLevel > 100) {
            powerLevel = 100;
        }
        return *this;
    }

    double operator+(const SmartDevice& other) const {
        return this->energyConsumption + other.energyConsumption;
    }

    friend ostream& operator<<(ostream& out, const SmartDevice& d);
};

int SmartDevice::deviceCount = 0;

ostream& operator<<(ostream& out, const SmartDevice& d) {
    out << "Device Name       : " << d.name << "\n"
        << "Power Level       : " << d.powerLevel << "%\n"
        << "Energy Consumption: " << d.energyConsumption << "\n";

    return out;
}

class Room {
private:
    string roomName;
    SmartDevice devices[3];

public:
    Room(string name, const SmartDevice& d1, const SmartDevice& d2, const SmartDevice& d3)
        : roomName(name)
    {
        devices[0] = d1;
        devices[1] = d2;
        devices[2] = d3;
    }

    double CalculateTotalConsumption() const {
        double total = 0;
        for (int i = 0; i < 3; ++i) {
            total += devices[i].GetEnergyConsumption();
        }
        return total;
    }

    void PrintDevices() const {
        cout << "Room: " << roomName << "\n";
        for (int i = 0; i < 3; ++i) {
            cout << "Device " << (i + 1) << ":\n";
            cout << devices[i] << "\n";
        }
    }
};

int main() {
    SmartDevice ac("ac", 70, 5.5);
    SmartDevice tv("TV", 40, 2.3);
    SmartDevice lamp("Lamp", 30, 1.1);

    ac.SetHistory(10, 12, 11);
    tv.SetHistory(5, 6, 7);
    lamp.SetHistory(2, 2, 3);

    cout << "Devices:" << endl;
    cout << ac << endl;
    cout << tv << endl;
    cout << lamp << endl;

    ++ac;
    cout << "AC after adding :" << endl;
    cout << ac << endl;

    double sum = ac + tv;
    cout << "ac + tv energy = " << sum << endl;

    SmartDevice backup = ac;
    cout << "Backup of ac:" << endl;
    cout << backup << endl;

    Room r("Living Room", ac, tv, lamp);
    r.PrintDevices();
    cout << "Total room consumption = " << r.CalculateTotalConsumption() << endl;

    return 0;
}
