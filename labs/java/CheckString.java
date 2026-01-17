@FunctionalInterface
interface StringPredicate {
    boolean test(String str);
}
public class CheckString {
    public static boolean containsOnlyLetters(String str, StringPredicate predicate) {
        return predicate.test(str);
    }

    public static void main(String[] args) {
        String str1 = "HelloWorld";
        String str2 = "Hello123";
        String str3 = "Hello World";

        System.out.println(str1 + " contains only letters: " + containsOnlyLetters(str1, (str) -> str.chars()
                  .mapToObj(c -> (char) c)
                  .allMatch(Character::isLetter)));
        System.out.println(str2 + " contains only letters: " + containsOnlyLetters(str2, (str) -> str.chars()
                  .mapToObj(c -> (char) c)
                  .allMatch(Character::isLetter)));
        System.out.println(str3 + " contains only letters: " + containsOnlyLetters(str3, (str) -> str.chars()
                  .mapToObj(c -> (char) c)
                  .allMatch(Character::isLetter)));
    }
}
