public class counting {
	public static void main (String[] args){
	String ITIword="ITI develops people and ITI house of developers and ITI for people";
	String[] array= ITIword.split(" ");
	int count_of_iti=0;
	for(String s : array){
		if(s.equals("ITI")){
		count_of_iti ++;
		}
	}
	System.out.println(count_of_iti);

	}
}