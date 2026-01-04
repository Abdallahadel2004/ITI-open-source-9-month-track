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
        price = 0;
        quantity = 0;
        productCode = ++productCount;
    }

    Product(const string& name, double price, int quantity) {
        setName(name);
        setPrice(price);
        setQuantity(quantity);
        productCode = ++productCount;
    }

    Product(const Product& uniq) {
        this->name = uniq.name;
        this->price = uniq.price;
        this->quantity = uniq.quantity;
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
            cout << "invalid name"<< endl;
            return;
        }
        name = n;
    }

    void setPrice(double p) {
        if (p < 0) {
            cout << "Price cannot be negative." << endl;
            return;
        }
        price = p;
    }

    void setQuantity(int q) {
        if (q < 0) {
            cout << "quantity cannot be negative." << endl;
            return ;
        }
        quantity = q;
    }

    //task2 add busnness


    double calculateTotalprice()const {
         return price * quantity;
    }

    double calculatePricewihtTax(double tax=0.50){
        double total=calculateTotalprice();
        return total +total *tax;

    }
    void printInfo() const {

        cout << "Product Info";
        cout << "Name         : " << name << "\n";
        cout << "Price        : " << price << "\n";
        cout << "Quantity     : " << quantity << "\n";
        cout << "Total Value  : " << calculateTotalprice() << "\n";
        cout << "Product Code : " << productCode << "\n";

    }

    friend void auditProduct(const Product& p);
};

int Product::productCount = 0;

void auditProduct(const Product& p) {
    cout << "       AUDIT REPORT       ";
    cout << "Name         : " << p.name << "\n";
    cout << "Price        : " << p.price << "\n";
    cout << "Quantity     : " << p.quantity << "\n";
    cout << "Total Value  : " << p.price * p.quantity << "\n";
    cout << "Product Code : " << p.productCode << "\n";

}

int main() {
    Product p1;
    Product p2("Laptop", 25000, 5);
    Product p3 = p2;

    p1.setName("IPhone");
    p1.setPrice(10000);
    p1.setQuantity(3);

    p1.setName("");
    p1.setPrice(-50);
    p1.setQuantity(-10);

    Product arr[5];

    arr[0] = p1;
    arr[1] = p2;
    arr[2] = p3;

    for (int i = 3; i < 5; ++i) {
        string name;
        double price;
        int quantity;

        cout << "Enter product " << i + 1 << " name: ";
        cin >> ws;
        getline(cin, name);

        cout << "Enter product " << i + 1 << " price: ";
        cin >> price;

        cout << "Enter product " << i + 1 << " quantity: ";
        cin >> quantity;

        Product temp(name, price, quantity);
        arr[i] = temp;
    }

    double totalInventoryValueBeforeTax = 0;
    double totalInventoryValueAfterTax = 0;
    double taxRate = 0.14;

    for (int i = 0; i < 5; ++i) {
        totalInventoryValueBeforeTax += arr[i].calculateTotalprice();
        totalInventoryValueAfterTax += arr[i].calculatePricewihtTax(taxRate);
    }

    cout << "\nTotal inventory value (before tax): "
         << totalInventoryValueBeforeTax << endl;
    cout << "Total inventory value (after tax): "
         << totalInventoryValueAfterTax << endl;

    cout << "\nAudit p2:\n";
    auditProduct(p2);

    cout << "\nAudit arr[4]:\n";
    auditProduct(arr[4]);

    cout << "\nPrinting all products info:\n";
    for (int i = 0; i < 5; ++i) {
        arr[i].printInfo();
    }

    return 0;
}
