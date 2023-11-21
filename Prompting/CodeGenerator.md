# Prompt 3:
Use the answer to Create Page Object Model 'queryEligibleAssets' in typescript for the following feature:
1. Use 'page' from '@playwright/queryEligibleAssets' as constructor parameter.
1. Use Given, When, Then from 'playwright-bdd/decorators' as BDD decorators, for example, @Given('pattern {string}').
1. Replace all verify methods with a single method that verifies the list of visible items
1. make all methods async — sometimes ChatGPT generates synchronous methods
1. use {string} for string pattern parameters — to stick to Cucumber Expression syntax for parameters
1. create todo items inside scenario "xxx" — to fix a scenario that uses data from another scenario, tests should be isolated
1. Don't start method names with given/when/then — for better method names
