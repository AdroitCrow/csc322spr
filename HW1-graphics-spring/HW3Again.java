/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package hw3.again;
import java.util.Scanner;
import java.lang.Math;
/**
 *
 * @author cgmci
 */
public class HW3Again {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Scanner scan = new Scanner(System.in);
        int a, b, c;
        double x1, x2;
        
        System.out.print("A: ");
        a = scan.nextInt();
        System.out.print("B: ");
        b = scan.nextInt();
        System.out.print("C: ");
        c = scan.nextInt();
        
        System.out.print("\n" + "\n" + "\n");
        
        x1 = ((-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a));
        x2 = ((-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a));
        
        if (Double.isNaN(x1) && !Double.isNaN(x2)){
            System.out.println("Only one root, " + x2);
        } else if (Double.isNaN(x2) && !Double.isNaN(x1)){
            System.out.println("Only one root,  " + x1);
        } else if (x2 > x1){
            System.out.println("Two roots: " + x2 + ", " + x1);
        } else if (x2 <= x1) {
            System.out.println("Two roots: " + x1 + ", " + x2);
        } else {
            System.out.println("Error");
        }
    }
}
