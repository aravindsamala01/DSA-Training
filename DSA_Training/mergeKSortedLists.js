// Definition for singly-linked list node.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;      // Initialize the value of the node.
        this.next = next;    // Initialize the next pointer of the node.
    }
}

// Function to merge K sorted linked lists.
function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null; // If the input list is empty, return null.

    const minHeap = new MinHeap(); // Create a min-heap to manage the smallest nodes.

    // Iterate through each linked list in the input list.
    lists.forEach(head => {
        if (head) minHeap.push(head); // If the head node is not null, push it to the heap.
    });

    let dummy = new ListNode(); // Create a dummy node for constructing the merged list.
    let tail = dummy;           // Initialize the tail pointer for the merged list.

    // While the heap is not empty, extract the smallest node and add it to the merged list.
    while (!minHeap.isEmpty()) {
        let minNode = minHeap.pop(); // Extract the smallest node from the heap.
        tail.next = minNode;         // Append the smallest node to the merged list.
        tail = tail.next;            // Move the tail pointer to the new end of the merged list.

        if (minNode.next) {
            minHeap.push(minNode.next); // If the extracted node has a next node, push it to the heap.
        }
    }

    return dummy.next; // Return the head of the merged sorted list.
}

// Min-heap class for managing the smallest nodes.
class MinHeap {
    constructor() {
        this.heap = []; // Initialize the heap as an empty array.
    }

    // Push a node to the heap.
    push(node) {
        this.heap.push(node); // Add the node to the end of the heap.
        this.heapifyUp(this.heap.length - 1); // Maintain the heap property by heapifying up.
    }

    // Pop the smallest node from the heap.
    pop() {
        if (this.isEmpty()) return null; // If the heap is empty, return null.

        const minNode = this.heap[0]; // Store the smallest node (root of the heap).
        const lastNode = this.heap.pop(); // Remove the last node from the heap.

        if (this.heap.length > 0) {
            this.heap[0] = lastNode; // Move the last node to the root of the heap.
            this.heapifyDown(0);     // Maintain the heap property by heapifying down.
        }

        return minNode; // Return the smallest node.
    }

    // Check if the heap is empty.
    isEmpty() {
        return this.heap.length === 0; // Return true if the heap is empty.
    }

    // Heapify up to maintain the heap property.
    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2); // Calculate the parent index.

        // While the current node is smaller than its parent, swap them.
        while (index > 0 && this.heap[index].val < this.heap[parent].val) {
            this.swap(index, parent); // Swap the current node with its parent.
            index = parent;           // Move the index to the parent.
            parent = Math.floor((index - 1) / 2); // Update the parent index.
        }
    }

    // Heapify down to maintain the heap property.
    heapifyDown(index) {
        let left = 2 * index + 1;  // Calculate the left child index.
        let right = 2 * index + 2; // Calculate the right child index.
        let smallest = index;      // Assume the current node is the smallest.

        // If the left child is smaller, update the smallest index.
        if (left < this.heap.length && this.heap[left].val < this.heap[smallest].val) {
            smallest = left;
        }

        // If the right child is smaller, update the smallest index.
        if (right < this.heap.length && this.heap[right].val < this.heap[smallest].val) {
            smallest = right;
        }

        // If the smallest index is not the current index, swap and heapify down recursively.
        if (smallest !== index) {
            this.swap(index, smallest); // Swap the current node with the smallest child.
            this.heapifyDown(smallest); // Heapify down recursively.
        }
    }

    // Swap two nodes in the heap.
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; // Swap the nodes at index i and j.
    }
}
