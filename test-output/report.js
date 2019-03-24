$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Feature/flightbooking.feature");
formatter.feature({
  "name": "Flight booking with cheapest price",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search for cheapest flight",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I visit travells sight",
  "keyword": "Given "
});
formatter.match({
  "location": "FlightStepdefinition.i_visit_travells_sight()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on FLIGHTS",
  "keyword": "When "
});
formatter.match({
  "location": "FlightStepdefinition.i_click_on_FLIGHTS()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027Flights\u0027)]\"}\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027SRINATH-PC\u0027, ip: \u0027192.168.0.23\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\srinath\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52226}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 399b56a9c5072b241b9b81d2db430450\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027Flights\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat Stepdefinition.FlightStepdefinition.i_click_on_FLIGHTS(FlightStepdefinition.java:36)\r\n\tat ✽.I click on FLIGHTS(src/main/java/Feature/flightbooking.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I select from London City Airport",
  "keyword": "When "
});
formatter.match({
  "location": "FlightStepdefinition.i_select_from_London_City_Airport()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select to Dubai Intl Airport",
  "keyword": "When "
});
formatter.match({
  "location": "FlightStepdefinition.i_select_to_Dubai_Intl_Airport()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select on return Trip",
  "keyword": "When "
});
formatter.match({
  "location": "FlightStepdefinition.i_select_on_return_Trip()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select departure 2weeks from todays date",
  "keyword": "When "
});
formatter.match({
  "location": "FlightStepdefinition.i_select_departure_weeks_from_todays_date(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select return date 2weeks from departure date",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I select 2 Adult",
  "keyword": "When "
});
formatter.match({
  "location": "FlightStepdefinition.i_select_Adult(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select 2 child",
  "keyword": "When "
});
formatter.match({
  "location": "FlightStepdefinition.i_select_child(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "FlightStepdefinition.i_click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I filter by Turkish and Emirates airways",
  "keyword": "When "
});
formatter.match({
  "location": "FlightStepdefinition.i_filter_by_Turkish_and_jet_airways()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Booknow withcheapest price",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightStepdefinition.i_click_on_Booknow_withcheapest_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am taken to booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightStepdefinition.i_am_taken_to_booking_page()"
});
formatter.result({
  "status": "skipped"
});
});