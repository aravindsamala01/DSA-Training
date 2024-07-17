class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;      // Value of the node
        this.next = next;    // Pointer to the next node
    }
}

function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null; // Handle empty input
    
    const minHeap = new MinHeap(); // Min-heap for smallest node management
    
    lists.forEach(head => {
        if (head) minHeap.push(head); // Push heads of all lists to heap
    });
    
    let dummy = new ListNode(); // Dummy node for merged list construction
    let tail = dummy;           // Pointer to the end of merged list
    
    while (!minHeap.isEmpty()) {
        let minNode = minHeap.pop(); // Extract smallest node from heap
        tail.next = minNode;         // Append smallest node to merged list
        tail = tail.next;            // Move tail pointer to new end
        
        if (minNode.next) {
            minHeap.push(minNode.next); // Push next node of minNode to heap
        }
    }
    
    return dummy.next; // Return head of merged sorted list
}

class MinHeap {
    constructor() {
        this.heap = []; // Array to store nodes forming the heap
    }
    
    push(node) {
        this.heap.push(node); // Add node to heap
        this.heapifyUp(this.heap.length - 1); // Maintain heap property
    }
    
    pop() {
        if (this.isEmpty()) return null; // Return null if heap is empty
        
        const minNode = this.heap[0]; // Smallest node (root of heap)
        const lastNode = this.heap.pop(); // Remove last node from heap
        
        if (this.heap.length > 0) {
            this.heap[0] = lastNode; // Move last node to root
            this.heapifyDown(0);     // Maintain heap property
        }
        
        return minNode; // Return smallest node
    }
    
    isEmpty() {
        return this.heap.length === 0; // Check if heap is empty
    }
    
    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2); // Parent index
        
        while (index > 0 && this.heap[index].val < this.heap[parent].val) {
            this.swap(index, parent); // Swap if current node is smaller than parent
            index = parent;           // Move index to parent
            parent = Math.floor((index - 1) / 2); // Update parent index
        }
    }
    
    heapifyDown(index) {
        let left = 2 * index + 1;  // Left child index
        let right = 2 * index + 2; // Right child index
        let smallest = index;      // Assume current node is smallest
        
        if (left < this.heap.length && this.heap[left].val < this.heap[smallest].val) {
            smallest = left; // Update smallest if left child is smaller
        }
        
        if (right < this.heap.length && this.heap[right].val < this.heap[smallest].val) {
            smallest = right; // Update smallest if right child is smaller
        }
        
        if (smallest !== index) {
            this.swap(index, smallest); // Swap and heapify down recursively
            this.heapifyDown(smallest);
        }
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; // Swap nodes in heap
    }
}
