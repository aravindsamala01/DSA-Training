class MissingDuplicates {
    static void printTwoElements(int[] arr, int n)
    {
        int[] temp = new int[n]; 
      // Creating temp array of size n with initial values as 0.
        int duplicateNumber = -1;
        int missingNumber = -1;
        for (int i = 0; i < n; i++) {
            temp[arr[i] - 1]++;
            if (temp[arr[i] - 1] > 1) {
                duplicateNumber = arr[i];
            }
        }
        for (int i = 0; i < n; i++) {
            if (temp[i] == 0) {
                missingNumber = i + 1;
                break;
            }
        }
        System.out.println("The Duplicate number is "  + duplicateNumber + "  "+  " The missing number is "+ missingNumber + ".");
    }
    public static void main(String[] args)
    {
        int[] arr = { 4,3,6,5,2,4 };
        int n = arr.length;
        printTwoElements(arr, n);
    }
}