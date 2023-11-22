WebPage is "https://www.ecb.europa.eu/paym/html/midEA.en.html"

Feature: Basic Search for Financial Instruments

  As a user interested in financial information and securities,
  I want to use a basic search feature on a web page,
  So that I can find detailed information about financial instruments using their ISIN Code.

  Background:
    Given the web page contains a basic search feature

  @valid @basic-search
  Scenario Outline: Basic Search with Valid ISIN Code
    When I search with ISIN code "<isin_code>"
    Then the system should display detailed information for "<isin_code>" with Issuer Name "<issuer_name>"

    Examples:
      | isin_code       | issuer_name           |
      | XS1877595444    | Name: Heineken N.V.   |
      | AT0000A20DY7    | Name: Erste Group Bank AG |

  @invalid @basic-search
  Scenario Outline: Basic Search with Invalid ISIN Code
    When I search with ISIN code "<isin_code>"
    Then the system should not find records for "<isin_code>"

    Examples:
      | isin_code   |
      | NoValid     |
      | Null        |

Give me the PageObject and PageSteps