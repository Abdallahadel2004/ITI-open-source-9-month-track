#include<iostream>
using namespace std;
int main()
{
/*
int choice;
double total = 0.0;
string discountAnswer;

cout<<"=====Snack Shop Menu===="<<endl;
cout<<"1.Chips       -10EGP "<<endl;
cout<<"2.Juice       -15EGP"<<endl;
cout<<"3.Sandwich     -25EGP"<<endl;
cout<<"4.Chocolate     -20EGP"<<endl;
cout<<"5.Exit"<<endl;
cout<<"enter the item number"<<endl;

do {
    cout << "Enter item number: ";
    cin >> choice;
    switch (choice) {
    case 1:
        total += 10;
        cout << "added Chips (10 EGP) to your order." << endl;
        break;
    case 2:
        total += 15;
        cout << "added Juice (15 EGP) to your order." << endl;
        break;
    case 3:
        total += 25;
        cout << "added Sandwich (25 EGP) to your order." << endl;
        break;
    case 4:
         total += 20;
         cout << "added Chocolate (20 EGP) to your order." << endl;
        break;
    case 5:
        cout << "your total bill = " << total << " EGP" << endl;
        break;
      default:
        cout << "wrong choice  Please select from 1–5." << endl;
        }
    } while (choice != 5);

    cout << "do you have a discount code? (yes/no): ";
    cin >> discountAnswer;

    if (discountAnswer == "yes" || discountAnswer == "YES" || discountAnswer == "Yes") {
        double discountedTotal = total * 0.9;
        cout << "Discounted total = " << discountedTotal << " EGP" << endl;
    }*/
//-------------------------------------------------------------------------------------------------------
//Task 2
/*

int grade1;
int grade2;
int grade3;
float avg;
 for (int i=0 ; i<1 ;i++){
    cout<<"enter your grades:"<<endl;
    cin>>grade1>>grade2>>grade3;
    avg =(grade1+grade2+grade3)/3;
}
    cout<<"average = "<<avg<<endl;
    if(avg>=90){
        cout<<"your Grade = A";
    }else if(avg>=80){
        cout<<"your Grade = B";
    }else if(avg>=70) {
        cout<<"your Grade = C";
    }else if(avg>=60) {
        cout<<"your Grade = D";
    }else if(avg<60) {
        cout<<"your Grade = F";
    }
    */
//--------------------------------------------------------------------------------------------------------
//Task 3


int n ;
cout<<"enter a number :";
cin >> n;
if (n >= 1 && n <= 10) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                cout << j << " ";
            }
            cout << endl;
            }
        cout << "--- reversed pattern ---" << endl;
        for (int i = n; i >= 1; i--) {
            for (int j = i; j >= 1; j--) {
                cout << j << " ";
            }
            cout << endl;
            }
            }

  return 0;

   }
