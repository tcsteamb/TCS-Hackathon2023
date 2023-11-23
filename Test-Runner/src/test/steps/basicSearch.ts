import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

  Given('the system has financial instrument data', async () => {
    // Implement logic to set up or mock financial instrument data
    fixture.logger.info("Navigate to search page: ")
    await fixture.page.goto(process.env.BASEURL);
  });
  
  When('I perform a basic search with ISIN code {string}', async (ISIN) => {
    // Implement logic to perform a basic search with the provided ISIN code using Playwright
    fixture.logger.info("Search ISIN: "+ISIN)
    await fixture.page.locator("input[name='ISIN_Code']").type(ISIN);
    await fixture.page.locator("a[id='midEASearchSubmit']").click();
    
  });
  
  Then('the system should display issuer name {string}', async (IssuerName) => {
    // Implement logic to verify that the system displays the expected issuer name using Playwright
    fixture.logger.info("Verify Issuer Name: "+IssuerName)
    const issuerNameElement = await fixture.page.waitForSelector('//div[@class="wrapper"]//td[6]');
   // await fixture.page.locator("//td[contains(.,IssuerName)]").textContent();
    const actualIssuerName = await issuerNameElement.innerText();
    fixture.logger.info("Issuer Details: "+actualIssuerName)  
     expect(actualIssuerName).toContain(IssuerName);
  });

  Then('the system should display error message {string}', async (ErrorMessage) => {
    // Implement logic to verify that the system displays the expected issuer name using Playwright
    await fixture.page.waitForTimeout(2000);
    fixture.logger.info("Verify Error Message for no ISIN found: "+ErrorMessage)
    const issuerNameElement = await fixture.page.waitForSelector('//div[@id="midSearchResult"]');
   // await fixture.page.locator("//td[contains(.,IssuerName)]").textContent();
    const actualErrorMessage = await issuerNameElement.innerText();
    fixture.logger.info("Issuer Details: "+actualErrorMessage)  
     expect(actualErrorMessage).toContain(ErrorMessage);
  });