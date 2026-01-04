#include <iostream>
using namespace std;
class RemoteControl{
string brand;
int volume ;
int channel;

public:

    void setbrand(string b){
         brand=b;
     }

    void setvolume(int v){
        volume=v;

    }

     void setchannel(int c){
        channel=c;
     }

    string getbrand(){
    return brand;
     }

    int getvolume(){
    return volume;
     }

      int getchannel(){
      return channel;
      }
      void increaseVolume(){
       volume++;
     }
     void changechannel(int newchannel){
        channel=newchannel;
     }
    void mute(){
    volume=0;
    }
    void Showstatus(){
    cout<<"brand is :  "<<brand<<endl;
    cout<<"current channel: "<<channel<<endl;
    cout<<"current volume :"<<volume<<endl;

    }


} ;
int main()
{
     RemoteControl abdo;
     abdo.setbrand("LG");
     abdo.setchannel(32);
     abdo.setvolume(59);
     abdo.Showstatus();
     abdo.increaseVolume();
     abdo.mute();
     abdo.changechannel(35);
     abdo.Showstatus();
}
