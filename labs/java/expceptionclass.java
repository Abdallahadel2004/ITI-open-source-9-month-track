/*
• Create your own exception class and write down two other
classes, the first will contain three methods throwing your
newly created exception class and the second class will be
calling the methods that throws exception using the try-catchfinally
block.
*/

public class expceptionclass extends Exception {
    public expceptionclass(String message) {
        super(message);
    }
}

class ThrowingMethods {
    public void checkAge(int age) throws expceptionclass {
        if (age < 18) {
            throw new expceptionclass("Age must be 18 or older");
        }
        System.out.println("Age is valid: " + age);
    }

    public void withdraw(double amount) throws expceptionclass {
        if (amount < 0) {
            throw new expceptionclass("Cannot withdraw negative amount");
        }
        System.out.println("Withdrew: $" + amount);
    }

    public void validatePassword(String password) throws expceptionclass {
        if (password.length() < 6) {
            throw new expceptionclass("Password must be at least 6 characters");
        }
        System.out.println("Password is valid");
    }
}

class ExceptionCaller {
    public static void main(String[] args) {
        ThrowingMethods methods = new ThrowingMethods();

        // Check age (15 is too young)
        try {
            methods.checkAge(15);
        } catch (expceptionclass e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Age check completed\n");
        }

        // Withdraw negative amount
        try {
            methods.withdraw(-100);
        } catch (expceptionclass e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Withdrawal completed\n");
        }

        // Password too short
        try {
            methods.validatePassword("abc");
        } catch (expceptionclass e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Password check completed");
        }
    }
}
