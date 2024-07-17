# Checking Product
def productExceptSelf(nums):
    n = len(nums)
    # Initialize the left and right product arrays
    left = [1] * n
    right = [1] * n
    answer = [1] * n

    # Fill the left array
    for i in range(1, n):
        left[i] = left[i - 1] * nums[i - 1]

    # Fill the right array
    for i in range(n - 2, -1, -1):
        right[i] = right[i + 1] * nums[i + 1]

    # Construct the answer array
    for i in range(n):
        answer[i] = left[i] * right[i]

    return answer

# Input of num_1 and num_2
num_1 = [1, 2, 3, 4]
num_2 = [-1,1,0,-3,3]

# Printing OutPut
print(productExceptSelf(num_1))  
print(productExceptSelf(num_2)) 
