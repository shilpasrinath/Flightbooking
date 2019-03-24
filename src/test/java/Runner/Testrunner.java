package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(features="src\\main\\java\\Feature\\flightbooking.feature",
	              glue= {"Stepdefinition"},
	              format= {"pretty", "html:test-output","json:json-output/cucumber.json","junit:junit_xml/cucumber.xml"},
	               dryRun=false,
	               monochrome=true,
	               strict=true
	              )
	     public class Testrunner {
		

	

}
