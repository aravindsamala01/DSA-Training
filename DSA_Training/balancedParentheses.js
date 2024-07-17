// Function to check if a given parentheses expression is balanced
function isBalanced(expression) {
    const stack = []; // Stack to track opening parentheses

    // Iterate through each character in the expression
    for (const char of expression) {
        if (char === '(') {
            stack.push(char); // Push opening parenthesis onto the stack
        } else if (char === ')') {
            // If stack is empty and encountering a closing parenthesis, it's unbalanced
            if (stack.length === 0) {
                return "Not Balanced"; // Unmatched closing parenthesis
            }
            stack.pop(); // Matched closing parenthesis, pop from stack
        }
    }

    // Check if stack is empty to determine if expression is balanced or not
    return stack.length === 0 ? "Balanced" : "Not Balanced";
}

// Example usage with user input
const userInput1 = "((()))()()";
const userInput2 = "())((())";
console.log(isBalanced(userInput1));  // Output: Balanced
console.log(isBalanced(userInput2));  // Output: Not Balanced
