#include<iostream>
using namespace std;
float withdrawl(float balance,float amount){

if(amount<0)
    throw runtime_error("Withdrawal amount cannot be negative");
if(amount>balance)
    throw runtime_error("Insufficient balance!");
return balance - amount;
}

int main(){
    int amount;
int balance=5000;
cout<<"Your current balance ="<<balance<<endl;

while(true){
cout<<"Enter amount to withdraw (0 to quit): ";
cin>>amount;
if (amount==0)
    cout<<"Thank you for using our service"<<endl;
    break;
}
try {
            balance = withdrawl(balance, amount);
            cout << "Withdrawal successful! Remaining balance = " << balance << endl;
        } catch (exception &e) {
            cout << "Error: " << e.what() << endl;
        }
 return 0 ;
    }






