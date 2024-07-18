# Function to sorting 0,1,2
def sorting(arr):
    low = 0
    mid = 0
    high = len(arr) - 1
    
    # Checking Low, Mid, High Inputs
    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] == 1:
            mid += 1
        else:
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1

# Input of arr
arr = [0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0]
sorting(arr)
print(arr)   
