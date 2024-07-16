// balancedParentheses.js

function isBalanced(expression) {
    const stack = [];

    for (const char of expression) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return "Not Balanced";
            }
            stack.pop();
        }
    }

    return stack.length === 0 ? "Balanced" : "Not Balanced";
}

console.log(isBalanced("((()))()()"));  // Output will be: Balanced
console.log(isBalanced("())((())"));    // Output will be: Not Balanced
