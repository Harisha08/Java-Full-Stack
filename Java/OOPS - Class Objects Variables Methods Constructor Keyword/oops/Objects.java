package com.oops;


class Employee{
	 int EmpId;
     String EmpName;
     float EmpSalary;   
     Employee(int EmpId,String EmpName,float EmpSalary){
    	 this.EmpId = EmpId;
         this.EmpName = EmpName;
         this.EmpSalary = EmpSalary;   
    	 
     }
     void display() {
    	 System.out.println("Enter Employee Id : " +EmpId);
         System.out.println("Enter Employee Name : " +EmpName);
         System.out.println("Enter Employee Salary : " +EmpSalary);
     }
    
}
public class Objects{
	public static void main(String[] args) {
		Employee emp1 = new Employee(101,"Hari",20000.0f);
		emp1.display();
		Employee emp2 = new Employee(102,"Sha",25000.0f);
		emp2.display();
	}
}
