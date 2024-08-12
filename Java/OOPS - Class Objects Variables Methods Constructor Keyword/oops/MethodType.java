package com.oops;

public class MethodType {
	void MyMethod1() {
		System.out.println("Instance or Object Method");
	}
	static void MyMethod2() {
		System.out.println("Static or Class Method");
	}
	public static void main(String[] args) {
		MethodType obj = new MethodType();
		obj.MyMethod1();
		MethodType.MyMethod2();
		
	}

}
