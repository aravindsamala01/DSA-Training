function isBalanced(expression) {
    const stack = []; // Stack to track opening parentheses

    // Iterate through each character in the expression
    for (const char of expression) {
        if (char === '(') {
            stack.push(char); // Push opening parenthesis onto the stack
        } else if (char === ')') {
            if (stack.length === 0) {
                return "Not Balanced"; // Unmatched closing parenthesis
            }
            stack.pop(); // Matched closing parenthesis, pop from stack
        }
    }

    // Check if stack is empty (all parentheses are matched)
    return stack.length === 0 ? "Balanced" : "Not Balanced";
}

console.log(isBalanced("((()))()()"));  // Output: Balanced
console.log(isBalanced("())((())"));    // Output: Not Balanced
