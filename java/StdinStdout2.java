import java.util.Scanner;

public class StdinStdout2 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int myInt = scanner.nextInt();
        scanner.nextLine();
        double myDouble = scanner.nextDouble();
        scanner.nextLine();
        String myString = scanner.nextLine();
        scanner.close();

        System.out.println("String: " + myString);
        System.out.println("Double: " + myDouble);
        System.out.println("Int: " + myInt);

    }
}