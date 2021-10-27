@cucumber
Feature: Quote page Scenarios

  Background:
    Given I open url "https://skryabin.com/market/quote.html"
    Then I should see page title contains "Get a Quote"

  @cucumber1
  Scenario: Verifying Responsive UI Behavior
    When I resize window to 1024 and 768
    Then element with xpath "//b[@id='location']" should be displayed
    When I resize window to 375 and 667
    Then element with xpath "//b[@id='location']" should not be displayed

  @cucumber2
  Scenario: Verifying Username input field behavior
    When I type "A" into element with xpath "//input[@name='username']"
    And I click on element with xpath "//button[@id='formSubmit']"
    Then element with xpath "//label[@id='username-error']" should be displayed
    Then element with xpath "//label[@id='username-error']" should contain text "Please enter at least 2 characters"
    And I wait for 1 sec
    When I clear element with xpath "//input[@name='username']"
    Then element with xpath "//label[@id='username-error']" should contain text "This field is required"
    And I wait for 1 sec
    When I type "AA" into element with xpath "//input[@name='username']"
    And I click on element with xpath "//button[@id='formSubmit']"
    Then element with xpath "//label[@id='username-error']" should not be displayed
    And I wait for 1 sec

  @cucumber3
  Scenario: Verifying Email  field accepts only valid email addresses
    When I type "a" into element with xpath "//input[@name='email']"
    And I click on element with xpath "//button[@id='formSubmit']"
    Then element with xpath "//label[@id='email-error']" should be displayed
    Then element with xpath "//label[@id='email-error']" should contain text "Please enter a valid email address."
    And I wait for 3 sec
    When I clear element with xpath "//input[@name='email']"
    And I click on element with xpath "//button[@id='formRefresh']"
    And I click on element with xpath "//button[@id='formSubmit']"
    Then element with xpath "//label[@id='email-error']" should contain text "This field is required."
    And I wait for 3 sec
    When I type "test@gmail.com" into element with xpath "//input[@name='email']"
    Then element with xpath "//label[@id='email-error']" should not be displayed
   And I wait for 3 sec

  @cucumber4
 #  Validate that Confirm Password is disabled if Password field is empty.
  Scenario: Verifying 'Password' Input field behavior
    When I click on element with xpath "//button[@id='formSubmit']"
    Then element with xpath "//label[@id='password-error']" should be displayed
    When I type "ABC" into element with xpath "//input[@id='password']"
    And I click on element with xpath "//input[@id='confirmPassword']"
    And I wait for 3 sec
    Then element with xpath "//label[@id='password-error']" should be displayed
    Then element with xpath "//label[@id='password-error']" should contain text "at least 5 characters"
    Then I clear element with xpath "//input[@id='password']"
    When I type "ABCDEF" into element with xpath "//input[@id='password']"
    And I click on element with xpath "//input[@id='confirmPassword']"
    Then element with xpath "//label[@id='password-error']" should not be displayed
    And I wait for 3 sec

  @cucumber5
  Scenario: Verifying 'Confirm Password' is disabled when Password field is empty.
    When I click on element using JavaScript with xpath "//button[@id='formSubmit']"
    Then element with xpath "//input[@id='confirmPassword']" should be disabled
    When I type "abcdef" into element with xpath "//input[@id='password']"
    Then element with xpath "//input[@id='confirmPassword']" should be enabled


  @cucumber6

  Scenario: Verifying Name Field Behavior using Modal dialog
    And I click on element with xpath "//input[@id='name']"
    Then element with xpath "//div[@aria-describedby='nameDialog']" should be displayed
    And I wait for 2 sec
    Then I type "Lili" into element with xpath "//input[@id='firstName']"
    And I wait for 2 sec
    Then  I type "NA" into element with xpath "//input[@id='middleName']"
    And I wait for 2 sec
    Then I type "Goldman" into element with xpath "//input[@id='lastName']"
    And I wait for 2 sec
    And I click on element with xpath "//button/*[contains(text(),'Save')]"
    Then element with xpath "//input[@id='name']" should have attribute "value" as "Lili NA Goldman"
    And I wait for 2 sec

  @cucumber7
  Scenario: Verifying 'Accepting Privacy Policy' field is required to submit the form
    When I click on element using JavaScript with xpath "//button[@id='formSubmit']"
    And element with xpath "//label[@id='agreedToPrivacyPolicy-error']" should be displayed
    Then I click on element with xpath "//span[contains(text(),'I have read and accept Privacy Policy.')]"
    And element with xpath "//label[@id='agreedToPrivacyPolicy-error']" should not be displayed
    And I wait for 2 sec

  @cucumber8
  Scenario: Verifying the data after form is submitted /password is not displayed
    When I click on element with xpath "//input[@id='name']"
    And I type "Lili" into element with xpath "//input[@id='firstName']"
    And   I type "NA" into element with xpath "//input[@id='middleName']"
    And I type "Goldman" into element with xpath "//input[@id='lastName']"
    And I click on element with xpath "//span[contains(text(),'Save')]"
    Then element with xpath "//input[@id='name']" should have attribute "value" as "Lili NA Goldman"
    When I type "Lili" into element with xpath "//input[@name='username']"
    And I type "test@gmail.com" into element with xpath "//input[@name='email']"
    And I type "ABCDEF" into element with xpath "//input[@id='password']"
    And I type "ABCDEF" into element with xpath "//input[@id='confirmPassword']"
    And I type "20478978" into element with xpath "//input[@ng-model='formData.phone']"
    And I type "1/12/1976" into element with xpath "//input[@ng-model='formData.dateOfBirth']"
    And I click on element with xpath "//input[@ng-model='formData.gender']"
    Then I click on element with xpath "//select[@name='countryOfOrigin']"
    Then I click on element with xpath "//option[contains(text(),'Israel')]"
    And I type "107 Bluemeadow Road" into element with xpath "//textarea[@id='address']"
    Then I click on element with xpath "//select[@name='carMake']/option[@value='Toyota']"
    And I click on element with xpath "//span[contains(text(),'I have read and accept Privacy Policy.')]"
    When I click on element with xpath "//button[@id='formSubmit']"
    Then I wait for element with xpath "//div[@class='well form-container container-fluid']" to be present
    And I wait for 5 sec
    Then element with xpath "//b[@name='password']" should contain text "entered"