# This function is to find min number
def findMin(arr):
    low = 0
    high = len(arr) - 1
    
    # checking low number
    while low < high:
        mid = (low + high) // 2
        
        # If mid element is greater than the high element, the min is in the right half
        if arr[mid] > arr[high]:
            low = mid + 1
        # Else the min is in the left half
        else:
            high = mid      
    return arr[low]

# Input
arr = [5, 6, 1, 2, 3, 4]
print(findMin(arr)) 
