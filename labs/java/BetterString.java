@FunctionalInterface //this is a functional interface because it has only one abstract method
interface TwoStringPredicate {
    boolean test(String s1, String s2);
}

class StringUtils { //this is a utility class because it contains only static methods
    public static String betterString(String s1, String s2, TwoStringPredicate predicate) {
        if (predicate.test(s1, s2)) {
            return s1;
        } else {
            return s2;
        }
    }
}

public class BetterString {
    public static void main(String[] args) {
        String string1 = "Hello";
        String string2 = "Higggggg";

        String longer = StringUtils.betterString(string1, string2, (s1, s2) -> s1.length() > s2.length());
        System.out.println("Longer: " + longer);

        String first = StringUtils.betterString(string1, string2, (s1, s2) -> true);
        System.out.println("First: " + first);
    }
}
