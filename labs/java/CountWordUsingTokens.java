import java.util.StringTokenizer;

public class countWordUsingTokens {
    public static void main(String[] args) {
       String text = "ITI develops people and ITI house of developers and ITI for people";
       String replaced = text.replace("ITI", "|");
       StringTokenizer st = new StringTokenizer(replaced, "|");
       while (st.hasMoreTokens()) {
          System.out.println(st.nextToken());
        }
    }
}
