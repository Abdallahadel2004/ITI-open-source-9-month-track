#include<iostream>
#include<cstdarg>
#include<cmath>
using namespace std;

double analyze(int count,...){
va_list args;
va_start (start,count);
int sum=0
for(int i=0;i<count;i++){
    int num =va_arg(args,int);
    sum+=i;
    int avg= sum/count ;

    double var =0 ;
    var+= pow(i-avg,2);

    var/=sum

}
va_end(args) ;
cout<<"avg ="<<avg<<endl;
cout<<"var ="<<var<<endl;

}
int main(){









return 0 ;
}
