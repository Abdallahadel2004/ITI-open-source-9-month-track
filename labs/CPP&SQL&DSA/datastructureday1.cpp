
#include<iostream>
using namespace std;
/*

using namespace std;
//array implementation of sequence operations (build,get_at,set_at,insert_first,delete_first,insert_last,delete_last,inser_at,delete_at)
class sequence{
public:
   int*arr;
   int size;
   int count;
   
   void build(int s){
    size=s;
    arr=new int[size];
    count=0;
   }

   void get_at(int index){
      if(index<0 || index>=count) {
         throw out_of_range("index out of range");
      }
      cout<<"the value at index "<<index<<" is "<<arr[index]<<endl;
   }


   void set_at(int index,int value){
      if(index<0 || index>=count) {
         throw out_of_range("index out of range");
      }
      arr[index]=value;
      cout<<"the value at index "<<index<<" is set to "<<value<<endl;
   }

   void insert_first(int value){             
    if (count>=size) {
        throw out_of_range("array is full");}
        for(int i=count-1;i>=0;i--){
        arr[i+1]=arr[i];
        }
        arr[0]=value;
        count++;
        cout<<"the value"<<value<<endl;
   }

   void delete_first(){
    if(count==0){
        throw runtime_error("array is empty");
    }
    for(int i=0;i<count-1;i++){                           //count =5 ,i=0,1,2,3,4 and arr[i]=arr[i+1] means arr[0]=arr[1],arr[1]=arr[2],arr[2]=arr[3],arr[3]=arr[4],arr[4]=arr[5] and so on and the last one will be deleted and the count will be decremented by 1
        arr[i]=arr[i+1];}
        count --;
        cout<<"the first value is deleted"<<endl;
    }


//do reallocate in insert last and delete last
   void insert_last(int value){
    if (count>=size){
        throw out_of_range("array is full");
    }
    int *new_arr=new int[size+1];
    for(int i=0;i<count;i++){
        new_arr[i]=arr[i];
    }
    new_arr[count]=value;
    delete[] arr;
    arr=new_arr;
    size++;
    count++;
    cout<<"the value"<<value<<endl;
   }
   void delete_last(){
    if(count==0){
        throw runtime_error("array is empty");
    }
    int *new_arr=new int[size-1];
    for(int i=0;i<count-1;i++){
        new_arr[i]=arr[i];
    }
    delete[] arr;
    arr=new_arr;
    size--;
    count--;
    cout<<"the last value is deleted"<<endl;
   }
   void inser_at(int index,int value){
    if(index<0 || index>=count){
        throw out_of_range("index out of range");
    }
    for(int i=count-1;i>=index;i--){
        arr[i+1]=arr[i];
    }
    arr[index]=value;
    count++;
    cout<<"the value"<<value<<endl;
   }
   
   void delete_at(int index){
    if(index<0 || index>=count){
        throw out_of_range("index out of range");
    }
    for(int i=index;i<count-1;i++){
        arr[i]=arr[i+1];
    }
    count--;
    cout<<"the value at index "<<index<<" is deleted"<<endl;
   }
};
int main(){
    sequence s;
    s.build(5);
    s.insert_first(1);
    s.insert_first(2);
    s.insert_first(3);
    s.insert_first(4);
    s.insert_first(5);
    s.get_at(0);
    s.set_at(0,10);
    s.insert_last(6);
    s.delete_last();
    s.inser_at(0,10);
    s.delete_at(0);
    return 0;
}
*/
/*class node{
public:
int data;
node* next;
node(int value){
value=data;
next=nullptr;
}
class linkedlist{
}
}











*/

//  day 2 task: make sequence operation in linked list (build ,get_at,set_at,insert_first,delete_first,insert_last,delete_last,inser_at,delete_at)

/*
class node{
    public:
    int data;                                                                                                                  
    node*next;
node(int val){
        data=val;
        next=nullptr;
    }
};
class linkedlist{
    public:
    node*head;
    int size;
    
    linkedlist(){
        head=nullptr;
        size=0;
    
    }

    void build(int arr[],int s){                                     //123           3                              
    head=nullptr;
    size=s;
    for(int i=0;i<size;i++){     //i=0,1,2
        node*new_node=new node(arr[i]);   //32 1
        new_node->next=head;//3->2->1->nullptr
        head=new_node;}// head=3  
    }


  void get_at(int index){
    if(index<0||index>=size){
      throw out_of_range("index out of range");
    }
    node*current=head;
    for(int i=0;i<index;i++){
        current=current->next;
    }
    cout<<"the value at index "<<index<<" is "<<current->data<<endl;
    }

    void set_at(int index,int value){
    if(index<0||index>=size){
      throw out_of_range("index out of range");
    }
    node*current=head;
    for(int i=0;i<index;i++){
        current=current->next;
    }
    current->data=value;
    cout<<"the value at index "<<index<<" is set to "<<value<<endl;
    }

    void insert_first(int value){
    node*new_node=new node(value);
    new_node->next=head;
    head=new_node;
    size++;
    cout<<"the value"<<value<<endl;
    }

    void delete_first(){
        if(head==nullptr){
            throw runtime_error("list is empty");
        }
        node*temp=head;
        head=head->next;
        delete temp;
        size--;
        cout<<"the first value is deleted"<<endl;
    }

    void insert_last(int value){
    node*new_node=new node(value);
    new_node->next=nullptr;
    if(head==nullptr){
        head=new_node;
    }
    else{
        node*current=head;
        while(current->next!=nullptr){
            current=current->next;
        }
        current->next=new_node;
    }
    size++;
    cout<<"the value"<<value<<endl;
   }

   void delete_last(){
    if (head==nullptr){
        throw runtime_error("list is empty");
    }
    node*current=head;
    node*previous=nullptr;
    while(current->next!=nullptr){
        previous=current;
        current=current->next;
    }
    delete current;
    previous->next=nullptr;
    size--;
    cout<<"the last value is deleted"<<endl;
   }

   void insert_at(int index,int value){
    if(index<0||index>=size){
      throw out_of_range("index out of range");
    }
    node*new_node=new node(value);
    node*current=head;
    for(int i=0;i<index;i++){
        current=current->next;
    }
    new_node->next=current->next;
    current->next=new_node;
    size++;
    cout<<"the value"<<value<<endl;
   }

   void delete_at(int index){
    if(index<0||index>=size){
      throw out_of_range("index out of range");
    }
    node*current=head;
    for(int i=0;i<index;i++){
        current=current->next;
    }
    node*temp=current->next;
    current->next=current->next->next;
    delete temp;
    size--;
    cout<<"the value at index "<<index<<" is deleted"<<endl;
   }

};

*/









  
/*

//day3 task : make merge sort in array


void conquer(int arr[],int left,int mid,int right){
int n1=mid-left+1;
int n2=right-mid;
int *left_arr=new int[n1];
int *right_arr=new int[n2];


for(int i=0;i<n1;i++){
    left_arr[i]=arr[left+i];
}
for(int j=0;j<n2;j++){
    right_arr[j]=arr[mid+1+j];
}


int i=0,j=0,k=left;

while(i<n1 && j<n2){
    if(left_arr[i]<=right_arr[j]){
        arr[k]=left_arr[i];
        i++;
    }
    else{
        arr[k]=right_arr[j];
        j++;
    }
    k++;
}

while(i<n1){
    arr[k]=left_arr[i];
    i++;
    k++;
}
while(j<n2){
    arr[k]=right_arr[j];
    j++;
    k++;
}
}    

void divide(int arr[],int left,int right){
    if(left<right){
        int mid=(left+right)/2;
        divide(arr,left,mid);
        divide(arr,mid+1,right);
        conquer (arr,left,mid,right);

    }
    return;
}

int main(){
    int arr[6]={6,5,4,3,2,1};
    divide(arr,0,5);
    for(int i=0;i<6;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}
*/


//#include<iostream>
//#include<vector>






int countOccurrences(int arr[],int size,int target){
    int count =0;
    for(int i=0;i<size;i++){
        if(arr[i]==target){
            count++;
        }
    }
    return count;
};

int findMIn(int arr[],int size){
    int min=arr[0];
      for(int i=1;i<size;i++){
        if(arr[i]<min){
            min=arr[i];
        }
      }
      return min;
};


bool isSorted(int arr[],int size){
    for(int i=0;i<size-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
};



int firstOccurrence(int arr[],int size,int target){
   int l=0;
   int r=size-1;
   int result=-1;
   while(l<=r){
    int mid=(l+r)/2;
    if(arr[mid]==target){
        result=mid;
        r=mid-1;
    }else if(arr[mid]<target){
        l=mid+1;
    }else{
        r=mid-1;
    }
   }
   return result;
};


int lastOccurrence(int arr[],int size,int target){
    int l=0;
    int r=size-1;
    int result=-1;
    while(l<=r){
        int mid=(r-l)/2+l;
        if(arr[mid]==target){
            result=mid;
            l=mid+1;
        }else if(arr[mid]<target){
            l=mid+1;
        }else{
            r=mid-1;
        }
    }
    return result;
};


using namespace std;
 class Node {
    public:
    int data;
    Node *left;
    Node *right;
  
    Node(int value) {
      data = value;
      left = nullptr;
      right = nullptr;
    }
  };

int countNodes(Node*root){
    if(root==nullptr){
        return 0;
    }
    int count=1;
    count+=countNodes(root->left);
    count+=countNodes(root->right);
    return count;

}

int main(){

    Node*root=new Node(50);
    root->left=new Node(17);
    root->right=new Node(72);
    root->left->left=new Node(12);
    root->left->right=new Node(23);
    root->right->left=new Node(54);
    root->right->right=new Node(76);
    root->left->left->left=new Node(9);
    root->left->left->right=new Node(14);
    root->right->right->left=new Node(  19);
    root->right->left->right=new Node(67);
    cout<<countNodes(root)<<endl;
    return 0;


    int arr[]={
        -1,
        1,
        7,
        9,
        2,
        6,
        9,
        5,
        11,
        5


    };
    
    

    return 0;

};

/*Lab:
1- tree full implementation (Nodes-Traversals-Insertion-Deletion-ArrayToBFS-SortedArrayToBFS).
2- Graphs Adjacent Matrix Representation.
3- Graphs Adjacent List Representation.
4- Mini Presentation: One of Two Subjects (Graph Traversals[BFS/DFS] - Shortest Path Algorithms[Dijkstra/Bellman-Ford/Floyd-Warshal]) Choose only one algorithm of the two topics.*/
