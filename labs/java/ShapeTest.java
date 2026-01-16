import java.util.ArrayList;
import java.util.List;

// Test class with generic method
public class ShapeTest {
    
    // Generic method that accepts a list containing only Shape or its child classes
    // Using upper bounded wildcard (? extends Shape)
    public static void drawShapes(List<? extends Shape> shapes) {
        System.out.println("Drawing " + shapes.size() + " shape(s):");
        for (Shape shape : shapes) {
            shape.draw();
        }
        System.out.println();
    }

    public static void main(String[] args) {
        // Create ArrayList of Rectangle
        ArrayList<Rectangle> rectangles = new ArrayList<>();
        rectangles.add(new Rectangle(10, 5));
        rectangles.add(new Rectangle(20, 15));
        rectangles.add(new Rectangle(8, 4));

        // Create ArrayList of Circle
        ArrayList<Circle> circles = new ArrayList<>();
        circles.add(new Circle(7));
        circles.add(new Circle(12));

        // Create ArrayList of Shape (mixed shapes)
        ArrayList<Shape> shapes = new ArrayList<>();
        shapes.add(new Rectangle(30, 20));
        shapes.add(new Circle(9));
        shapes.add(new Rectangle(5, 5));

        // Test the generic method with different lists
        System.out.println("=== Testing with Rectangle list ===");
        drawShapes(rectangles);

        System.out.println("=== Testing with Circle list ===");
        drawShapes(circles);

        System.out.println("=== Testing with Shape list (mixed) ===");
        drawShapes(shapes);
    }
}
