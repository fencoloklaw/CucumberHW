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
  "duration": 5923282531,
  "status": "passed"
});
formatter.match({
  "location": "annotation.goToFacebook()"
});
formatter.result({
  "duration": 934544505,
  "status": "passed"
});
formatter.match({
  "location": "annotation.loginButton()"
});
formatter.result({
  "duration": 240397933,
  "status": "passed"
});
});