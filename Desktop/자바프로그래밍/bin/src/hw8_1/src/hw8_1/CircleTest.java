package hw8_1;

class Circle {
	private double rad; // Circle의 필드 
	private double x;
	private double y;
	
	public double getRad() { // 반지름을 입력받기 위한 getter 
		return rad;
	}
	
	public void setRad(double rad) { // 반지름이 원하는 범위를 벗어날 때를 제한하기위한 setter 
		if (rad < 0)
			rad = 1.0;
		this.rad = rad;
	}
	
	public double getX() {
		return x;
	}
	
	public void setX(double x) {
		this.x = x;
	}
	
	public double getY() {
		return y;
	}
	
	public void setY(double y) {
		this.y = y;
	}
	
	public double area() { // 면적을 계산하여 반환하는 메소드 
		return rad * rad * 3.14;
	}
	
	public void move(double moveX, double moveY) { // x,y축을 이동하여 더하는 메소드
		x += moveX;
		y += moveY;
	}
	
}

public class CircleTest {

	public static void main(String[] args) {
		System.out.println("hw8_1 : 김혜연 ");
		
		Circle c1 = new Circle(); // 원 객체를 두 개 생성
		Circle c2 = new Circle();
		
		c1.setRad(1.2); // circle1의 반지름과 좌표 설정 
		c1.setX(3);
		c1.setY(4);
		
		c2.setRad(-1.2); // circle2의 반지름과 좌표 설정 
		c2.setX(-3);
		c2.setY(-4);
		
		c1.move(10, 20); // circle의x,y축 이동 
		c2.move(10, 20);
		
		
		System.out.println(c1.getX()+" "+c1.getY()+" "+c1.area()); // circle의 좌표와 면적을 알아내 출력 
		System.out.println(c2.getX()+" "+c2.getY()+" "+c2.area());
		

	}

}
