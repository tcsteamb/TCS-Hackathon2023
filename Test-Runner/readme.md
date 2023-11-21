# Test Runner

## Introduction

### P for Playwright 

Playwright is an open-source browser automation tool developed by Microsoft. It allows developers to automate the interaction of web browsers, including Chrome, Firefox, and WebKit (used by Safari). Playwright provides a high-level API for automating actions in web pages, such as clicking elements, filling out forms, taking screenshots, and more.

### TS for TypeScript

TypeScript is a powerful superset of JavaScript that adds optional static typing, making it easier to catch errors before runtime. By combining these two tools, we can create more reliable and maintainable tests.

### G for Gerkhin

Gherkin is a business-readable, domain-specific language used in the context of behavior-driven development (BDD) for describing the behavior of software systems. It is designed to be easily understandable by non-technical stakeholders, such as business analysts, product owners, and domain experts, as well as developers and testers.

### TestRunner

A test runner based on TypeScript and BDD (Behavior-Driven Development) is a tool or framework that orchestrates the execution of automated tests written in TypeScript using BDD principles. TypeScript is a statically typed superset of JavaScript, and BDD is an approach that encourages collaboration between technical and non-technical team members through the use of natural language specifications.

## Features

1. Awesome report with screenshots, videos & logs
1. Execute tests on multiple environments 
1. Parallel execution
1. Rerun only failed features
1. Retry failed tests on CI
1. Github Actions integrated with downloadable report
1. Page object model

## Sample report
![image](https://github.com/ortoniKC/Playwright_Cucumber_TS/assets/58769833/da2d9f5a-85e7-4695-8ce2-3378b692afc4)


## Project structure

- .github -> yml file to execute the tests in GitHub Actions
- src -> Contains all the features & Typescript code
- test-results -> Contains all the reports related file

## Reports

1. [Mutilple Cucumber Report](https://github.com/WasiqB/multiple-cucumber-html-reporter)
1. Default Cucumber report
1. [Logs](https://www.npmjs.com/package/winston)
1. Screenshots of failure
1. Test videos of failure
1. Trace of failure

## Get Started

### Setup:
1. Node.js Ensure that Node.js is installed on your machine.
1. VS-Code
1. Clone or download the project
1. Extract and open in the VS-Code
1. `npm install` to install the dependencies
1. `npx playwright install` to install the browsers
1. `npm run test` to execute the tests
1. To run a particular test change  
```
  paths: [
            "src/test/features/featurename.feature"
         ] 
```
7. Use tags to run a specific or collection of specs

### Folder structure
1. `src\pages` -> All the page (UI screen)
1. `src\test\features` -> write your features here
2. `src\test\steps` -> Your step definitions goes here
1. `src\hooks\hooks.ts` -> Browser setup and teardown logic
1. `src\hooks\pageFixture.ts` -> Simple way to share the page objects to steps
1. `src\helper\env` -> Multiple environments are handled
1. `src\helper\types` -> To get environment code suggestions
1. `src\helper\report` -> To generate the report
1. `config/cucumber.js` -> One file to do all the magic
1. `package.json` -> Contains all the dependencies
1. `src\helper\auth` -> Storage state (Auth file)
1. `src\helper\util` -> Read test data from json & logger

