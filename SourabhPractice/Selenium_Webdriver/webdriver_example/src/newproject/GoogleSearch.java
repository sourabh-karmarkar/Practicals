package newproject;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class GoogleSearch {
    public static void main(String args[]){
    	System.setProperty("webdriver.chrome.driver","/home/synerzip/Downloads/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.get("http://www.google.com");
        WebElement searchKey = driver.findElement(By.name("q"));
        Actions builder = new Actions(driver);
        Actions seriesOfActions = builder.moveToElement(searchKey).click().sendKeys(searchKey, "pune").sendKeys(Keys.ENTER);
        seriesOfActions.perform();
        String actualString = "";
        String expectedString = "Things to do in Pune";
        actualString = driver.findElement(By.xpath("//h3/span")).getText();
        
        if(actualString.contentEquals(expectedString))
        {
        	System.out.println("Test Passed");
        }
        else
        {
        	System.out.println("Test Failed");
        }
    }    
}