# This function calculates the total number of ways to cover a distance 'n' by taking 1, 2 or 3 steps at a time.
def count_ways_to_cover_distance(n):
    # Base case: If the distance is negative, there are no ways to cover it.
    if n < 0:
        return 0
    # Base case: If the distance is 0, there is exactly one way to cover it (by not moving).
    elif n == 0:
        return 1
    
    # Create a dynamic programming array to store the number of ways to cover each distance from 0 to 'n'.
    dp = [0] * (n + 1)
    # There is one way to cover a distance of 0 (by not moving).
    dp[0] = 1  

    # Iterate over each distance from 1 to 'n'.
    for i in range(1, n + 1):
        # The number of ways to cover the current distance is the sum of the number of ways to cover the distances 1, 2 and 3 steps behind.
        dp[i] += dp[i - 1] if i - 1 >= 0 else 0
        dp[i] += dp[i - 2] if i - 2 >= 0 else 0
        dp[i] += dp[i - 3] if i - 3 >= 0 else 0

    # Return the total number of ways to cover the distance 'n'.
    return dp[n]

# Get the distance from the user.
n = int(input("Enter the distance: "))
# Calculate the total number of ways to cover the distance.
result = count_ways_to_cover_distance(n)
# Print the result.
print(f"The total number of ways to cover the distance {n} is {result}")