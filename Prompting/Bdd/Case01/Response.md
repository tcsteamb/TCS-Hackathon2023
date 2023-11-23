Certainly! Here is the Gherkin scenario for the updated basic search feature:

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
    Then the system should display an error message "<error_message>"

    Examples:
      | isin_code       | error_message                                                                                             |
      | abcd23456745    | There are no EA records which meet your search criteria. Please refine your query.                           |
```

Explanation:

- **Feature and User Story:** Described the feature and user story.
- **Background:** Provided a common step that sets up the system with financial instruments data.
- **Valid Scenario:** Positive scenario for searching with valid ISIN codes.
- **Invalid Scenario:** Negative scenario for searching with an invalid ISIN code, including an error message.
- **Examples Table:** Lists the valid and invalid ISIN codes along with the expected results.

**File Name Suggestion:** `basicSearch.feature`

In the file name, I've used camel case (`basicSearch.feature`) to follow the convention of naming feature files in BDD. This makes the file name readable and aligns with best practices in naming conventions.