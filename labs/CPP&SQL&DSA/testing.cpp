#include<iostream>
using namespace std;
 struct node{
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

void build(int arr[],int s){
    head=nullptr;
    size=s;
    for(int i=size-1;i>=0;i--){
        node* my_node=new node(arr[i]);
        my_node->next=head;
        head=my_node;
    }
}

void delte__first(){
    node*temp=head;
    head=head->next;
    delete temp;
    size--;
    cout<<"the first value is deleted"<<endl;
}
void insert_last(int value){
    node*new_node=new node(value);
     new_node->next=nullptr;
     node*current=head;
    while(current->next!=nullptr){
        current=current->next;
    }
    current->next=new_node;
    size++;
    cout<<"the value"<<value<<endl;
};


void delete_last(){
    if(head==nullptr){
        throw runtime_error("list is empty");
    }
    if(head->next==nullptr){
        delete head;
        head=nullptr;
        size--;
        cout<<"the last value is deleted"<<endl;
        return;
    }
    node*curr=head;
    while(curr->next->next!=nullptr){
        curr=curr->next;
    }
    node*temp=curr->next;
    curr->next=nullptr;
    delete temp;
    size--;
    cout<<"the last value is deleted"<<endl;


}






};
void conquer(int arr[],int l,int m,int r){
    int n1=m-l+1;
    int n2=r-m;
    int *left_arr=new int[n1];
    int *right_arr=new int[n2];

    for(int i=0;i<n1;i++){
        left_arr[i]=arr[i+l];}
        for(int j=0;j<n2;j++){
        right_arr[j]=arr[m+1+j];
    }
int i=0,j=0,k=l;
while(i<n1 && j<n2){
if (left_arr[i]<=right_arr[j]){
    arr[k]=left_arr[i];
    i++;
}else{
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
void divide(int arr[],int l,int r){
    if(l<r){
        int m=l+(r-l)/2;
        divide(arr,l,m);
        divide(arr,m+1,r);
        conquer(arr,l,m,r);
    }
    return;
    }



// Quick Sort Functions   
int partition(int arr[], int l, int r){
    int pivot = arr[r];  // Choose the rightmost element as pivot
    int i = l - 1;       // Index of smaller element
    
    for(int j = l; j < r; j++){
        // If current element is smaller than or equal to pivot
        if(arr[j] <= pivot){
            i++;
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // Swap arr[i+1] and arr[r] (pivot)
    int temp = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = temp;
    
    return i + 1;  // Return the partition index
}

void quickSort(int arr[], int l, int r){
    if(l < r){
        // Partition the array and get the pivot index
        int pi = partition(arr, l, r);
        
        // Recursively sort elements before and after partition
        quickSort(arr, l, pi - 1);
        quickSort(arr, pi + 1, r);
    }
}


void binarysearch(int arr[],int size,int target){
int left=0;
int right=size-1;
while(left<=right){
    int mid=left+right/2;
     if(arr[mid]==target){
        cout<<"the target is found at index "<<mid<<endl;
        return;
     }else if(arr[mid]<target){
        left=mid+1;
     }else if(arr[mid]>target){
        right=mid-1;
     }
     }
};
#include<iostream>
#include<vector>
using namespace std;
/*Lab:
1- tree full implementation (Nodes-Traversals-Insertion-Deletion-ArrayToBFS-SortedArrayToBFS).
2- Graphs Adjacent Matrix Representation.
3- Graphs Adjacent List Representation.
4- Mini Presentation: One of Two Subjects (Graph Traversals[BFS/DFS] - Shortest Path Algorithms[Dijkstra/Bellman-Ford/Floyd-Warshal]) Choose only one algorithm of the two topics.*/
struct Node{
    int data;
    Node*left;
    Node*right;
    Node(int val){
        data=val;
        left=nullptr;
        right=nullptr;
    }
};

void printNodes(Node*root){
    if(root==nullptr){
        return;
    }
    cout<<root->data<<" ";
    printNodes(root->left);
    printNodes(root->right);
};
// most left node first then root then most right node and so on
         //   5
         //   / \
         //  3   7
         //  / \ / \
         //  2 4 6 8                      
//Inorder traversal  2,3,4,5,6,7,8
void Inorder(Node*root){
    if(root==nullptr){ 
        return;                                                                                             
    }
    Inorder(root->left);
    cout<<root->data<<" ";
    Inorder(root->right);
};
// root first then most left node then most right node and so on  
//  Preorder traversal 5,3,2,4,7,6,8
void Preorder(Node*root){
    if(root==nullptr){
        return;
    }
    cout<<root->data<<" ";
    Preorder(root->left);
    Preorder(root->right);
};
// most left node first then most right node then root and so on
//Postorder traversal 2,4,3,6,8,7,5
void Postorder(Node*root){
    if(root==nullptr){
        return;
    }
    Postorder(root->left);
    Postorder(root->right);
    cout<<root->data<<" ";
};

Node* insertbst(Node*root,int val){
    if(root==nullptr){
        return new Node(val);
    }
    if(val<root->data){
        root->left=insertbst(root->left,val);
    }else{
        root->right=insertbst(root->right,val);
    }
    return root;
};

Node* deletebst(Node*root,int val){
    if(root==nullptr){
        return nullptr;
    }
    if(val<root->data){
        root->left=deletebst(root->left,val);
    }else if(val>root->data){
        root->right=deletebst(root->right,val);
    }//leaf node case
    else{
        if(root->left==nullptr && root->right==nullptr){
            delete root;
            return nullptr;
        }
        //one child case
        else if(root->left==nullptr){
            Node*temp=root->right;
            delete root;
            return temp;
        }//one child case
        else if(root->right==nullptr){
            Node*temp=root->left;
            delete root;
            return temp;
        }//two children case
        else{
            Node*temp=root->right;
            while(temp->left!=nullptr){
                temp=temp->left;
            }
            root->data=temp->data;
            root->right=deletebst(root->right,temp->data);
        }
    }
    return root;
};

Node* arraytoBFS(int arr[],int size){
    if(size==0){
        return nullptr;
    }
    Node*root=new Node(arr[0]);
    for(int i=1;i<size;i++){
        root=insertbst(root,arr[i]);
    }
    return root;
};


Node* sortedarraytoBFS(int arr[],int size){
    if(size<=0){
        return nullptr;
    }
    int mid=size/2;
    Node*root=new Node(arr[mid]);
    root->left=sortedarraytoBFS(arr,mid);
    root->right=sortedarraytoBFS(arr+mid+1,size-mid-1);
    return root;
};

//2- Graphs Adjacent Matrix Representation.
//3- Graphs Adjacent List Representation.

void adjacencyList(int graph[][3],int V){
    vector<int> adjList[V];
    for(int i=0;i<V;i++){
        for(int j=0;j<V;j++){
            if(graph[i][j]!=0){
                adjList[i].push_back(j);
            }
        }
    }
    for(int i=0;i<V;i++){
        cout<<i<<": ";
        for(int j=0;j<adjList[i].size();j++){
            cout<<adjList[i][j]<<" ";
        }
        cout<<endl;
    }
};

void adjacencyMatrix(int graph[][3],int V){
    int adjMatrix[V][V];
    for(int i=0;i<V;i++){
        for(int j=0;j<V;j++){
            adjMatrix[i][j]=0;
        }
    }
    for(int i=0;i<V;i++){
        for(int j=0;j<V;j++){
            adjMatrix[i][j]=graph[i][j];
        }
    }
    for(int i=0;i<V;i++){
        for(int j=0;j<V;j++){
            cout<<adjMatrix[i][j]<<" ";
        }
        cout<<endl;
    }
};


int main(){
    int graph[][3]={{0,1,1},{1,0,1},{1,1,0}};
    int V=3;
    adjacencyList(graph,V);
    cout<<endl;
    cout<<"adjacencyMatrix: "<<endl;
    adjacencyMatrix(graph,V);
    cout<<endl;
             //   5
         //   / \
         //  3   7
         //  / \ / \
         //  2 4 6 8    
    int arr[]={5,3,2,4,6,8,7};
    int size=7;
    Node*root=arraytoBFS(arr,size);
    cout<<"printNodes: ";
    printNodes(root);
    cout<<endl;
    cout<<"Inorder: ";
    Inorder(root);
    cout<<endl;
    cout<<"Preorder: ";
    Preorder(root);
    cout<<endl;
    cout<<"Postorder: ";
    Postorder(root);
    cout<<endl;
    return 0;
}




/*
int main(){
    int arr[]={1,2,3};
    linkedlist l;
    l.build(arr,3);
    for(int i=0; i<l.size;i++){
        cout<<l.head->data<<" ";
        l.head=l.head->next;
    }
    cout<<endl;
    divide(arr,0,2);
    for(int i=0;i<3;i++){
        cout<<arr[i]<<" ";
    }
    binarysearch(arr,3,2);
    return 0;
}*/