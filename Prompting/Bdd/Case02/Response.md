Feature: Advanced Search for Eligible Assets
  As a user
  I want to perform advanced searches on eligible assets
  So that I can find specific records efficiently

  Background:
    Given the system has eligible assets data

  1. @valid @basic-search
  Scenario Outline: Advanced Search by ISIN code and Asset Type
    When I search with ISIN code "<isin_code>"
    And I select asset type "<asset_type>"
    Then the system should display relevant results

    Examples:
      | isin_code       | asset_type            |
      | XS1877595444    | AT01 - Bond           |
      | EU000A1G0D70    | AT02 - Medium-term note|
      | AT0000A20DY7    | AT01 - Bond           |

  @invalid @basic-search
  Scenario Outline: Invalid Advanced Search with Incorrect ISIN code or Asset Type
    When I search with ISIN code "<invalid_isin_code>"
    And I select asset type "<invalid_asset_type>"
    Then the system should display no results

    Examples:
      | invalid_isin_code | invalid_asset_type        |
      | INVALID_ISIN      | AT01 - Bond               |
      | XS1877595444      | INVALID_ASSET_TYPE        |
      | INVALID_ISIN      | INVALID_ASSET_TYPE        |

2. @valid
  Scenario Outline: User performs an advanced search by criteria
    Given the user wants to perform an advanced search with the following criteria:
      | Asset Type                | Reference Market              | Denomination              |
      | <Asset Type>              | <Reference Market>            | <Denomination>            |
    When the user performs the advanced search
    Then the system should display relevant records

    Examples:
      | Asset Type                | Reference Market              | Denomination              |
      | AT01 - Bond               | RMA01 - Cyprus Stock Exchange | ATS - Austria, Schillings  |
      | AT02 - Medium-term note   | RMA02 - Vienna MTF            | BEF - Belgium, Francs      |

  @invalid
  Scenario Outline: User performs an advanced search with invalid criteria
    When the user performs the advanced search
    Then the system should not display any matching records

    Examples:
      | Asset Type                | Reference Market              | Denomination              |
      | INVALID_TYPE              | RMA01 - Cyprus Stock Exchange | ATS - Austria, Schillings  |
      | AT01 - Bond               | INVALID_MARKET                | ATS - Austria, Schillings  |
      | AT02 - Medium-term note   | RMA02 - Vienna MTF            | INVALID_DENOMINATION      |

3. @valid
  Scenario Outline: User performs an advanced search and sorts the result set by "<Sort Criteria>"
    Given the user wants to perform an advanced search with the following criteria:
      | Asset Type                | Reference Market              | Denomination              |
      | <Asset Type>              | <Reference Market>            | <Denomination>            |
    And the user wants to sort the result set by "<Sort Criteria>"
    When the user performs the advanced search and clicks on search
    Then the system should display relevant records sorted by "<Sort Criteria>"

    Examples:
      | Asset Type                | Reference Market              | Denomination              | Sort Criteria         |
      | AT01 - Bond               | RMA01 - Cyprus Stock Exchange | ATS - Austria, Schillings  | ISIN code             |
      | AT02 - Medium-term note   | RMA02 - Vienna MTF            | BEF - Belgium, Francs      | Haircut category      |
      | AT03 - Equity             | RMA03 - Paris Euronext        | DEM - Germany, Marks       | Asset type            |
      | AT04 - Derivative         | RMA04 - London Stock Exchange | FRF - France, Francs       | Reference market       |

  @invalid
  Scenario Outline: User performs an advanced search with invalid criteria and sorts the result set
    And the user wants to sort the result set by "<Sort Criteria>"
    When the user performs the advanced search and clicks on search
    Then the system should not display any matching records

    Examples:
      | Asset Type                | Reference Market              | Denomination              | Sort Criteria         |
      | INVALID_TYPE              | RMA01 - Cyprus Stock Exchange | ATS - Austria, Schillings  | ISIN code             |
      | AT01 - Bond               | INVALID_MARKET                | ATS - Austria, Schillings  | Haircut category      |
      | AT02 - Medium-term note   | RMA02 - Vienna MTF            | INVALID_DENOMINATION      | Asset type            |
      | AT03 - Equity             | RMA03 - Paris Euronext        | DEM - Germany, Marks       | INVALID_SORT_CRITERIA |

4. @valid
  Scenario Outline: User clicks the search button and gets results based on search criteria
    Given the user wants to perform a search with the following criteria:
      | Asset Type                | Reference Market              | Denomination              |
      | <Asset Type>              | <Reference Market>            | <Denomination>            |
    And the user has sorted the result set by "<Sort Criteria>"
    When the user clicks the search button
    Then the system should display relevant records sorted by "<Sort Criteria>"

    Examples:
      | Asset Type                | Reference Market              | Denomination              | Sort Criteria         |
      | AT01 - Bond               | RMA01 - Cyprus Stock Exchange | ATS - Austria, Schillings  | ISIN code             |
      | AT02 - Medium-term note   | RMA02 - Vienna MTF            | BEF - Belgium, Francs      | Haircut category      |
      | AT03 - Equity             | RMA03 - Paris Euronext        | DEM - Germany, Marks       | Asset type            |
      | AT04 - Derivative         | RMA04 - London Stock Exchange | FRF - France, Francs       | Reference market       |

  @invalid
  Scenario Outline: User clicks the search button with invalid criteria
    And the user has sorted the result set by "<Sort Criteria>"
    When the user clicks the search button
    Then the system should not display any matching records

    Examples:
      | Asset Type                | Reference Market              | Denomination              | Sort Criteria         |
      | INVALID_TYPE              | RMA01 - Cyprus Stock Exchange | ATS - Austria, Schillings  | ISIN code             |
      | AT01 - Bond               | INVALID_MARKET                | ATS - Austria, Schillings  | Haircut category      |
      | AT02 - Medium-term note   | RMA02 - Vienna MTF            | INVALID_DENOMINATION      | Asset type            |
      | AT03 - Equity             | RMA03 - Paris Euronext        | DEM - Germany, Marks       | INVALID_SORT_CRITERIA |

5. @valid
  Scenario: User clicks the "Clear Filter" button to reset the view
    Given the user has performed a search with the following criteria:
      | Asset Type                | Reference Market              | Denomination              |
      | AT01 - Bond               | RMA01 - Cyprus Stock Exchange | ATS - Austria, Schillings  |
    And the user has sorted the result set by "ISIN code"
    When the user clicks the "Clear Filter" button
    Then the system should reset the view and clear all selections and results

  @invalid
  Scenario: User clicks the "Clear Filter" button without performing a search
    Given the user has not performed any search
    When the user clicks the "Clear Filter" button
    Then the system should reset the view and clear all selections and results

6. @no_results
  Scenario Outline: User performs a search, and no results are found
    Given the user wants to perform a search with the following criteria:
      | Asset Type                | Reference Market              | Denomination              |
      | <Asset Type>              | <Reference Market>            | <Denomination>            |
    And the user has sorted the result set by "<Sort Criteria>"
    When the user clicks the search button
    Then the system should display the message "<No Results Message>" if no matching records are found

    Examples:
      | Asset Type                | Reference Market              | Denomination              | Sort Criteria         | No Results Message                                                        |
      | AT01 - Bond               | RMA01 - Cyprus Stock Exchange | ATS - Austria, Schillings  | ISIN code             | There are no EA records which meet your search criteria. Please refine your query. |
      | AT02 - Medium-term note   | RMA02 - Vienna MTF            | BEF - Belgium, Francs      | Haircut category      | No eligible assets found based on your search criteria. Please adjust your query. |
      | AT03 - Equity             | RMA03 - Paris Euronext        | DEM - Germany, Marks       | Asset type            | No results match your search criteria. Please modify your query.              |
      | AT04 - Derivative         | RMA04 - London Stock Exchange | FRF - France, Francs       | Reference market       | Your search did not yield any eligible assets. Please try different criteria.  |

7. 


