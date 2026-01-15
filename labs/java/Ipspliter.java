public class ipspliter {
    public static void main(String[] args) {
		
        if (args.length == 0) {
            System.out.println("please enter a value");
            return;
        }

        String ip = args[0];

        String ip_validation_regex = "(\\d{1,2}|(0|1)\\d{2}|2[0-4]\\d|25[0-5])";
        String regex = ip_validation_regex + "\\." + ip_validation_regex + "\\." + ip_validation_regex + "\\." + ip_validation_regex;

        if (ip.matches(regex)) {
            System.out.println("Valid IP");
            
            String[] parts = ip.split("\\.");
            for (String part : parts) {
                System.out.println(part);
            }           
        } else {
            System.out.println("Invalid IP");
        }
    }
}