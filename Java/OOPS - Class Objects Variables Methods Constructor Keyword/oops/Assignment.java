package com.oops;

import java.util.Scanner;

class Student {
    int RegNo;
    String Name;
    int[] Subject = new int[5]; 
    Student(int RegNo, String Name) {
        this.RegNo = RegNo;
        this.Name = Name;
    }
    void GetMarks() {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter Marks for 5 Subjects:");
        for(int i = 0; i < Subject.length; i++) {
            Subject[i] = s.nextInt();
        }
    }
    void DisplayGrade() {
        int sum = 0;
        for(int i = 0; i < Subject.length; i++) {
        	sum += Subject[i];
        }
        int avg = sum / Subject.length;
        String grade;    
        if (avg >= 90) {
            grade = "A";
        } else if (avg >= 80) {
            grade = "B";
        } else if (avg >= 70) {
            grade = "C";
        } else if (avg >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }       
        System.out.println("Student RegNo: " + RegNo);
        System.out.println("Student Name: " + Name);
        System.out.println("Total Marks: " + sum);
        System.out.println("Average Marks: " + avg);
        System.out.println("Student Grade is  " + grade);    
    }
}

public class Assignment {
    public static void main(String[] args) {
    	Student stud = new Student(101,"Hari");
    	stud.GetMarks();
    	stud.DisplayGrade();
    }
        
}
