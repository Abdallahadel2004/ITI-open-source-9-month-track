import java.math.BigDecimal;

public class ComplexOperations<T extends BigDecimal> {
    private T real;      
    private T imaginary; 

    public ComplexOperations(T real, T imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    public T getReal() {
        return real;
    }

    public T getImaginary() {
        return imaginary;
    }

    @Override
    public String toString() {
        if (imaginary.compareTo(BigDecimal.ZERO) >= 0) {
            return real + " + " + imaginary + "i";
        } else {
            return real + " - " + imaginary.abs() + "i";
        }
    }

    public static <T extends BigDecimal> ComplexOperations<BigDecimal> add(
        ComplexOperations<T> c1, ComplexOperations<T> c2) {
        BigDecimal realSum = c1.getReal().add(c2.getReal());
        BigDecimal imagSum = c1.getImaginary().add(c2.getImaginary());
        return new ComplexOperations<>(realSum, imagSum);
    }

    public static <T extends BigDecimal> ComplexOperations<BigDecimal> subtract(
        ComplexOperations<T> c1, ComplexOperations<T> c2) {
        BigDecimal realDiff = c1.getReal().subtract(c2.getReal());
        BigDecimal imagDiff = c1.getImaginary().subtract(c2.getImaginary());
        return new ComplexOperations<>(realDiff, imagDiff);
    }
}
