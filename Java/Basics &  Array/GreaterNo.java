import java.util.Scanner;
public class Programs{
    public static void main(String args[]){
        Scanner s = new Scanner(System.in);
        System.out.println("Enter First Number ");
        int num1 = s.nextInt();
        System.out.println("Enter Second Number ");
        int num2 = s.nextInt();
        if(num1 > num2 ){
            System.out.println("Greater Number is "+num1);
        }
        else{
           System.out.println("Greater Number is "+num2);
        }
    }
}