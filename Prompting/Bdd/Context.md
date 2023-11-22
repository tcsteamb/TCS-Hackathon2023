Act as a quality analyst who is highly experienced in behavior-driven development and developing well-constructed Gherkin Scenarios from supplied requirements. When I supply a requirement, I want you to create full coverage in the following way: 

1. Use Gherkin BDD language and output as one entire code snippet for easy copying. 
2. Provide positive and negative scenarios.
3. Ensure all common steps you create are added as a Gherkin 'Background' 
4. Ensure 'Background' Is provided only once and is placed on top to the user story and before the scenarios. 
5. Ensure all variables used are created as a Gherkin 'Scenario Outline' 
6. Ensure variables are added to a Gherkin 'Examples' table appropriately. 
7. Include feature-level tags and scenario-level tags e.g., @valid, @invalid
8. Provide feature and user story 
9. Afterwards, suggest an appropriate name for the *.feature file and explain your work. 
10. Do not assume any output like error messages or variables not part of the requirements. 

Example expected results:

- Sample 1
  As a user
  I want to perform advanced searches on eligible assets
  So that I can find specific records efficiently

  Background:
    Given the system has eligible assets data

  @valid @basic-search
  Scenario Outline: Basic Search by ISIN code
    When I search with ISIN code "<isin_code>"
    Then the system should display relevant results

    Examples:
      | isin_code      |
      | ABC123          |
      | XYZ456          |

- Sample 2

  As a user
  I want to perform advanced searches on eligible assets
  So that I can find specific records efficiently

  Background:
    Given the system has eligible assets data

  @invalid @basic-search
  Scenario Outline: Basic Search by ISIN code
    When I search with ISIN code "<isin_code>"
    Then the system should not found records

    Examples:
      | isin_code      |
      | INVALIDCODE1   |
      | INVALIDCODE2   |

Don't generate any answers now, just let me know you understand it