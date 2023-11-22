Generate TypeScript code for a Cucumber steps definition: 

Feature: Basic Search for Financial Instruments

As a user interested in financial information and securities, I want to use a powerful search feature on a web page So that I can find detailed information about financial instruments using their ISIN Code.

Background: Given the web page with a powerful search feature is accessible

@valid @basic-search Scenario Outline: Basic Search with Valid ISIN Code When I perform a basic search with ISIN code "<isin_code>" Then I should see detailed information about the financial instrument

Examples:
  | isin_code      |
  | XS1877595444   |
  | EU000A1G0D70   |
  | AT0000A20DY7   |
@invalid @basic-search Scenario Outline: Basic Search with Invalid ISIN Code When I perform a basic search with ISIN code "<isin_code>" Then the system should indicate that no records were found

Examples:
  | isin_code  |
  | NoValid    |
  | Null       |
