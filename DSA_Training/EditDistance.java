
import java.util.Scanner;

public class EditDistance {

    public static int editDistance(String str1, String str2) {
        int m = str1.length();
        int n = str2.length();

        // Create a DP table to store results of subproblems
        int dp[][] = new int[m + 1][n + 1];

        // Fill dp[][] in bottom up manner
        for (int i = 0; i <= m; i++) {
            for (int j = 0; j <= n; j++) {

                // If first string is empty, only option is to insert all characters of second string
                if (i == 0) {
                    dp[i][j] = j; // Min. operations = j
                 }// If second string is empty, only option is to remove all characters of first string
                else if (j == 0) {
                    dp[i][j] = i; // Min. operations = i
                 }// If last characters are the same, ignore last character and recur for remaining string
                else if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1]; 
                }// If the last character is different, consider all possibilities and find the minimum
                else {
                    dp[i][j] = 1 + Math.min(dp[i][j - 1], // Insert
                            Math.min(dp[i - 1][j], // Remove
                                    dp[i - 1][j - 1])); // Replace

                            }}
        }

        return dp[m][n];
    }

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the first string:");
        String str1 = scanner.nextLine();

        System.out.println("Enter the second string:");
        String str2 = scanner.nextLine();

        System.out.println("The minimum number of operations required to convert '" + str1 + "' into '" + str2 + "' is " + editDistance(str1, str2) + ".");

        scanner.close();
    }
}
