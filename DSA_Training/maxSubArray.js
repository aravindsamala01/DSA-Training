function maxSubArray(nums) {
    // Initialize variables to store the maximum sum and the current sum.
    let maxSum = nums[0];
    let currentSum = nums[0];
    // Iterate through the array starting from the second element.
    for (let i = 1; i < nums.length; i++) {
        // Update the current sum: decide whether to add the current element to the existing subarray
        // or start a new subarray with the current element.
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // Update the maximum sum if the current sum is greater.
        maxSum = Math.max(maxSum, currentSum);
    }
    // Return the maximum sum found.
    return maxSum;
}
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6 (Subarray is [4, -1, 2, 1])