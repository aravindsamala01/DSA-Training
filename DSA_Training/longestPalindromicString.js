// Function to find the longest palindromic substring
function longestPalindromicSubstring(s) {
    if (!s) return "";
    let longest = "";
    
    // Helper function to expand around center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    // Main loop to check for palindromes
    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes
        let oddPalindrome = expandAroundCenter(i, i);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        // Even length palindromes
        let evenPalindrome = expandAroundCenter(i, i + 1);
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
}

// User definable input
const userInput = prompt("Enter a string to find the longest palindromic substring:");
console.log("The longest palindromic substring is: " + longestPalindromicSubstring(userInput));
