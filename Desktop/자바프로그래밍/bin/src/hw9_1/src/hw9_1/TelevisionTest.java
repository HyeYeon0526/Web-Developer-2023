package hw9_1;

public class TelevisionTest {
	
	private String model; // 인스턴스 변수 model, price 선언 
	private int price;
	private static int numberOfTvs = 0; // 정적변수 numberOfTvs 선언 
	
	public String getModel() { // 인스턴스 변수들의 getter, setter 생성 
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	public static int getNumberOfTvs() { // 정적변수의 값을 반환하는 getter 생성 
		return numberOfTvs;
	}
	
	
	public TelevisionTest() { // 디펄트 생성자 메소드 
		model = "MyTV";
		price = 0;
		numberOfTvs++;
	}
	
	public TelevisionTest(String s) { // 모델명을 매개변수로 받는 메소드 오버로딩 생성자  
		setModel(s);
		price = 0;
		numberOfTvs++;
		
	}
	public TelevisionTest(String s, int n) { // 모델명과 가격을 매개변수로 받는 메소드 오버로딩 생성자 
		setModel(s);
		setPrice(n);
		numberOfTvs++;
	}
	
    public String toString() { // 출력값을 반환하는 toString 메소드 
        return "모델명 : " + model + ", 가격 : " + price;
    }
	

}
