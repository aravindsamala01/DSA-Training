
import java.util.HashMap;


public class LongestSubstring{

    static int longestUniqueSubstr(String str){
        int n =str.length();
        int res = 0; //result
        int i = 0;

        //CREATING A HASH MAP TO STORE THE LAST POSITIONS OF OCCURENCE
        HashMap<Character, Integer > lastIndex = new HashMap<>();

        //STARTING FROM THE BEGINNING OF THE STRING;
         for(int  j= 0; j < n; j++){

            //IF THIS CHARACTER IS SEEN BEFORE , THEN UPDATE i
            if(lastIndex.containsKey(str.charAt(j))){
                i = Math.max(i, lastIndex.get(str.charAt(j))+1);
            }

            //UPDATE RESULT
            res = Math . max(res, j - i + 1);
            //UPDATE THE LAST OCCURENCE OF THE CURRENT CHARACTER 
            lastIndex.put(str.charAt(j), j);
         }
        
        return res;
        
    }
    
    public static void main(String[] args) {
        String str ="GEEKSFORGEEKS";
        System.out.println("Length of the longest substring without repeating characters: " + longestUniqueSubstr(str));
    }


}