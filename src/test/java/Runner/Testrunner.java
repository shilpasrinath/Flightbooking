package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(features="C:\\Users\\srinath\\eclipse-workspace\\Flightbooking\\src\\main\\java\\Feature\\flightbooking.feature",//path of featurefile
	              glue= {"Stepdefinition"},//path of stepdefinition
	             format= {"pretty", "html:test-output","json:json-output/cucumber.json","junit:junit_xml/cucumber.xml"},//generate differet types of reporting
	               dryRun=false,//when true it wont execute but checks correct mapping between feature and stepdefinition file
	               monochrome=true,//display the console output in pretty readable format
	               strict=true//it will check if any step is not defined in step definition it throws pending exception
	              )
	     public class Testrunner {
		

	

}
