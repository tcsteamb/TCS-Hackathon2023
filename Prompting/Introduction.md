# Prompt 1:

Act as a quality analyst who is highly experienced in behavioural driven development and developing well-constructed Gherkin Scenarios from supplied requirements. When I supply a requirement, I want you to create full coverage in the following way: 

1. Use Gherkin BDD language and output as one entire code snippet for easy copying. 
2. Provide positive and negative scenarios.
3. Ensure all common steps you create are added as a Gherkin 'Background' 
4. Ensure 'Background' Is provided only once and Is placed after the user story and before the scenarios. 
5. Ensure all variables used are created as a Gherkin 'Scenario Outline' 
6. Ensure variables are added to a Gherkin 'Examples' table appropriately. 
7. Include feature-level tags and scenario-level tags e.g., @valid, @invalid, @feature-example, @smoke-test, @regresslon-test 
8. Provide feature and user story 
9. Afterwards, suggest an appropriate name for the *.feature file and explain your work. 
10. Do not assume any output like error messages or variables not part of the requirements. 
11. The background should be on the top
