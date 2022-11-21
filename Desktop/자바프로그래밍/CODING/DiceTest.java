//*******************
//파일명: DiceTest.java
//작성자: 최재훈
//작성일: 2022-04-13
//내용: 주사위를 나타내는 Dice 클래스를 정의하고 이를 이용하는 프로그램 작성
//*******************

package hw8_1;

public class DiceTest {

	public static void main(String[] args) {
		Dice dice1 = new Dice(); // 주사위 객체 dice1 생성
		Dice dice2 = new Dice(); // 주사위 객체 dice2 생성

		int faceSum = dice1.face + dice2.face; // 주사위 두개의 합.

		System.out.println("주사위A = " + dice1.face + " 주사위B = " + dice2.face + " 합 = " + faceSum);
		System.out.println("주사위 두개를 던집니다.");
		while (faceSum != 7) { // 주사위 면의 합이 7이 나올때 까지 주사위를 굴리고 합을 구해줌.
			dice1.rollDice();
			dice2.rollDice();
			faceSum = dice1.face + dice2.face;
			System.out.println("주사위A = " + dice1.face + " 주사위B = " + dice2.face + " 합 = " + faceSum);
		}
	}

}
