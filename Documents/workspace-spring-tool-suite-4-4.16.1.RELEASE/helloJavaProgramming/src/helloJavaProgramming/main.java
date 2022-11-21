package helloJavaProgramming;

import java.io.*;

public class main {


	public static void main(String[] args) throws IOException {
				
		PrintStream out = new PrintStream(new BufferedOutputStream(new FileOutputStream(new File("/Users/kimhyeyeon/Desktop/hello/myfile.txt")),512));
		
		
		out.println("Hello java!!");
		out.close();

	}

}
