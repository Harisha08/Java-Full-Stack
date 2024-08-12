package com.oops;

public class MethodOverloading {
	void MyMethod( String name) {
		System.out.println("Welcome "+name);
	}
    void MyMethod(int a, int b) {
		System.out.println("Addition :"+(a+b));
	}
    void MyMethod(int n) {
		int fact = 1;
		for(int i = 1; i<=n ; i++) {
			fact = fact * i;
		}
		System.out.println("Factorial :"+fact);
	}
	public static void main(String[] args) {
		MethodOverloading obj = new MethodOverloading();
		obj.MyMethod("Harisha !!");
		obj.MyMethod(10,20);
		obj.MyMethod(5);
	}

}
