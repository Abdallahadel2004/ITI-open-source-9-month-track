public class lab2{
 public static void main(String[] args) {
 int arr[];
 arr = new int[1000];
 for(int i=0; i<1000;i++){
	 arr[i]=i;
 }
 int min = 0;
 int max = 0;
 long startTime = System.nanoTime();
 for(int i=0; i<1000;i++){
    if(arr[i]<min){
        min = arr[i];
    }
    if(arr[i]>max){
        max = arr[i];
    }

}
    long endTime = System.nanoTime();
    System.out.println("time taken: " + (endTime - startTime) + " nanoseconds");
    System.out.println("min: " + min);
    System.out.println("max: " + max);
}
}
