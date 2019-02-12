package newproject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class FacebookLogin {
    public static void main(String args[]){
		System.setProperty("webdriver.chrome.driver","/home/synerzip/Downloads/Software_Setups/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.get("http://www.facebook.com");
        WebElement email= driver.findElement(By.id("email"));
        Actions builder = new Actions(driver);
        Actions seriesOfActions = builder.moveToElement(email).click().sendKeys(email, "nodesourabh@gmail.com");
        seriesOfActions.perform();
        WebElement pass = driver.findElement(By.id("pass"));
        WebElement login =driver.findElement(By.xpath("//label/input"));
        Actions seriesOfAction = builder.moveToElement(pass).click().sendKeys(pass, "nodesourabh123!").click(login);
        seriesOfAction.perform();
    }    
}