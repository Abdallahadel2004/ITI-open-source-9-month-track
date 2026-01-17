import java.math.BigDecimal;

public class ComplexTest {
    public static void main(String[] args) {
        
        System.out.println("=== Creating Complex Numbers ===");
        
        ComplexOperations<BigDecimal> c1 = new ComplexOperations<>(new BigDecimal("3"), new BigDecimal("4"));      
        ComplexOperations<BigDecimal> c2 = new ComplexOperations<>(new BigDecimal("1"), new BigDecimal("2"));      
        
        System.out.println("c1 = " + c1);
        System.out.println("c2 = " + c2);

        System.out.println("\n=== Addition ===");
        ComplexOperations<BigDecimal> sum = ComplexOperations.add(c1, c2);
        System.out.println(c1 + " + " + c2 + " = " + sum);

        System.out.println("\n=== Subtraction ===");
        ComplexOperations<BigDecimal> diff = ComplexOperations.subtract(c1, c2);
        System.out.println(c1 + " - " + c2 + " = " + diff);
    }
}
