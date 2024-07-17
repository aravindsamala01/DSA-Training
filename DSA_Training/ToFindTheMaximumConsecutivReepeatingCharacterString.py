# To check word repeation  for the input
def max_consecutive_repeating_char(s):
    if not s:
        return ""
    max_char = s[0]
    max_count = 1
    current_char = s[0]
    current_count = 1

# Checking Character Number of loop
    for i in range(1, len(s)):
        if s[i] == current_char:
            current_count += 1
        else:
            if current_count > max_count:
                max_count = current_count
                max_char = current_char
            current_char = s[i]
            current_count = 1

    # Check the last group
    if current_count > max_count:
        max_count = current_count
        max_char = current_char
    return max_char

# Two Input's str_2 and str_2
input_str1 = "keeg"
input_str2 = "aaaabbcbbb"

#Printing OutPut
print(max_consecutive_repeating_char(input_str1))  
print(max_consecutive_repeating_char(input_str2))  
