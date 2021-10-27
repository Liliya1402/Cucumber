package definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class JavaStepDefs {

    @Given("I print Hello World!")
    public void iPrintHelloWorld() {
        System.out.println("Hello World!");
    }

    @When("I print {string}")
    public void iPrint(String greeting) {
        System.out.println(greeting);
    }

    @Given("I print strings")
    public void iPrintStrings() {
        String firstName = "Liliya";
        String lastName = "Goldman";
        String occupation = "QA Engineer";
        System.out.println("My name is " + firstName + " " + lastName + ".");
        System.out.println("I work as a " + occupation + ".");
    }

    @Given("I learn Java types")
    public void iLearnJavaTypes() {
        String xpath = "//input[@id='name']";
        char a = 'A';
        int x = 5;
        double y = 3.0;
        boolean b = true;

    }

    @When("I print {string} and {string}")
    public void iPrintAnd(String var1, String var2) {
        System.out.println(var1 + " " + var2);
        System.out.println(var1.length());
        System.out.println(var1.charAt(0));
        System.out.println(var2.charAt(var2.length() - 1));
        System.out.println(var1.equals(var2));
        System.out.println(var1.equals(var2.toLowerCase()));

    }

    @And("I work with boolean")
    public void iWorkWithBoolean() {
        boolean x = true;
        System.out.println("x == " + x);
        int a = 3;
        System.out.println(a == 5);
    }

    @And("I work with numbers")
    public void iWorkWithNumbers() {
        int num1 = 15;
        int num2 = 3;
        int sum = num1 + num2;
        int diff = num1 - num2;
        int prod = num1 * num2;
        int quot = num1 / num2;
        int mod = num1 % num2;
        System.out.println("The sum is " + sum);
        System.out.println("The diff is " + diff);
        System.out.println("The prod is " + prod);
        System.out.println("The quot is " + quot);
        System.out.println("The mod is " + mod);
    }

    @When("I compare {int} and {int}")
    public void iCompareAnd(int num1, int num2) {
        if (num1 > num2) {
            System.out.println(num1 + " is greater then " + num2);
        } else if (num1 < num2) {
            System.out.println(num1 + " is less then " + num2);
        } else {
            System.out.println(num1 + " is equal " + num2);
        }
    }


    @Given("I check if number  {int} odd or eve")
    public void iCheckIfNumberOddOrEve(int num) {

        if (num != 0) {
            if (num % 2 == 0) {
                System.out.println(num + " is even");
            }
        }

    }

    @Given("I convert {int} feet to centimeters")
    public void iConvertFeetToCentimeters(int num) {
        int feet = 1;
        double centimeter;
        centimeter = 30.48 * feet;
        System.out.println(" Value in centimeter is " + centimeter);
    }

    @Given("I check if number  {int} odd or even")
    public void iCheckIfNumberOddOrEven(int num) {
        if (num != 0) {
            if (num % 2 == 0) {
                System.out.println(num + " is even");
            } else {
                System.out.println(num + " is odd");
            }
        }
    }

    @Given("I check if {int} is leap or not")
    public void iCheckIfIsLeapOrNot(int year) {
        if (year % 4 == 0) {
            System.out.println(year + " is a leap year");
        } else {
            System.out.println(year + " is not leap year");
        }
    }

    @And("I convert {int} US gallon to liters")
    public void iConvertUSGallonToLiters(int arg0) {
        double gallons = 1;
        double liters;
        liters = gallons * 3.7854;
        System.out.println(gallons + " gallons is " + liters + " liters.");
    }

    @Given("I print {string} url")
    public void iPrintUrl(String url) {
        switch (url) {
            case "google":
                System.out.println("https://www.google.com/");
                break;
            case "yahoo":
                System.out.println("https://www.yahoo.com/");
                break;
            case "wiki":
                System.out.println("https://www.wiki.com/");
                break;
            default:
                System.out.println("This site " + url + "is not supported");

        }
    }

    @Given("I operate on arrays")
    public void iOperateOnArrays() {
        int[] numbers = {4, 8, 18, 45, 89, 23};
        String[] cars = {"subaru", "bmw", "mercedes"};
        System.out.println("Element with index 2 " + cars[2]);
        System.out.println("The first element with " + cars[0]);
        System.out.println((cars.length));
        System.out.println("The last element in the array :" + (cars.length - 1));
        System.out.println(cars);
        for (String item : cars) {
            System.out.println(item + " ");

            for (int count = 0; count <= cars.length - 1; count++)
                System.out.println(cars[count]);
        }
    }

    @Given("I print days of the week")
    public void iPrintDaysOfTheWeek() {
        String[] daysOfTheWeek = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
        for (String i : daysOfTheWeek) {
            System.out.println(i);
        }
    }

    @And("I print days of the week in reverse")
    public void iPrintDaysOfTheWeekInReverse() {
        String[] daysOfTheWeek = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};

        for (int i = daysOfTheWeek.length - 1; i >= 0; i--)

            System.out.println(daysOfTheWeek[i]);
    }

    @Given("I print sum of numbers in array")
    public void iPrintSumOfNumbersInArray() {
        int[] num = {1, 8, 7, 6, 4, 2, 12, 13, 5, 4, 2, 10, 22};
        int sum = 0;
        for (int i = 0; i < num.length; i++)
            sum = sum + num[i];
        {
            System.out.println(sum);
        }
    }

    @Given("I find the cost of {int} pounds of {string}")
    public void iFindTheCostOfPoundsOf(int pounds, String fruit) {
        pounds = 4;
        double cost = 6.0;
        switch (fruit) {
            case "cherries":
                System.out.println("Cost of cherries " + (pounds * cost));
                break;
            case "plums":
                System.out.println("Cost of plums " + (pounds * cost));
                break;
            case "grapefruit":
                System.out.println("Cost of grapefruit " + (pounds * cost));
                break;

            case "apples":
                System.out.println("Cost of apples " + (pounds * cost));
                break;
            case "orange":
                System.out.println("Cost of orange " + (pounds * cost));
                break;
            default:
                System.out.println("This product is unavailable");

        }
    }

}