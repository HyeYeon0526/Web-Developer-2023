//****************************************
//파일명 : hw7_1.java
//작성자 : 김혜연
//작성일 : 2022.10.10 
//내용 : Car 클래스를 정의하고 이용하는 프로그램 작성
//*****************************************


package hw7_1;

class Car {
	String color; // class Car의 필드 
	int speed;
	int gear;
	
	void print() { // Car의 정보가 출력되는 메소드 
		System.out.println("자동차의 색 : " + color);
		System.out.println("속도 : " + speed);
		System.out.println("현재 기어 : " + gear);
		System.out.println();
	}
	
	int speedUp () { // 속도증가 메소드. 1회 호출시 속도가 1 증가됨.
		return speed++;
	}
	
	int changeGear (int x) { // 기어 변속 메소드. 입력받은 매개변수만큼 기어가 변경됨.
		gear = x;
		return gear;
	}
	
}


public class Main {
	
	public static void main(String[] args) {
		
		System.out.println("hw7_1 : 김혜연\n");
		
		Car myCar = new Car(); // class Car 사용을 위한 객체 생성 
		
		myCar.color = "red"; // myCar의 정보를 지정 
		myCar.speed = 0;
		myCar.gear = 1;
		
		myCar.print(); // 자동차의 정보 출력 1
		
		for(int i = 0; i < 20; i++) { // 속도 증가 메소드 20번 호출 
			myCar.speedUp();
		}
		
		myCar.print();  // 자동차의 정보 출력 2
		
		myCar.changeGear(2); // myCar의 기어를 2로 변경 
		
		myCar.print();	 // 자동차의 정보 출력 3

		for(int i = 0; i < 20; i++) { // 속도 증가 메소드 20번 호출 
			myCar.speedUp();
		}
		
		myCar.print(); // 자동차의 정보 출력 4

		
	}

}
