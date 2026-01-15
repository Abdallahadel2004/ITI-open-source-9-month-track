import java.util.function.Function;
public class tempconverter{
	public static void main (String[] args){
		Function<Double, Double> celisus_to_fahn = c -> c *(9.0/5.0)+32;
		double celsius=25.00;
		double result=celisus_to_fahn.apply(celsius);
		System.out.println(result);
	}
}