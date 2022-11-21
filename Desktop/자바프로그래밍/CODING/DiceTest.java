//*******************
//���ϸ�: DiceTest.java
//�ۼ���: ������
//�ۼ���: 2022-04-13
//����: �ֻ����� ��Ÿ���� Dice Ŭ������ �����ϰ� �̸� �̿��ϴ� ���α׷� �ۼ�
//*******************

package hw8_1;

public class DiceTest {

	public static void main(String[] args) {
		Dice dice1 = new Dice(); // �ֻ��� ��ü dice1 ����
		Dice dice2 = new Dice(); // �ֻ��� ��ü dice2 ����

		int faceSum = dice1.face + dice2.face; // �ֻ��� �ΰ��� ��.

		System.out.println("�ֻ���A = " + dice1.face + " �ֻ���B = " + dice2.face + " �� = " + faceSum);
		System.out.println("�ֻ��� �ΰ��� �����ϴ�.");
		while (faceSum != 7) { // �ֻ��� ���� ���� 7�� ���ö� ���� �ֻ����� ������ ���� ������.
			dice1.rollDice();
			dice2.rollDice();
			faceSum = dice1.face + dice2.face;
			System.out.println("�ֻ���A = " + dice1.face + " �ֻ���B = " + dice2.face + " �� = " + faceSum);
		}
	}

}
