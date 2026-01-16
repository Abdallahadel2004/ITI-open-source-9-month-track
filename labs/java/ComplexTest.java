// Test class for Complex number operations
public class ComplexTest {
    public static void main(String[] args) {
        
        // Create complex numbers
        System.out.println("=== Creating Complex Numbers ===");
        
        ComplexOperations<Integer> c1 = new ComplexOperations<>(3, 4);      
        ComplexOperations<Integer> c2 = new ComplexOperations<>(1, 2);      
        
        System.out.println("c1 = " + c1);
        System.out.println("c2 = " + c2);

        // Test Addition
        System.out.println("\n=== Addition ===");
        ComplexOperations<Double> sum = ComplexOperations.add(c1, c2);
        System.out.println(c1 + " + " + c2 + " = " + sum);

        // Test Subtraction
        System.out.println("\n=== Subtraction ===");
        ComplexOperations<Double> diff = ComplexOperations.subtract(c1, c2);
        System.out.println(c1 + " - " + c2 + " = " + diff);

        // Test Multiplication
        System.out.println("\n=== Multiplication ===");
        ComplexOperations<Double> prod = ComplexOperations.multiply(c1, c2);
        System.out.println(c1 + " * " + c2 + " = " + prod);

        // Test Division
        System.out.println("\n=== Division ===");
        ComplexOperations<Double> quot = ComplexOperations.divide(c1, c2);
        System.out.println(c1 + " / " + c2 + " = " + quot);
    }
}
