WebPage is "https://www.ecb.europa.eu/paym/html/midEA.en.html"

The Elements array can be filled using the following table
| isinCode  | input[name='ISIN_Code'] |
| searchBtn | a[type='submit'] |
| results   | #midSearchResult |
| clearSearchBtn   | b['clear'] |

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

Give me the PageObject and PageSteps