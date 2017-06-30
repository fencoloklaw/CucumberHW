$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('CucumberHW\CucumberArtifact\cucumberHW.feature');
formatter.feature({
  "line": 1,
  "name": "CucumberHW",
  "description": "",
  "id": "cucumberhw",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login functionality exists",
  "description": "",
  "id": "cucumberhw;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.openBrowser()"
});
formatter.result({
  "duration": 206853665,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:738)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:115)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:330)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:108)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:104)\r\n\tat CucumberHW.CucumberArtifact.annotation.openBrowser(annotation.java:15)\r\n\tat ✽.Given I have open the browser(CucumberHW\\CucumberArtifact\\cucumberHW.feature:3)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "annotation.goToFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "annotation.loginButton()"
});
formatter.result({
  "status": "skipped"
});
});