# Checking Numbers in the List
class ListNode:
    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next

# To Find the  Middle Number
def find_middle(head):
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

# Function to create a linked list from a list
def create_linked_list(values):
    if not values:
        return None
    head = ListNode(values[0])
    current = head
    for value in values[1:]:
        current.next = ListNode(value)
        current = current.next
    return head

# This Function to print the linked list
def print_linked_list(head):
    current = head
    while current:
        print(current.value, end=" -> " if current.next else "\n")
        current = current.next

# Input Of Values
values = [1, 2, 3, 4, 5]
linked_list = create_linked_list(values)
print("Original Linked List:")
print_linked_list(linked_list)

# To Print the Middle Number
middle_node = find_middle(linked_list)
print("\nMiddle Node:")
print(middle_node.value)
