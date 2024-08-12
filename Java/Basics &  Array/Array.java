import java.util.Scanner;
public class Array{
    public static void main(String args[]){
        int arr[] = new int[5];
        int sum = 0;
        Scanner s = new Scanner(System.in);
        System.out.println("Enter Five integer values ");
        for(int i = 0; i<arr.length; i++){
           arr[i] = s.nextInt();
        }
        System.out.println("Array Elements are:");
        for(int i = 0; i<arr.length; i++){
           System.out.println(arr[i]);
           sum = sum + arr[i];
        }          
        System.out.println("Sum of All Array Elements : "+sum);
    }
}
Kabilan R
12:17 PM
1) Fibonacci Series in Java
2) Prime Number Program in Java
3) Palindrome Program in Java
4) Factorial Program in Java
5) Armstrong Number in Java
6) How to Generate Random Number in Java
7) How to Print Pattern in Java
8) How to Compare Two Objects in Java
9) How to Create Object in Java
10) How to Print ASCII Value in Java