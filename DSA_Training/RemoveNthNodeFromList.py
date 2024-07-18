#  Listing Node Numbers
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
# Function to Removeing nth Number
def remove_nth_from_end(head, n):
    dummy = ListNode(0, head)
    first = dummy
    second = dummy

    # Move the first pointer n+1 steps ahead
    for _ in range(n + 1):
        first = first.next

    # Move both pointers until the first one reaches the end
    while first:
        first = first.next
        second = second.next

    # Remove the nth node
    second.next = second.next.next
    return dummy.next

#  This is Helper Function to print the linked list
def print_linked_list(head):
    current = head
    while current:
        print(current.val, end=' ')
        current = current.next
    print()

# Ihead of list
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

# Input of Nth Node
n = 2
new_head = remove_nth_from_end(head, n)
print_linked_list(new_head)  
