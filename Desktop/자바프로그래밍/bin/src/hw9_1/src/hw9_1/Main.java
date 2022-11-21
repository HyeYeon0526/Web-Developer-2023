//****************************************
//파일명 : hw9_1.java
//작성자 : 김혜연
//작성일 : 2022.10.31 
//내용  : TelevisionTest클래스를 작성하여 정적 메소드와 정적변수 이해 
//*****************************************

package hw9_1;

public class Main {

	public static void main(String[] args) {
		System.out.println("hw9_1 : 김혜연");
		
		System.out.println(TelevisionTest.getNumberOfTvs()); // 현재까지의 객체 수 출력 
		
		TelevisionTest tv1 = new TelevisionTest(); // 디폴트 생성자 호출 
		TelevisionTest tv2 = new TelevisionTest("appleTV"); // 매개변수가 하나 들어간 생성자 호출 
		TelevisionTest tv3 = new TelevisionTest("LG TV", 1500000); // 매개변수가 두 개 들어간 생성자 호출 
		
		System.out.println(tv1.toString()); // toString 을 이용한 객체정보 출력 
		System.out.println(tv2); // 생성한 객체만으로 객체정보 출력 (toString 자동으로 사용됨)
		System.out.println(tv3);		
		
		System.out.println(TelevisionTest.getNumberOfTvs()); // 생성자 실행 후 현재까지의 객체 수 출력 

	}

}
