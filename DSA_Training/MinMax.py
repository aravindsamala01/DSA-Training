def find_min_max(nums, low, high):
    if low == high:
        return (nums[low], nums[high])
    
    if high == low + 1:
        if nums[low] < nums[high]:
            return (nums[low], nums[high])
        else:
            return (nums[high], nums[low])
    
    mid = (low + high) // 2
    min1, max1 = find_min_max(nums, low, mid)
    min2, max2 = find_min_max(nums, mid + 1, high)
    
    return (min(min1, min2), max(max1, max2))

nums = list(map(int, input("Enter the numbers separated by space: ").split()))
min_element, max_element = find_min_max(nums, 0, len(nums) - 1)
print(f"The minimum array element is {min_element}")
print(f"The maximum array element is {max_element}")
