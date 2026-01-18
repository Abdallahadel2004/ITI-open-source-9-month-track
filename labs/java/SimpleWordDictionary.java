import java.util.*;
public class SimpleWordDictionary {
    Map<Character,List<String>> dictionary = new TreeMap<>();
    //store the words in the collection of the map
    public void storeWords(String[] words){
        for(String word : words){
            char firstLetter = word.charAt(0);
            if(!dictionary.containsKey(firstLetter)){
                dictionary.put(firstLetter,new ArrayList<>());}
            dictionary.get(firstLetter).add(word);
        } 
    }
    //elements in the words map for each aplhabet should be sorted
    public void sortWords(){
        for(Map.Entry<Character,List<String>> entry : dictionary.entrySet()){
            Collections.sort(entry.getValue());
        }
    }
    //Provide methods to print all the letters and corresponding words
    public void printWords(){
        for(Map.Entry<Character,List<String>> entry : dictionary.entrySet()){
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
    //Provide a method to print the words of a given letter
    public void printWordsOfLetter(char letter){
        if(dictionary.containsKey(letter)){
            System.out.println("Words starting with " + letter + ": " + dictionary.get(letter));
        }
    }
    
    public static void main(String[] args){
        SimpleWordDictionary dict = new SimpleWordDictionary();
        dict.storeWords(new String[]{"abdallah","aaa","azzzzz","ballon","banana","chat","cherry","date","elderberry"});
        dict.sortWords();
        dict.printWords();
        dict.printWordsOfLetter('a');
        dict.printWordsOfLetter('b');
        dict.printWordsOfLetter('c');
    }
}
