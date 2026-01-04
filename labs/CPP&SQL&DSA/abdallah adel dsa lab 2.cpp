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
vector<int> Inorder(Node*root){
    vector<int> result;
    if(root==nullptr){ 
        return result;                                                                                             
    }

    // Traverse left subtree and append its inorder traversal
    vector<int> leftSubtree = Inorder(root->left);
    result.insert(result.end(), leftSubtree.begin(), leftSubtree.end());

    // Visit root
    result.push_back(root->data);

    // Traverse right subtree and append its inorder traversal
    vector<int> rightSubtree = Inorder(root->right);
    result.insert(result.end(), rightSubtree.begin(), rightSubtree.end());

    return result;
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

void adjacencyList(int graph[][3],int V){ // o(n^2)   space o(n)
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

void adjacencyMatrix(int graph[][3],int V){ // o(n^2)  space o(n^2)
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
    adjacencyMatrix(graph,V);
    int arr[]={1,2,3,4,5,6,7,8,9,10};
    int size=10;
    Node*root=arraytoBFS(arr,size);
    printNodes(root);
    cout<<endl;
    Inorder(root);
    cout<<endl;
    Preorder(root);
    cout<<endl;
    Postorder(root);
    cout<<endl;
    return 0;
}



