#include <iostream>
#include <cstring>
#include <string>
using namespace std;

int add (int a,int b){
      return a+b ;
}
float divide(float a,float b){
if(a==0)
    throw runtime_error("cannot divide on zero");
return a/b;

}
int max (int x ,int y ,int z){
    int max_num=x;
    if(y>max_num)
        max_num=y;
    else if(z>max_num)
        max_num=z;
return max_num;

}
int factorial (int n){
if(n<0)
    throw runtime_error("cannot be a zero");
if(n==0 || n==1)
    return 1;
return n*factorial(n-1);

}







int main(){
int input;
int x,y,z;
cout<<"---Math Utility Menu ---"<<endl;
cout<<"1.Add"<<endl;
cout<<"2.Divide"<<endl;
cout<<"3.Max of 3 Numbers"<<endl;
cout<<"4.Factorial"<<endl;
cout<<"Enter your choice :";
cin >>input;

if(input==1){
    cout<< "enter 2 numbers :";
    cin>>x>>y;
    cout<<"the result="<<add(x,y);

    }else if(input==2){
    cout<<"enter 2 numbers :"<<endl;
cin>>x>>y;
    cout<<"the result ="<<divide(x,y);

     }else if(input==3){
    cout<<"enter 3 numbers"<<endl;
    cin>>x>>y>>z;
    cout<<"the max is ="<<max(x,y,z);

     }else if (input==4){
    cout<<"enter number for factorial"<<endl;
   cin >>x;
   cout<<"the factorial of "<<x<<" ="<<factorial(x);
     }












return 0;
}
