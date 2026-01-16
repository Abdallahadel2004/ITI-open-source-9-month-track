public class ComplexOperations<T extends Number> {
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
    //override tostring method because we want to print the complex number in a readable format
    @Override
    public String toString() {
        double imag = imaginary.doubleValue();
        if (imag >= 0) {
            return real + " + " + imaginary + "i";
        } else {
            return real + " - " + Math.abs(imag) + "i";
        }
    }

    public static <T extends Number> ComplexOperations<Double> add(
        ComplexOperations<T> c1, ComplexOperations<T> c2) {
        double realSum = c1.getReal().doubleValue() + c2.getReal().doubleValue();
        double imagSum = c1.getImaginary().doubleValue() + c2.getImaginary().doubleValue();
        return new ComplexOperations<>(realSum, imagSum);
    }

    public static <T extends Number> ComplexOperations<Double> subtract(
        ComplexOperations<T> c1, ComplexOperations<T> c2) {
        double realDiff = c1.getReal().doubleValue() - c2.getReal().doubleValue();
        double imagDiff = c1.getImaginary().doubleValue() - c2.getImaginary().doubleValue();
        return new ComplexOperations<>(realDiff, imagDiff);
    }

    public static <T extends Number> ComplexOperations<Double> multiply(
        ComplexOperations<T> c1, ComplexOperations<T> c2) {
        double a = c1.getReal().doubleValue();
        double b = c1.getImaginary().doubleValue();
        double c = c2.getReal().doubleValue();
        double d = c2.getImaginary().doubleValue();

        double realPart = (a * c) - (b * d);
        double imagPart = (a * d) + (b * c);
        return new ComplexOperations<>(realPart, imagPart);
    }

    public static <T extends Number> ComplexOperations<Double> divide(
        ComplexOperations<T> c1, ComplexOperations<T> c2) {
        double a = c1.getReal().doubleValue();
        double b = c1.getImaginary().doubleValue();
        double c = c2.getReal().doubleValue();
        double d = c2.getImaginary().doubleValue();

        double denominator = (c * c) + (d * d);
        if (denominator == 0) {
            throw new ArithmeticException("Cannot divide by zero complex number");
        }

        double realPart = ((a * c) + (b * d)) / denominator;
        double imagPart = ((b * c) - (a * d)) / denominator;
        return new ComplexOperations<>(realPart, imagPart);
    }
}
