import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

 // Given('the system has financial instrument data', async () => {
    // Implement logic to set up or mock financial instrument data
//    fixture.logger.info("Navigate to search page: ")
 //   await fixture.page.goto(process.env.BASEURL);
//  });
  
  When('I enter ISIN {string}', async (ISIN) => {
    // Implement logic to perform a basic search with the provided ISIN code using Playwright
    fixture.logger.info("Search ISIN: "+ISIN)
    await fixture.page.locator("input[name='ISIN_Code']").type(ISIN);
    
  });
  
  Then('I click on Advanced Search', async () => {
    // Implement logic to verify that the system displays the expected issuer name using Playwright
    fixture.logger.info("Click on Advanced Search ")
    await fixture.page.locator("//main//span/label").click();
  });

  Then('I select Asset Type {string}', async (AssetType) => {
    // Implement logic to verify that the system displays the expected issuer name using Playwright
    fixture.logger.info("Select Asset Type ")
    await fixture.page.selectOption('//select[@id="Asset_Type"]', AssetType);
  });

  Then('I select Reference Market {string}', async (ReferenceMarket) => {
    // Implement logic to verify that the system displays the expected issuer name using Playwright
    fixture.logger.info("Select Reference Market ")
    await fixture.page.selectOption('//select[@id="Ref_Market"]', ReferenceMarket);
  });

  Then('I click on Search', async () => {
    // Implement logic to verify that the system displays the expected issuer name using Playwright
    fixture.logger.info("Click on Search ")
    await fixture.page.locator("a[id='midEASearchSubmit']").click();
  });

