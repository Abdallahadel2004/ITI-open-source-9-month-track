import java.util.function.Function;
public class SolveQuadraticEquation{
	public static void main (String[] args){
	Function<double[],double[]> QuadraticEquation=(values)->{
		double a=values[0];
		double b=values[1];
		double c=values[2];
		
		double under_the_root=(b*b)-(4*a*c);
       double root1 = ((b*-1) + Math.sqrt(under_the_root)) / (2 * a);
       double root2 = ((b*-1) - Math.sqrt(under_the_root)) / (2 * a);

		return new double[]{root1,root2};
	};
	double[] inputs= {1.0,-5.0,6.0};
	double[] result=QuadraticEquation.apply(inputs);
	System.out.println("the result of root1:"+result[0]);
	System.out.println("the result of root2:"+result[1]);
		
	}
   }
  