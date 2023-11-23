Feature: Advanced Search for Financial Instruments

  As a user interested in financial information and securities
  I want to use an advanced search feature on a web page
  So that I can find detailed information about financial instruments using their ISIN Code

  Background:
    Given the system has financial instrument data
 
  @valid @advanced-search
  Scenario: Advanced Search by Valid ISIN Code
    When I enter ISIN "<isin_code>"
    Then I click on Advanced Search
    And I select Asset Type "<asset_type>"
    And I select Reference Market "<reference_market>" 
    And I click on Search
    Then the system should display issuer name "<issuer_name>"  

    Examples:
    | isin_code    | asset_type                 |  reference_market  |issuer_name       |
    | XS2408048671 | AT02                       |  RMLU01            |Aktia Bank        |
    | FR0014007LP4 | AT01                       |  RMFR01            |RTE EDF TRANSPORT |