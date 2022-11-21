//*****************************
// 파일명 : hw6_1.java
// 작성자 : 김혜연
// 작성일 : 2022. 09. 30
// 내용 : 학기와 학년, switch문 연습 
//******************************


package hw6_1;

import java.util.*;


public class Sem {

	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		
		System.out.println("hw6_1 : 김혜연");
		
		while (true) {	// 올바른 학기를 입력받을 때까지 반복
			
			System.out.print("학기를 입력해주세요. : "); // 학기 입력	받기
			int semester = scn.nextInt();
			
			switch(semester) {
				case 1, 2: //1학년인 경우 
					System.out.println("1학년");
					break;
				case 3, 4: //2학년인 경우 
					System.out.println("2학년");
					break;
				case 5, 6: //3학년인 경우 
					System.out.println("3학년");
					break;
				case 7, 8: // 4학년인 경우 	
					System.out.println("4학년");
					break;
				default:
					System.out.println("잘못 입력하셨습니다.");
					continue;
			}
			break;
		}
			
	}

}
