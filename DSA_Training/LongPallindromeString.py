def longest_palindromic_substring(s):
    # Return an empty string if the input is empty
    if not s:
        return ""

    start, end = 0, 0  # Initialize the start and end indices of the longest palindromic substring

    # Iterate through each character in the string
    for i in range(len(s)):
        len1 = expand_around_center(s, i, i)  # Get the length of the palindrome for odd length
        len2 = expand_around_center(s, i, i + 1)  # Get the length of the palindrome for even length
        max_len = max(len1, len2)  # Determine the maximum length between the two
        if max_len > end - start:  # If the found palindrome is longer than the current longest
            start = i - (max_len - 1) // 2  # Update the start index
            end = i + max_len // 2  # Update the end index

    return s[start:end + 1]  # Return the longest palindromic substring

def expand_around_center(s, left, right):
    # Expand around the center while the characters on both sides are equal
    while left >= 0 and right < len(s) and s[left] == s[right]:
        left -= 1  # Move left pointer to the left
        right += 1  # Move right pointer to the right
    return right - left - 1  # Return the length of the palindrome

# Take input from the user
s = input("Enter the string: ")
# Find the longest palindromic substring
result = longest_palindromic_substring(s)
# Print the result
print(f'The longest palindromic substring is "{result}"')
