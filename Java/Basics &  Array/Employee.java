import java.util.Scanner;
public class Programs{
    public static void main(String args[]){
        int EmpId;
        String EmpName;
        float EmpSalary;   
        Scanner s = new Scanner(System.in);
        System.out.println("Enter Employee Id ");
        EmpId = s.nextInt();
        System.out.println("Enter Employee Name ");
        EmpName = s.next();
        System.out.println("Enter Employee Salary ");
        EmpSalary = s.nextFloat();
        System.out.println("Enter Employee Id : " +EmpId);
        System.out.println("Enter Employee Name : " +EmpName);
        System.out.println("Enter Employee Salary : " +EmpSalary);
        
    }
}