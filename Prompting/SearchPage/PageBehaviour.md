# Prompt 2:

Here is a list of requirements that may be used for building a "Query eligible assets (daily data)" page: 

1. Basic Search by ISIN code

2. Provide Advanced Search by the following criteria:

  - Asset type
  - Reference market
  - Denomination


3. Before click seach you can select the result set be Sort by
  - "ISIN code"
  - "Haircut category"
  - "Asset type"
  - "Reference market"

4. When the search button is clicked, it should perform a search and return results

5. When clear filters are clicked should clean filters and results

6. If no results are found, it should be shown a "There are no EA records which meet your search criteria. Please refine your query."

7. If the search found records they should be presented on a table with the following header
- ISIN code	
- Asset details	
- Haircut category
- Reference market
- Issuer

8. Create each individual advanced search criterion, providing comprehensive test coverage for all possible critearia valid and invalid. Valid should return results and invalid shoult return not results.

9. And Due please include another scenario to cover all possible combinations of the advanced search criteria, provide a full set of examples per each criteria.