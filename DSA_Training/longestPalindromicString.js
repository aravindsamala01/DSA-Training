//This function finds the longest palindromic in a given string.
function longestPalindrome(s) {
    if (s.length === 0) return ""; // Return empty string if input is empty

    let start = 0, end = 0;

    // Function to expand around the center and find the length of the palindrome
    const expandAroundCenter = (s, left, right) => {
        // Expand as long as the characters on both sides are the same
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // Length of the palindrome
    };

    // Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
        // Check for the longest palindrome with i as the center
        let len1 = expandAroundCenter(s, i, i);
        // Check for the longest palindrome with i and i+1 as the center (even length palindrome)
        let len2 = expandAroundCenter(s, i, i + 1);
        
        // Find the maximum length of the palindrome found
        let len = Math.max(len1, len2);
        
        // Update the start and end indices if a longer palindrome is found
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    // Return the longest palindromic substring
    return s.substring(start, end + 1);
}
const S = "BABAD";
console.log(longestPalindrome(S)); // Output: "BAB" or "ABA"
