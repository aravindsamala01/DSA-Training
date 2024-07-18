def hIndex(citations):
    # Step 1: Sort the citations array in descending order
    citations.sort(reverse=True)
    
    # Step 2: Traverse the sorted array and find the h-index
    h = 0
    for i, c in enumerate(citations):
        if c >= i + 1:
            h = i + 1
        else:
            break
    
    return h

# Ask for user input
citations_input = input("Enter the citations array (comma-separated): ")
citations = list(map(int, citations_input.split(',')))

# Calculate and print the h-index
print(f"The h-index is: {hIndex(citations)}")
