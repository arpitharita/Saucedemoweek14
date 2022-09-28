$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "\r\nAs a user I want to login in sauce",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4407090200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "login with valid credential",
  "description": "",
  "id": "login-functionality;login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username \"username\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify \"PRODUCTS\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter firstname",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter lastname",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter postalcod",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on finish",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify order \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 111082000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 18
    }
  ],
  "location": "loginsteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 185603300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 18
    }
  ],
  "location": "loginsteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 128445100,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 202117100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PRODUCTS",
      "offset": 10
    }
  ],
  "location": "loginsteps.iVerify(String)"
});
formatter.result({
  "duration": 144196100,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.iClickOnZToA()"
});
formatter.result({
  "duration": 1170234400,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 1151215000,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.iClickOnCart()"
});
formatter.result({
  "duration": 1083349400,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.iClickOnCheckout()"
});
formatter.result({
  "duration": 1085291200,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.iEnterFirstname()"
});
formatter.result({
  "duration": 1120613700,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.iEnterLastname()"
});
formatter.result({
  "duration": 1116046900,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.iEnterPostalcod()"
});
formatter.result({
  "duration": 1116312500,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.iClickOnContinue()"
});
formatter.result({
  "duration": 1103770700,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.iClickOnFinish()"
});
formatter.result({
  "duration": 1084232100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 16
    }
  ],
  "location": "loginsteps.iVerifyOrder(String)"
});
formatter.result({
  "duration": 41886300,
  "status": "passed"
});
formatter.after({
  "duration": 247200,
  "status": "passed"
});
});