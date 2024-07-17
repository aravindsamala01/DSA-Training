# This function calculates the maximum value that a thief can steal from a list of houses
# The thief cannot steal from adjacent houses, so we use dynamic programming to find the optimal solution
def max_steal(hval):
    n = len(hval)
    
    # Base cases: if there are no houses or only one house, the maximum value is 0 or the value of the single house, respectively
    if n == 0:
        return 0
    if n == 1:
        return hval[0]
    
    # Create a dynamic programming table to store the maximum value that can be stolen up to each house
    dp = [0] * n
    
    # Initialize the first two values of the table
    dp[0] = hval[0]
    dp[1] = max(hval[0], hval[1])
    
    # Fill in the rest of the table using the recurrence relation: max value at house i is max of value at house i plus value at house i-2, or value at house i-1
    for i in range(2, n):
        dp[i] = max(hval[i] + dp[i-2], dp[i-1])
    
    # The maximum value that can be stolen is the last value in the table
    return dp[-1]


# Get the values of the houses from the user
hval = list(map(int, input("Enter the values of houses separated by space: ").split()))

# Calculate and print the maximum value that can be stolen
result = max_steal(hval)
print(f"The maximum value the thief can steal is {result}")