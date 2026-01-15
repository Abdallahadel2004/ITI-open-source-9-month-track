public class binnary {
    public static void main(String[] args) {
        int arr[] = new int[1000];
        for(int i = 0; i < 1000; i++){
            arr[i] = i; 
        }

        int max = arr[999];
        long startTime = System.nanoTime();
        int left = 0;
        int right = arr.length - 1;
        while(left <= right){
            int mid = (left + right) / 2;
            if(arr[mid] == max) max = arr[mid];
			else{
            left = mid + 1;
			}
        }
        long endTime = System.nanoTime();
        System.out.println("time taken: " + (endTime - startTime) + " nanoseconds");
        System.out.println("max: " + max);
    }
}
