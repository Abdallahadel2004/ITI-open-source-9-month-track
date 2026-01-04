#include<iostream>
#include<cstring>
#include<string>
#include <cctype>
using namespace std;
int main(){
//task1
/*
cout <<"Enter marks of 10 students"<<endl;
int grades[10];
double avg;
int sum;
int highest;
int lowest ;
int failedstudent=0 ;
int passedstudent=0;
for(int i=0; i<10 ; i++){
    cin >> grades[i];
    sum+= grades[i];
    highest=grades[0];
    lowest=grades[0];
    if(grades[i]>highest){
        highest=grades[i];
    }
    if(grades[i]<lowest){
        lowest=grades[i];
    }
    if(grades[i]>=60){
    passedstudent++;
    }else{
    failedstudent++;
    }
}

avg =  sum /10 ;
cout<<"Average = "<<avg<<endl;
cout<<"Highest = "<<highest<<endl;
cout<<"Lowest  = "<<lowest<<endl;
cout<<"Passed students = "<<passedstudent<<endl;
cout<<"Failed students  = "<<failedstudent<<endl;
*/


//______________________________________________________________________________________________________
//task2
/*
    int A[3][3], B[3][3];
    int sum[3][3], diff[3][3], trans[3][3];
    int maxB;

    cout << "Enter elements of matrix A (3x3):" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cin >> A[i][j];
        }
    }

    cout << "Enter elements of matrix B (3x3):" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cin >> B[i][j];
        }
    }

    cout << "Matrix A + B:" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            sum[i][j] = A[i][j] + B[i][j];
            cout << sum[i][j] << " ";
        }
        cout << endl;
    }

    cout << "Matrix A - B:" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            diff[i][j] = A[i][j] - B[i][j];
            cout << diff[i][j] << " ";
        }
        cout << endl;
    }

    cout << "Transpose of A:" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            trans[i][j] = A[j][i];
            cout << trans[i][j] << " ";
        }
        cout << endl;
    }

    maxB = B[0][0];
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (B[i][j] > maxB)
                maxB = B[i][j];
        }
    }

    cout << "Maximum element in B = " << maxB << endl;*/

//_____________________________________________________________________________________________________
//task3

 /*   string name;
    cout << "Enter your full name: ";
    getline(cin, name);

    int length = name.length();
    cout << "Number of characters = " <<length << endl;


    string reversed = "";
    for (int i = length - 1; i >= 0; i--) {
        reversed += name[i];
    }
    cout << "Reversed name = " << reversed << endl;

    int vowels = 0;
    for (int i = 0; i < length; i++) {
        char ch = tolower(name[i]);
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
            vowels++;
    }
    cout << "Number of vowels = " << vowels << endl;   */



return 0;
}













int A[3][3];
cout<<"please enter the matrix element"<<endl;
for(int i=0; i<3;i++){
    for(int j=0; i<3;i++){
        cin<<A[i][j];

    }
}
