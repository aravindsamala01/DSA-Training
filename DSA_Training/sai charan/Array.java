public class Array {
    public int minSubArrayLen(int target, int[] nums) {
        int start = 0;
        int sumSoFar = 0;
        int minLength = Integer.MAX_VALUE;
        
        for (int end = 0; end < nums.length; end++) {
            sumSoFar += nums[end];
            
            while (sumSoFar >= target) {
                minLength = Math.min(minLength, end - start + 1);
                sumSoFar -= nums[start];
                start++;
            }
        }
        
        return minLength == Integer.MAX_VALUE ? 0 : minLength;
    }

    public static void main(String[] args) {
        Array solution = new Array();
        
        // Test cases
        System.out.println(solution.minSubArrayLen(7, new int[]{2, 3, 1, 2, 4, 3})); // Output: 2
        System.out.println(solution.minSubArrayLen(4, new int[]{1, 4, 4})); // Output: 1
        System.out.println(solution.minSubArrayLen(11, new int[]{1, 1, 1, 1, 1, 1, 1, 1})); // Output: 0
    }
}
