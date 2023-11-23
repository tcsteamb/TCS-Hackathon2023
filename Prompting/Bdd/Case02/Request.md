# Prompt Advanced Search:

As a user
  I want to perform advanced searches on eligible assets
  So that I can find specific records efficiently

  Background:
    Given the system has eligible assets data

Examples:
 1. Basic search by ISIN Code
| ISIN Code | 
| XS1877595444 |
| EU000A1G0D70 |
| AT0000A20DY7 |

2. Provide Advanced Search by the following criteria   
| Asset type                | Reference Market              | Denomination
| AT01 - Bond               | RMA01 - Cyprus Stock Exchange | ATS - Austria, Schillings
| AT02 - Medium-term note   | RMA02 - Vienna MTF            | BEF - Belgium, Francs

3. Before click search you can select the result set be Sort by
    1. "ISIN code"
    2. "Haircut category"
    3. "Asset type"
    4. "Reference market"

4. When the search button is clicked, it should perform a search and return results.

5. When clear filter is clicked, it should clear selection and results.

6. If no results are found, it should be shown "There are no EA records which meet your search criteria. Plese refine your query."

7. If the search found some records, they should be presented on table with the following headers,
| ISIN Code | Asset details | Haircut category | Reference market |Issuer
