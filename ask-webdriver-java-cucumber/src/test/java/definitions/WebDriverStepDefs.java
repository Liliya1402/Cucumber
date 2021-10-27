package definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.assertj.core.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static support.TestContext.getDriver;

public class WebDriverStepDefs {
    @Given("I navigate to {string}")
    public void iNavigateTo(String url) {
        switch (url) {
            case "google":
                getDriver().get("https://www.google.com/");
                break;
            case "yahoo":
                getDriver().get("https://www.yahoo.com/");
                break;
            case "quote":
                getDriver().get("https://skryabin.com/market/quote.html");
                break;
            default:
                System.out.println("This site is not supported");

        }
    }

    @Then("I print page details")
    public void iPrintPageDetails() {
        System.out.println(getDriver().getTitle());
        System.out.println(getDriver().getCurrentUrl());
        System.out.println(getDriver().getWindowHandle());
    }

    @And("I go back, forward, and refresh the page")
    public void iGoBackForwardAndRefreshThePage() {
        getDriver().navigate().back();
        getDriver().navigate().forward();
        getDriver().navigate().refresh();
    }

    @When("I type {string} into email field")
    public void iTypeIntoEmailField(String email) {
        getDriver().findElement(By.name("email")).sendKeys(email);

    }

    @And("I submit the form")
    public void iSubmitTheForm() {
        getDriver().findElement(By.id("formSubmit")).click();
    }

    @Then("email error message is displayed")
    public void emailErrorMessageIsDisplayed() {
        assertThat(getDriver().findElement(By.id("email-error")).isDisplayed()).isTrue();
    }

    @Then("error message {string} is  displayed")
    public void errorMessageIsDisplayed(String expectedMessage) {
        String actualMessage = getDriver().findElement(By.id("email-error")).getText();
        System.out.println(actualMessage);
        assertThat(actualMessage.equals(expectedMessage)).isTrue();
    }

    @When("I type {string} into username field")
    public void iTypeIntoUsernameField(String username) {
        getDriver().findElement(By.name("username")).sendKeys(username);
    }

    @Then("username error message is displayed")
    public void usernameErrorMessageIsDisplayed() {
        assertThat(getDriver().findElement(By.id("username-error")).isDisplayed()).isTrue();
    }

    @Then("message {string} is displayed")
    public void messageIsDisplayed(String expectedMessage) {
        String actMessage = getDriver().findElement(By.xpath("//label[@id='username-error']")).getText();
        System.out.println(actMessage);
        assertThat(actMessage.equals(expectedMessage)).isTrue();
    }


    @And("I push refresh button")
    public void iPushRefreshButton() {
        getDriver().findElement(By.id("formRefresh")).click();
    }


    @Then("warning message is displayed")
    public void warningMessageIsDisplayed() {
        assertThat(getDriver().findElement(By.id("username-error")).isDisplayed()).isTrue();
    }

    @Then("warning message{string} is displayed")
    public void warningMessageIsDisplayed(String expectedMessage) {
        String actMessage = getDriver().findElement(By.id("username-error")).getText();
        System.out.println(actMessage);
        assertThat(actMessage.equals(expectedMessage)).isTrue();
    }

    @When("I check  element using JavaScript with xpath {string}")
    public void iCheckElementUsingJavaScriptWithXpath(String expectedMessage) {
        String actMessage = getDriver().findElement(By.xpath("//label[@id='username-error']")).getText();
    }

    @Then("I wait for element with xpath {string}")
    public void iWaitForElementWithXpath(String expectedMessage) {
        String actMessage = getDriver().findElement(By.id("agreedToPrivacyPolicy-error")).getText();
        System.out.println(actMessage);
        assertThat(actMessage.equals(expectedMessage)).isFalse();
    }


    @Then("element with xpath {string} should be not displayed")
    public void elementWithXpathShouldBeNotDisplayed(String expectedMessage) {
        String actMessage = getDriver().findElement(By.id("agreedToPrivacyPolicy-error")).getText();
        System.out.println(actMessage);
        assertThat(actMessage.equals(expectedMessage)).isFalse();
    }

//
//    @When("I click inside the element with xpath {string}")
//    public void iClickInsideTheElementWithXpath(String xpath) {
//        WebElement element = getDriver().findElement(By.xpath(xpath));
//        JavascriptExecutor executor = (JavascriptExecutor) getDriver();
//        executor.executeScript("arguments[0].click();", element);
//    }

//    @Then("dialog window  with xpath {string} should be displayed")
//    public void dialogWindowWithXpathShouldBeDisplayed(String xpath) {
//        Assertions.assertThat(getDriver().findElement(By.xpath(xpath)).isEnabled()).isTrue();
//    }
//
//    @Then("I input name  {string} into element with xpath {string}")
//    public void iInputNameIntoElementWithXpath(String name, String xpath) {
//        getDriver().findElement(By.xpath(xpath)).sendKeys(name);
//    }


    @Then("I type name  {string} into element with xpath {string}")
    public void iTypeNameIntoElementWithXpath(String name, String xpath) {
        getDriver().findElement(By.xpath(xpath)).sendKeys(name);
    }

//    @When("I click on save button  with xpath {string}")
//    public void iClickOnSaveButtonWithXpath(String xpath) {
//        getDriver().findElement(By.xpath("//button/*[contains(text(),'Save')]")).click();
//    }

    @Then("I wait for text {string}")
    public void iWaitForText(String expectedMessage) {
        String actMessage = getDriver().findElement(By.id("agreedToPrivacyPolicy-error")).getText();
        System.out.println(actMessage);
        assertThat(actMessage.equals(expectedMessage)).isFalse();
    }

    @When("I click checkbox")
    public void iClickCheckbox() {
        getDriver().findElement(By.xpath("//input[@name='agreedToPrivacyPolicy']")).click();
    }

    @Then("text {string} should be not displayed")
    public void textShouldBeNotDisplayed(String expectedMessage) {
        String actMessage = getDriver().findElement(By.id("agreedToPrivacyPolicy-error")).getText();
        System.out.println(actMessage);
        assertThat(actMessage.equals(expectedMessage)).isFalse();
    }

    @When("I click inside the input field \"Name'")
    public void iClickInsideTheInputFieldName() throws Throwable {
        WebElement element = getDriver().findElement(By.xpath("//input[@id='name']"));
        JavascriptExecutor executor = (JavascriptExecutor) getDriver();
        executor.executeScript("arguments[0].click();", element);
    }

    @Then("dialog window should be displayed")
    public void dialogWindowShouldBeDisplayed(String xpath) {
        Assertions.assertThat(getDriver().findElement(By.xpath("//div[@id='nameDialog']")).isDisplayed()).isTrue();
    }

    @Then("I input name  {string} into First Name field")
    public void iInputNameIntoFirstNameField(String name, String xpath) {
        getDriver().findElement(By.xpath("//input[@id='firstName']")).sendKeys(name);
    }

    @Then("I input name  {string} into middle name")
    public void iInputNameIntoMiddleName(String name) {
        getDriver().findElement(By.xpath("//input[@id='middleName']")).sendKeys(name);

    }

    @Then("I type name  {string} into Last name field")
    public void iTypeNameIntoLastNameField(String name) {
        getDriver().findElement(By.xpath("//input[@id='lastName']")).sendKeys(name);
    }

    @When("I click on save button")
    public void iClickOnSaveButton(String xpath) {
        getDriver().findElement(By.xpath("//button/*[contains(text(),'Save')]")).click();
    }

    @Then("name field  should have attribute {string} as {string}")
    public void nameFieldShouldHaveAttributeAs(String xpath, String attribute, String attributeValue) {
        Assertions.assertThat(getDriver().findElement(By.xpath("//input[@id='name']")).getAttribute(attribute)).isEqualTo(attributeValue);
    }
}
