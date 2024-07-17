def longest_common_prefix(strings):
    # If the list of strings is empty, return an empty string
    if not strings:
        return ""
    
    # Sort the list of strings
    sorted_strings = sorted(strings)
    
    # The first and last strings in the sorted list
    first = sorted_strings[0]
    last = sorted_strings[-1]
    
    # Find the common prefix between the first and last strings
    i = 0
    while i < len(first) and i < len(last) and first[i] == last[i]:
        i += 1

    # Return the common prefix found
    return first[:i]

# Read input from the user and convert it to a set of strings
strings = set(input("Enter the strings separated by space: ").split())

# Find the longest common prefix among the input strings
result = longest_common_prefix(strings)

# Print the result
print(f'The longest common prefix is "{result}"')
