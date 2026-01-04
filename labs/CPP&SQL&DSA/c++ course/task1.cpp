#include <iostream>

using namespace std;
void Temp_read(float temp[],int size,int&min,int&max,int&average){

 min=temp[0];
 max=temp[0];
 int sum=0;

for(int i=0;i<size;i++){
     if(temp[i]<0)
        throw runtime_error("no negative inputs");

     if(temp[i]<min)
        min=temp[i];

     if(temp[i]>max)
        max=temp[i];

     sum+=temp[i];
     average= (float)sum / size;
}
}

int main()
{
float temp[5];
auto min=0,max=0,average=0;
cout<<"please enter 5 numbers: "<<endl;

for(int i=0;i<5;i++){
    cin>>temp[i];
    }

try{
Temp_read(temp,5,min,max,average);
}
catch(runtime_error&e){
  cout<<"error :"<<e.what()<<endl;

}

cout<<"min= "<<min<<endl;
cout<<"max= "<<max<<endl;
cout<<"average= "<<average;
    return 0;
}
