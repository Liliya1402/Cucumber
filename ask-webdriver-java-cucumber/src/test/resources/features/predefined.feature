@predefined
Feature: Smoke steps

  @predefined1
  Scenario: Predefined steps for Google
    Given I open url "https://google.com"
    Then I should see page title as "Google"
    Then element with xpath "//input[@name='q']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@name='q']"
    Then I click on element using JavaScript with xpath "(//input[@name='btnK'])[1]"
    Then I wait for element with xpath "//*[@id='res']" to be present
    Then element with xpath "//*[@id='res']" should contain text "Cucumber"

  @predefined2
  Scenario: Steps for Yahoo
    Given I open url "https://www.yahoo.com/"
    Then I should see page title contains "Yahoo"
    Then element with xpath "//input[@id='ybar-sbq']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@id='ybar-sbq']"
    And I click on element using JavaScript with xpath "//input[@id='ybar-search']"
    Then I wait for element with xpath "//div[@id='results']" to be present
    Then element with xpath "//div[@id='results']" should contain text "Cucumber"
    And I wait for 2 sec

  @predefined3
  Scenario: Steps for Gibiru
    Given I open url "https://gibiru.com/"
    Then I should see page title contains "Gibiru"
    Then element with xpath "//input[@id='q'] " should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@id='q']"
    And I click on element using JavaScript with xpath "//i[@class='fas fa-search new']"
    Then I wait for element with xpath "//*[@class='gsc-resultsbox-visible']" to be present
    Then element with xpath "//*[@class='gsc-resultsbox-visible']" should contain text "Cucumber"
    And I wait for 2 sec

  @predefined4
  Scenario: Steps for Duckduckgo
    Given I open url "https://duckduckgo.com/"
    Then I should see page title contains "DuckDuckGo"
    Then element with xpath "//input[@id='search_form_input_homepage']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@id='search_form_input_homepage']"
    And I click on element using JavaScript with xpath "//input[@id='search_button_homepage']"
    Then I wait for element with xpath "//div[@id='ads']" to be present
    Then element with xpath " //a[contains(text(),'What is BDD (Behavior Driven Development)? | Agile')]" should contain text "Agile"
    And I wait for 2 sec

  @predefined5
  Scenario: Predefined steps for  swisscows
    Given I open url "https://swisscows.com/"
    Then I should see page title contains "Swisscows the alternative, data secure search engine."
    Then element with xpath "//input[@class='input-search']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@class='input-search']"
    Then I click on element using JavaScript with xpath "//button[@class='search-submit']"
    Then I wait for element with xpath "//h2[contains(text(),'Behaviour-Driven Development')]" to be present
    Then element with xpath "//h2[contains(text(),'Behaviour-Driven Development ')]" should contain text "Cucumber "
    And I wait for 2 sec


  @predefined6
  Scenario: Predefined steps for   Search Encrypt
    Given I open url "https://www.searchencrypt.com/"
    Then I should see page title contains "Search Encrypt "
    Then element with xpath "//input[@type='text']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@type='text']"
    Then I click on element using JavaScript with xpath "//button[@class='search-bar__submit']"
    Then I wait for element with xpath "//section[@class='serp__results container']" to be present
    Then element with xpath "//section[@class='serp__results container']" should contain text "Cucumber"
    And I wait for 2 sec

  @predefined7
  Scenario: Predefined steps for   Startpage
    Given I open url "https://www.startpage.com/"
    Then I should see page title contains "Startpage - Private Search Engine. No Tracking. No Search History."
    Then element with xpath "//input[@id='q']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@id='q']"
    Then I click on element using JavaScript with xpath "//*[@class='search-form-home__button-desktop']"
    Then I wait for element with xpath "//*[@class='mainline-results mainline-results__web']" to be present
    Then element with xpath "//*[@class='mainline-results mainline-results__web']" should contain text "Cucumber"
    And I wait for 2 sec

  @predefined8
  Scenario: Steps for wiki
    Given I open url "https://www.wiki.com/"
    Then I should see page title contains "Wiki.com"
    Then element with xpath "//*[@name='q']" should be present
    When I type "Behavior Driven Development" into element with xpath "//*[@name='q']"
    And I click on element with xpath "//*[@name='btnG']"
    Then I click on element using JavaScript with xpath "//*[@id='proceed-button']"
    And I wait for 1 sec
    When I switch to iframe with xpath "//iframe[@name='googleSearchFrame']"
    Then I wait for element with xpath "//div[@id='cse']" to be present
    Then element with xpath "//div[@id='cse']" should contain text "Cucumber"
    Then I switch to default content

  @predefined9
  Scenario: Predefined steps for   giveWater
    Given I open url "https://www.givewater.com/"
    Then I should see page title contains "Search the Web to Give Clean Water "
    Then element with xpath "//*[@id='site-search']" should be present
    When I type "Behavior Driven Development" into element with xpath "//*[@id='site-search']"
    Then I click on element using JavaScript with xpath "//*[@class='btn-search']"
    Then I wait for element with xpath "//*[@class='layout__mainline']" to be present
    Then element with xpath "//*[@class='layout__mainline']" should contain text "Cucumber"
    And I wait for 2 sec


  @predefined10
  Scenario: Predefined steps for   Ekoru
    Given I open url "https://ekoru.org/"
    Then I should see page title contains "Ekoru - every search cleans our oceans"
    Then element with xpath "//input[@id='fld_q']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@id='fld_q']"
    Then I click on element using JavaScript with xpath "//div[@id='btn_search']"
    Then I wait for element with xpath "//div[@class='serp-wrapper']" to be present
    Then element with xpath "//div[@class='serp-wrapper']" should contain text "Cucumber"
    And I wait for 2 sec


  @predefined11
  Scenario: Predefined steps for Ecosia
    Given I open url "https://www.ecosia.org/"
    Then I should see page title contains "Ecosia - the search engine that plants trees"
    Then element with xpath "//input[@name='q']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@name='q']"
    Then I click on element using JavaScript with xpath "//button[@type='submit']"
    Then I wait for element with xpath "//div[@class='container results']" to be present
    Then element with xpath "//div[@class='container results']" should contain text "Cucumber"
    And I wait for 2 sec


  @predefined12
  Scenario: Predefined steps for Yandex
    Given I open url "https://www.yandex.com/"
    Then I should see page title contains "Yandex"
    Then element with xpath "//input[@id='text']" should be present
    When I type "Behavior Driven Development" into element with xpath "//input[@id='text']"
    Then I click on element using JavaScript with xpath "//button[@type='submit']"
    Then I wait for element with xpath "//*[@class='content i-bem']" to be present
    Then element with xpath "//*[@class='content i-bem']" should contain text "Wikipedia"
    And I wait for 2 sec

