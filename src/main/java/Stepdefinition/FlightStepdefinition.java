package Stepdefinition;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FlightStepdefinition {
	
	WebDriver driver=new ChromeDriver();
	
	@Given("^I visit travells sight$")
	public void i_visit_travells_sight() throws Exception {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\srinath\\Desktop\\chromedriver.exe");
		WebDriver driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
		driver.get("https://www.phptravels.net/");
		
	}

	@When("^I click on FLIGHTS$")
	public void i_click_on_FLIGHTS() throws Exception {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//span[contains(text(),'Flights')]")).click();
		}

	@When("^I select from London City Airport$")
	public void i_select_from_London_City_Airport() throws Exception {
		Thread.sleep(5000);
		WebElement search=driver.findElement(By.xpath("//*[@id='s2id_location_from']/a/span[1]"));
		search.click();
		Thread.sleep(5000);
		WebElement searchTextBox1 = driver.findElement(By.xpath("//*[@id='select2-drop']/div/input"));
		searchTextBox1.sendKeys("LCY");
		Thread.sleep(5000);
		searchTextBox1.sendKeys(Keys.ENTER);
		}

	@When("^I select to Dubai Intl Airport$")
	public void i_select_to_Dubai_Intl_Airport() throws Exception {
		driver.findElement(By.xpath("//*[@id='s2id_location_to']/a/span[1]")).click();
		WebElement searchTextBox2=driver.findElement(By.xpath("//*[@id='select2-drop']/div/input"));
		searchTextBox2.sendKeys("DXB");
	    Thread.sleep(5000);
	    searchTextBox2.sendKeys(Keys.ENTER);
	  }
	@When("^I select on return Trip$")
	public void i_select_on_return_Trip() throws Exception {
		WebElement roundTrip= driver.findElement(By.xpath("//*[@id='flights']/form/div[9]/div[2]/div/label"));
	    roundTrip.click();
	    }
    @When("^I select departure (\\d+)weeks from todays date$")
	public void i_select_departure_weeks_from_todays_date(int arg1) throws Exception {
    	LocalDate nextTwoWeeks = LocalDate.now().plus(2, ChronoUnit.WEEKS);
	    driver.findElement(By.xpath("//input[@placeholder='Depart']")).sendKeys(nextTwoWeeks.toString());
	
	 }
   @When("^I select return date (\\d+) weeks from departure date$")
    public void i_select_return_date_weeks_from_departure_date(int arg1) throws Exception {
   LocalDate nextTwoWeeks = LocalDate.now().plus(2, ChronoUnit.WEEKS);
	
		driver.findElement(By.xpath("//*[@id='flights']/form/div[4]/div/input")).sendKeys(nextTwoWeeks.plus(2, ChronoUnit.WEEKS).toString());
    }

	@When("^I select (\\d+) Adult$")
	public void i_select_Adult(int arg1) throws Exception {
		WebElement w = driver.findElement(By.xpath
	    		("//*[@id='flights']/form/div[5]/div/input"));
	    w.click();
	    Select combo = new Select(driver.findElement(By.xpath
	    		("//*[@id='manual_flightTravelers']/div/div/div[2]/section/div/div[1]/div[1]/select")));
	    combo.selectByValue("2");
	  }

	@When("^I select (\\d+) child$")
	public void i_select_child(int arg1) throws Exception {
		Select combo1 = new Select(driver.findElement(By.xpath
	    		("//*[@id='manual_flightTravelers']/div/div/div[2]/section/div/div[2]/div[1]/select")));
	    combo1.selectByValue("2");
	    WebElement button = driver.findElement(By.xpath("//*[@id='sumManualPassenger']"));
	    button.click();
	  }

	@When("^I click on search button$")
	public void i_click_on_search_button() throws Exception {
		WebElement searchButton = driver.findElement(By.xpath("//*[@id='flights']/form/div[6]/button"));
	    searchButton.click();
	    Thread.sleep(5000);
	  }

	@When("^I filter by Turkish and Emirates airways$")
	public void i_filter_by_Turkish_and_jet_airways() throws Exception {
		driver.findElement(By.xpath("//*[@id='body-section']/div[4]/div/div[2]/div/div[2]/div[91]/div/div[1]/ins")).click();
	    driver.findElement(By.xpath("//*[@id='body-section']/div[4]/div/div[2]/div/div[2]/div[11]/div/div[1]/ins")).click();	
	    Thread.sleep(15000);
	    }

	@Then("^I click on Booknow withcheapest price$")
	public void i_click_on_Booknow_withcheapest_price() throws Exception {
		
	    driver.findElement(By.xpath("//*[@id='bookbtn']")).click();
        }

	@Then("^I am taken to booking page$")
	public void i_am_taken_to_booking_page() throws Exception {
		System.out.println("I am Booking page");
	   
	}



}
