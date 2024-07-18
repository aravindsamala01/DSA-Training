# This function finds all subarrays with a zero sum in a given list of numbers.
def find_zero_sum_subarrays(nums):
    subarrays = []
    cum_sum_map = {}
    cum_sum = 0

    for i in range(len(nums)):
        cum_sum += nums[i]

        if cum_sum == 0:
            subarrays.append(nums[0:i+1])
        
        if cum_sum in cum_sum_map:
            start_indices = cum_sum_map[cum_sum]
            for start in start_indices:
                subarrays.append(nums[start+1:i+1])
            cum_sum_map[cum_sum].append(i)
        else:
            cum_sum_map[cum_sum] = [i]

    return subarrays

# Get the list of numbers from the user.
nums = list(map(int, input("Enter the numbers separated by space: ").split()))
# Find the subarrays with a zero sum.
result = find_zero_sum_subarrays(nums)
# Print the result.
print("Subarrays with zero sum are:")
for subarray in result:
    print(subarray)