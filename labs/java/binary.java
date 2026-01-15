public class binary{
 public static void main(String[] args) {
int arr[];
 arr = new int[1000];
 for(int i=0; i<1000;i++){
          arr[i]=i; 
      }
int min = arr[0];
int max = arr[arr.length - 1];
long startTime = System.nanoTime();
int left = 0;
int right = 999;
while(left <= right){
  int mid = (left + right)/2;
  if(arr[mid] == min){
    min = arr[mid];
  }
  if(arr[mid] == max){
    max = arr[mid];
  }
  if(arr[mid] > min){
  right = mid - 1;
  }
   else {left = mid + 1;}
      }

long endTime = System.nanoTime();
 System.out.println("time taken: " + (endTime - startTime) + " nanoseconds");
System.out.println("min: " + min);
System.out.println("max: " + max);
    }
}

