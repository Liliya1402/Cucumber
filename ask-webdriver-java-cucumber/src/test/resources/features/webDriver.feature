@webdriver
Feature: WebDriver Methods

  @webdriver1
  Scenario: WebDriver - Navigate
    Given I navigate to "google"
    Then I print page details
    And I navigate to "yahoo"
    Then I print page details
    And I go back, forward, and refresh the page

  @webdriver2
  Scenario: Quote - Email Field Verification
    Given I navigate to "quote"
    When I type "incorrectemail" into email field
    And I submit the form
    Then email error message is displayed
    Then error message "Please enter a valid email address." is  displayed
    And I wait for 1 sec

  @webdriver3
  Scenario: Quote - UserName Verification
    Given I navigate to "quote"
    When I type "A" into username field
    And I wait for 2 sec
    And I submit the form
    Then username error message is displayed
    Then  message "Please enter at least 2 characters." is displayed
    And I push refresh button
    And I submit the form
    Then warning message is displayed
    Then warning message"This field is required." is displayed
    And I wait for 1 sec


  @webdriver4
  Scenario Outline: Quote - Email Field Verification Outline
    Given I navigate to "quote"
    When I type <email> into email field
    And I submit the form
    Then email error message is displayed
    Then error message <expectedMessage> is  displayed

    Examples:
      | email             | expectedMessage                       |
      | "incorrectemail"  | "Please enter a valid email address." |
      | "incorrect@"      | "Please enter a valid email address." |
      | "incorrectemail@" | "Please enter a valid email address." |
      | ""                | "This field is required"              |

  @webdriver5

  Scenario:  'Accepting Privacy Policy' field is required
    Given I navigate to "quote"
    When I submit the form
    Then I wait for text "Must check"
    When I click checkbox
    And I wait for 2 sec
   Then text "Must check" should be not displayed
    And I wait for 2 sec

  @webdriver6

  Scenario: Verifying Name Field using Modal dialog
    Given I navigate to "quote"
    When I click inside the input field "Name'
    Then dialog window should be displayed
    Then I input name  "Lili" into First Name field
    Then  I input name  "NA" into middle name
    Then I type name  "Goldman" into Last name field
    And I wait for 2 sec
 #   When I click on save button
#    Then name field  should have attribute "value" as "Lili NA Goldman"
 #   And I wait for 2 sec
