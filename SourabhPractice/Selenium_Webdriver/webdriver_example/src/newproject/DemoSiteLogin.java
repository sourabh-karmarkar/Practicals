/*
 * Go to the specified link and 
 * 1) Login - Fail
 * 2) Register
 * 3) Login - Pass
 * 
 * */
package newproject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class DemoSiteLogin {

    public static void main(String[] args) {
    	
		System.setProperty("webdriver.chrome.driver","/home/synerzip/Downloads/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize(); 
        String baseUrl = "http://php.thedemosite.co.uk/login.php";
        driver.get(baseUrl);
        
        // populate the username on login page
        WebElement username = driver.findElement(By.name("username"));
        Actions builder1 = new Actions(driver);
        Actions seriesOfActions1 = builder1.moveToElement(username).click().sendKeys(username, "sourabh");
        seriesOfActions1.perform();
        
        // populate the password on login page and click the login button
        WebElement password = driver.findElement(By.name("password"));
        WebElement login = driver.findElement(By.name("FormsButton2"));
        Actions builder2 = new Actions(driver);
        Actions seriesOfActions2 = builder2.moveToElement(password).click().sendKeys(password, "karmarka").click(login);
        seriesOfActions2.perform();
        
        String actualString = "";
        String expectedString = "**Failed Login**";
        actualString = driver.findElement(By.xpath("//center/b")).getText();
        
        if(actualString.contentEquals(expectedString))
        {
        	System.out.println("Actual String : "+actualString+"\nExpected String : "+expectedString);
        	driver.findElement(By.xpath("//small/a[3]")).click();
        	
        	// populate the username on register page
            WebElement username_reg = driver.findElement(By.name("username"));
            Actions builder3 = new Actions(driver);
            Actions seriesOfActions3 = builder3.moveToElement(username_reg).click().sendKeys(username_reg, "sourabh");
            seriesOfActions3.perform();
            
            // populate the password on register page and click the save button
            WebElement password_reg = driver.findElement(By.name("password"));
            WebElement save = driver.findElement(By.name("FormsButton2"));
            Actions builder4 = new Actions(driver);
            Actions seriesOfActions4 = builder4.moveToElement(password_reg).click().sendKeys(password_reg, "karmarka").click(save);
            seriesOfActions4.perform();
            
            String actualusername = "";
            String actualpassword = "";
            String expectedusername = "The username:";
            String expectedpassword = "The password:";
            actualusername = driver.findElement(By.xpath("//blockquote/b")).getText();
            actualpassword = driver.findElement(By.xpath("//blockquote/b[2]")).getText();
            
            // Login if registration is successfull
            if(actualusername.contentEquals(expectedusername) && actualpassword.contentEquals(expectedpassword))
            {
            	System.out.println("Actual String : "+actualusername+"\nExpected String : "+expectedusername);
                System.out.println("Actual String : "+actualusername+"\nExpected String : "+expectedusername);
                
                driver.findElement(By.xpath("//small/a[4]")).click();
                // populate the username on login page
                WebElement username_log = driver.findElement(By.name("username"));
                Actions builder5 = new Actions(driver);
                Actions seriesOfActions5 = builder5.moveToElement(username_log).click().sendKeys(username_log, "sourabh");
                seriesOfActions5.perform();
                
                // populate the password on login page and click the login button
                WebElement password_log = driver.findElement(By.name("password"));
                WebElement login_log = driver.findElement(By.name("FormsButton2"));
                Actions builder6 = new Actions(driver);
                Actions seriesOfActions6 = builder6.moveToElement(password_log).click().sendKeys(password_log, "karmarka").click(login_log);
                seriesOfActions6.perform();
                
                String actualString_Log = "";
                String expectedString_Log = "**Successful Login**";
                actualString_Log = driver.findElement(By.xpath("//center/b")).getText();
                System.out.println("Actual String : "+actualString_Log+"\nExpected String : "+expectedString_Log);
                
                if(actualString_Log.contentEquals(expectedString_Log))
                {
                	System.out.println("All The Tests have been passed");
                }
                else
                {
                	System.out.println("Tests Failed");
                }
            }
            else
            {
            	System.out.println("Actual String : "+actualusername+"\nExpected String : "+expectedusername);
                System.out.println("Actual String : "+actualusername+"\nExpected String : "+expectedusername);
            }
        }
        else
        {
        	System.out.println("Actual String : "+actualString+"\nExpected String : "+expectedString);
        	System.out.println("Test Failed");
        }
        driver.close();
    }
}