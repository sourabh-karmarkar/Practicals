/*
 * Go to the specified link and click on SIGN-ON link
 * */

package newproject;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class PG1 {

    public static void main(String[] args) {
        // declaration and instantiation of objects/variables
    	
		System.setProperty("webdriver.chrome.driver","/home/synerzip/Downloads/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize(); 
        String baseUrl = "http://demo.guru99.com/test/newtours/";
        String expectedTitle = "Welcome: Mercury Tours";
        String actualTitle = "";
        // launch Fire fox and direct it to the Base URL
        driver.get(baseUrl);
        // get the actual value of the title
        actualTitle = driver.getTitle();
        
        // click on the SIGN-ON link
        driver.findElement(By.linkText("SIGN-ON")).click();
        /*
         * compare the actual title of the page with the expected one and print
         * the result as "Passed" or "Failed"
         */
        if (actualTitle.contentEquals(expectedTitle)){
            System.out.println("Test Passed!");
        } else {
            System.out.println("Test Failed");
        }
        //close Fire fox
        driver.close();  
    }
}