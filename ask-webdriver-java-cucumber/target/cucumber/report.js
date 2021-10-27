$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/predefined.feature");
formatter.feature({
  "name": "Smoke steps",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@predefined"
    }
  ]
});
formatter.scenario({
  "name": "Predefined steps for Google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://google.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title as \"Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@name\u003d\u0027q\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@name\u003d\u0027q\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"(//input[@name\u003d\u0027btnK\u0027])[1]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for element with xpath \"//*[@id\u003d\u0027res\u0027]\" to be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForElementWithXpathToBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027res\u0027]\" should contain text \"Cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldContainText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Steps for Yahoo",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://www.yahoo.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title contains \"Yahoo\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleContains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@id\u003d\u0027ybar-sbq\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@id\u003d\u0027ybar-sbq\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//input[@id\u003d\u0027ybar-search\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for element with xpath \"//div[@id\u003d\u0027results\u0027]\" to be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForElementWithXpathToBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//div[@id\u003d\u0027results\u0027]\" should contain text \"Cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldContainText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 2 sec",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForSec(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Steps for Gibiru",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://gibiru.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title contains \"Gibiru\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleContains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@id\u003d\u0027q\u0027] \" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@id\u003d\u0027q\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//i[@class\u003d\u0027fas fa-search new\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for element with xpath \"//*[@class\u003d\u0027gsc-resultsbox-visible\u0027]\" to be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForElementWithXpathToBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@class\u003d\u0027gsc-resultsbox-visible\u0027]\" should contain text \"Cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldContainText(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \r\nExpecting:\r\n \u003c\"\"\u003e\r\nto contain:\r\n \u003c\"Cucumber\"\u003e\r\n (ignoring case)\r\n\tat definitions.PredefinedStepDefs.elementWithXpathShouldContainText(PredefinedStepDefs.java:132)\r\n\tat ✽.element with xpath \"//*[@class\u003d\u0027gsc-resultsbox-visible\u0027]\" should contain text \"Cucumber\"(file:src/test/resources/features/predefined.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I wait for 2 sec",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForSec(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Steps for Duckduckgo",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://duckduckgo.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title contains \"DuckDuckGo\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleContains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@id\u003d\u0027search_form_input_homepage\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@id\u003d\u0027search_form_input_homepage\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//input[@id\u003d\u0027search_button_homepage\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for element with xpath \"//div[@id\u003d\u0027ads\u0027]\" to be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForElementWithXpathToBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \" //a[contains(text(),\u0027What is BDD (Behavior Driven Development)? | Agile\u0027)]\" should contain text \"Agile\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldContainText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 2 sec",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForSec(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Predefined steps for  swisscows",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://swisscows.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title contains \"Swisscows the alternative, data secure search engine.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleContains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@class\u003d\u0027input-search\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@class\u003d\u0027input-search\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//button[@class\u003d\u0027search-submit\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for element with xpath \"//h2[contains(text(),\u0027Behaviour-Driven Development\u0027)]\" to be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForElementWithXpathToBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//h2[contains(text(),\u0027Behaviour-Driven Development \u0027)]\" should contain text \"Cucumber \"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldContainText(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \r\nExpecting:\r\n \u003c\"Behaviour-Driven Development - Cucumber\"\u003e\r\nto contain:\r\n \u003c\"Cucumber \"\u003e\r\n (ignoring case)\r\n\tat definitions.PredefinedStepDefs.elementWithXpathShouldContainText(PredefinedStepDefs.java:132)\r\n\tat ✽.element with xpath \"//h2[contains(text(),\u0027Behaviour-Driven Development \u0027)]\" should contain text \"Cucumber \"(file:src/test/resources/features/predefined.feature:55)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I wait for 2 sec",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForSec(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Predefined steps for   Search Encrypt",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://www.searchencrypt.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title contains \"Search Encrypt \"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleContains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@type\u003d\u0027text\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@type\u003d\u0027text\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//button[@class\u003d\u0027search-bar__submit\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for element with xpath \"//section[@class\u003d\u0027serp__results container\u0027]\" to be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForElementWithXpathToBePresent(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //section[@class\u003d\u0027serp__results container\u0027] (tried for 10 second(s) with 200 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat definitions.PredefinedStepDefs.iWaitForElementWithXpathToBePresent(PredefinedStepDefs.java:55)\r\n\tat ✽.I wait for element with xpath \"//section[@class\u003d\u0027serp__results container\u0027]\" to be present(file:src/test/resources/features/predefined.feature:66)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//section[@class\u003d\u0027serp__results container\u0027]\"}\n  (Session info: chrome\u003d94.0.4606.81)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-L9F18TJ\u0027, ip: \u0027192.168.100.117\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.81, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\L\\AppData\\Local\\Te...}, goog:chromeOptions: {debuggerAddress: localhost:61003}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 204b3a5cfc81b65c593bdd01c5d7ad98\n*** Element info: {Using\u003dxpath, value\u003d//section[@class\u003d\u0027serp__results container\u0027]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat definitions.PredefinedStepDefs.iWaitForElementWithXpathToBePresent(PredefinedStepDefs.java:55)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:126)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:66)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:156)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "element with xpath \"//section[@class\u003d\u0027serp__results container\u0027]\" should contain text \"Cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldContainText(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 2 sec",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForSec(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Predefined steps for   Startpage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined7"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://www.startpage.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title contains \"Startpage - Private Search Engine. No Tracking. No Search History.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleContains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//input[@id\u003d\u0027q\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//input[@id\u003d\u0027q\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//*[@class\u003d\u0027search-form-home__button-desktop\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for element with xpath \"//*[@class\u003d\u0027mainline-results mainline-results__web\u0027]\" to be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForElementWithXpathToBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@class\u003d\u0027mainline-results mainline-results__web\u0027]\" should contain text \"Cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldContainText(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \r\nExpecting:\r\n \u003c\"\"\u003e\r\nto contain:\r\n \u003c\"Cucumber\"\u003e\r\n (ignoring case)\r\n\tat definitions.PredefinedStepDefs.elementWithXpathShouldContainText(PredefinedStepDefs.java:132)\r\n\tat ✽.element with xpath \"//*[@class\u003d\u0027mainline-results mainline-results__web\u0027]\" should contain text \"Cucumber\"(file:src/test/resources/features/predefined.feature:78)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I wait for 2 sec",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForSec(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Steps for wiki",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined8"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://www.wiki.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title contains \"Wiki.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleContains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@name\u003d\u0027q\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//*[@name\u003d\u0027q\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element with xpath \"//*[@name\u003d\u0027btnG\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//*[@id\u003d\u0027proceed-button\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 1 sec",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForSec(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I switch to iframe with xpath \"//iframe[@name\u003d\u0027googleSearchFrame\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iSwitchToIframeWithXpath(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for element with xpath \"//div[@id\u003d\u0027cse\u0027]\" to be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iWaitForElementWithXpathToBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//div[@id\u003d\u0027cse\u0027]\" should contain text \"Cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldContainText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I switch to default content",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iSwitchToDefaultContent()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Predefined steps for   giveWater",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@predefined"
    },
    {
      "name": "@predefined9"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open url \"https://www.givewater.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PredefinedStepDefs.iOpenUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title contains \"Search the Web to Give Clean Water \"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iShouldSeePageTitleContains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element with xpath \"//*[@id\u003d\u0027site-search\u0027]\" should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.elementWithXpathShouldBePresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"Behavior Driven Development\" into element with xpath \"//*[@id\u003d\u0027site-search\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "PredefinedStepDefs.iTypeIntoElementWithXpath(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element using JavaScript with xpath \"//*[@class\u003d\u0027btn-search\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefs.iClickOnElementUsingJavaScriptWithXpath(String)"
});
