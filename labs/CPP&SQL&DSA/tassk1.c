#include <iostream>
#include <string>
using namespace std;

class Product {
private:
    string name;
    double price;
    int quantity;
    static int productCount;
    int productCode;

public:
    Product() {
        name = "Unknown";
        price = 0.0;
        quantity = 0;
        productCode = ++productCount;
    }

    Product(const string& name, double price, int quantity) {
        setName(name);
        setPrice(price);
        setQuantity(quantity);
        productCode = ++productCount;
    }

    Product(const Product& other) {
        this->name = other.name;
        this->price = other.price;
        this->quantity = other.quantity;
        this->productCode = ++productCount;
    }

    ~Product() {
        cout << "Product " << productCode << " destroyed." << endl;
    }

    string getName() const {
        return name;
    }

    double getPrice() const {
        return price;
    }

    int getQuantity() const {
        return quantity;
    }

    int getProductCode() const {
        return productCode;
    }

    static int getProductCount() {
        return productCount;
    }

    void setName(const string& n) {
        if (n.empty()) {
            cout << "Invalid name. Keeping previous value: " << name << endl;
            return;
        }
        name = n;
    }

    void setPrice(double p) {
        if (p < 0) {
            cout << "Invalid price. Price cannot be negative." << endl;
            return;
        }
        price = p;
    }

    void setQuantity(int q) {
        if (q < 0) {
            cout << "Invalid quantity. Quantity cannot be negative." << endl;
            return;
        }
        quantity = q;
    }
};

int Product::productCount = 0;

int main() {
    Product p1;
    Product p2("Laptop", 15000.5, 10);
    Product p3 = p2;

    cout << "P1 code: " << p1.getProductCode() << " name: " << p1.getName() << endl;
    cout << "P2 code: " << p2.getProductCode() << " name: " << p2.getName() << endl;
    cout << "P3 code: " << p3.getProductCode() << " name: " << p3.getName() << endl;

    return 0;
}
