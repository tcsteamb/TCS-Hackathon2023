Certainly! Based on the provided requirement, here is the Gherkin scenario for the basic search feature:

```gherkin
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
```

Explanation:

- **Feature and User Story:** Described the feature and user story.
- **Background:** Provided a common step that sets up the system with financial instruments data.
- **Valid Scenario:** Positive scenario for searching with valid ISIN codes.
- **Invalid Scenario:** Negative scenario for searching with invalid ISIN codes.
- **Examples Table:** Lists the valid and invalid ISIN codes along with the expected results.

Now, for an appropriate name for the *.feature file, I would suggest something like `basic_search.feature` as it clearly reflects the functionality being tested.