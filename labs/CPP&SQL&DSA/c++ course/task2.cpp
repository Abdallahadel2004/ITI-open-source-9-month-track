#include<iostream>
#include<cstdarg>
#include<cmath>
using namespace std;

void analyze(int count,...){
va_list args;
va_start (args,count);
double sum=0;
double avg;
double var=0;

for(int i=0;i<count;i++){
    int num =va_arg(args,int);
    sum+=num;
}
va_end(args);

    avg= sum/count ;
    va_start(args,count);
for(int i=0; i<count;i++){
    int num =va_arg(args,int);
    var+= pow(num-avg,2);
}
    var/=count;

va_end(args) ;
cout<<"avg ="<<avg<<endl;
cout<<"var ="<<var<<endl;

}

int main()
{

analyze(7,3,4,5,6,7,8,9);

return 0 ;
}
