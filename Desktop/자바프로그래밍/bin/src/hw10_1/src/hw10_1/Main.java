//**********************
// 파일명 : Main.java
// 작성자 : 김혜연
// 작성일  : 2022. 11. 4
// 내용 : 객체 생성 및 출력 
//**********************

package hw10_1;

public class Main {

	public static void main(String[] args) {
		System.out.println("hw10_1 : 김혜연 ");
		Car car1 = new Car("blue", 2000000); // Car 생성자로 객체 생성 
		
		System.out.println(car1); // Car.toString에 저장된 값 출력 
		
		UsedCar car2 = new UsedCar("red", 1000000, 2004); // UsedCar 생성자로 객체 생성 
		
		System.out.println(car2); // UsedCar.toString에 저장된 값 출력 
	}

}
