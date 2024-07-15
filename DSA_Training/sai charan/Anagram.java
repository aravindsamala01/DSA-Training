import java.util.Arrays;
import java.util.Scanner;

public class Anagram {

    public boolean isAnagram(String s, String t) {
        // If the lengths are not equal, they cannot be anagrams
        if (s.length() != t.length()) {
            return false;
        }
        
        // Convert strings to character arrays
        char[] sArray = s.toCharArray();
        char[] tArray = t.toCharArray();
        
        // Sort both character arrays
        Arrays.sort(sArray);
        Arrays.sort(tArray);
        
        // Compare sorted arrays
        return Arrays.equals(sArray, tArray);
    }

    public static void main(String[] args) {
        Anagram solution = new Anagram();
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the first string: ");
        String s = scanner.nextLine();
        
        System.out.print("Enter the second string: ");
        String t = scanner.nextLine();
        
        boolean result = solution.isAnagram(s, t);
        
        if (result) {
            System.out.println("The strings are anagrams.");
        } else {
            System.out.println("The strings are not anagrams.");
        }
        
        scanner.close();
    }
}
