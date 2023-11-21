Feature: Basic Search for Financial Instruments

  As a user interested in financial information and securities
  I want to use a basic search feature on a web page
  So that I can find detailed information about financial instruments using their ISIN Code

  Background:
    Given the system has financial instrument data

  @valid @basic-search
  Scenario Outline: Basic Search by Valid ISIN Code
    When I perform a basic search with ISIN code "<isin_code>"
    Then the system should display relevant results

    Examples:
      | isin_code  |
      | Valor1-1   |
      | Valor2-1   |
      | Valor3-1   |

  @invalid @basic-search
  Scenario Outline: Basic Search by Invalid ISIN Code
    When I perform a basic search with ISIN code "<isin_code>"
    Then the system should not find records

    Examples:
      | isin_code  |
      | NoValid-1  |
      | NoValid-2  |
