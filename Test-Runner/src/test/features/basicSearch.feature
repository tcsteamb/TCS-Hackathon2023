Feature: Basic Search for Financial Instruments

  As a user interested in financial information and securities,
  I want to use a basic search feature on a web page
  So that I can find detailed information about financial instruments using their ISIN Code.

  Background:
    Given the system has financial instruments data

  @valid @basic-search
  Scenario Outline: Basic Search by Valid ISIN Code
    When I search with ISIN code "<isin_code>"
    Then the system should display detailed information for "<issuer_name>"

    Examples:
      | isin_code      | issuer_name          |
      | XS1877595444   | Name: Heineken N.V.   |
      | AT0000A20DY7   | Name: Erste Group Bank AG |

  @invalid @basic-search
  Scenario Outline: Basic Search by Invalid ISIN Code
    When I search with ISIN code "<isin_code>"
    Then the system should not find any records

    Examples:
      | isin_code |
      | NoValid   |
      | Null      |

Feature: Basic Search for Financial Instruments

  As a user interested in financial information and securities
  I want to use a basic search feature on a web page
  So that I can find detailed information about financial instruments using their ISIN Code

  Background:
    Given the system has financial instrument data
 
  @valid @basic-search
  Scenario Outline: Basic Search by Valid ISIN Code
    When I perform a basic search with ISIN code "<isin_code>"
    Then the system should display issuer name "<issuer_name>"

    Examples:
    | isin_code    |issuer_name       |
    | XS2408048671 |Aktia Bank        |
    | DE000HLB4YE9 |Landesbank Hessen |

  @Invalid @basic-search
  Scenario Outline: Basic Search by invalid ISIN Code
    When I perform a basic search with ISIN code "<isin_code>"
    Then the system should display error message "<error_message>"

    Examples:
    | isin_code    |error_message                                                                            |
    | abcd23456745 |There are no EA records which meet your search criteria. Please refine your query.       |