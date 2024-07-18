import java.util.*;
public class FindDuplicates {
    public static List<Integer> duplicates(long[] arr) {
        // Step 1: Create an empty hashmap to store element frequencies
        Map<Long, Integer> freqMap = new HashMap<>();
        List<Integer> result = new ArrayList<>();
        // Step 2: Iterate through the array and count element frequencies
        for (long num : arr) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }
        // Step 3: Iterate through the hashmap to find duplicates
        for (Map.Entry<Long, Integer> entry : freqMap.entrySet()) {
            if (entry.getValue() > 1) {
                result.add(Math.toIntExact(entry.getKey()));
            }
        }
        // Step 4: If no duplicates found, add -1 to the result
        if (result.isEmpty()) {
            result.add(-1);
        }
        // Step 5: Sort the result
        Collections.sort(result);
        // Step 6: Return the result list containing duplicate elements or -1
        return result;
    }
    public static void main(String[] args) {
        long[] a = {1,2,3,6,3,6,1};
        List<Integer> duplicatesFound = duplicates(a);
        System.out.print("Duplicate elements: ");
        for (int element : duplicatesFound) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
}