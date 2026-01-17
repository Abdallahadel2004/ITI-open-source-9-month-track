public class CheckString {
    public static boolean containsOnlyLetters(String str) {
        for (int i = 0; i < str.length(); i++) {
            if (!Character.isLetter(str.charAt(i))) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        String str1 = "HelloWorld";
        String str2 = "Hello123";
        String str3 = "Hello World";

        System.out.println(str1 + " contains only letters: " + containsOnlyLetters(str1));
        System.out.println(str2 + " contains only letters: " + containsOnlyLetters(str2));
        System.out.println(str3 + " contains only letters: " + containsOnlyLetters(str3));
    }
}
