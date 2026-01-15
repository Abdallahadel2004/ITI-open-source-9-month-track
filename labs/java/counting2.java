public class counting2 {
    public static void main(String[] args) {
        String text_of_iti = "ITI develops people and ITI house of developers and ITI for people";
        String word = "ITI";
        int counter = 0;
        int index_of_iti = 0;
        while ((index_of_iti = text_of_iti.indexOf(word, index_of_iti)) != -1) {
            counter++;
            index_of_iti += word.length();
        }
        System.out.println(counter);
    }
}
