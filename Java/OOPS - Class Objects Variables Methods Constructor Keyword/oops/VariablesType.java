package com.oops;

public class VariablesType {
	int b = 20;
	static int c = 30;
	public static void main(String[] args) {
		int a = 10;
		System.out.println("Local Variable : "+a);
		VariablesType obj = new VariablesType();
		System.out.println(VariablesType.c); 
	}

}
