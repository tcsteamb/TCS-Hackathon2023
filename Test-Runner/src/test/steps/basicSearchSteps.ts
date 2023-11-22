import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";

import BasicSearchPage from "../../pages/basicSearchPage";

let basicSearchPage: BasicSearchPage;

Given('User navigates to the application', async function () {
    basicSearchPage = new BasicSearchPage(fixture.page);
    await basicSearchPage.navigateToSearch();
});

When('user perform a basic search with ISIN code {string}', async function (isinCode: string) {
    fixture.logger.info("Searching for ISIN code: " + isinCode)

    await basicSearchPage.searchIsinCode(isinCode);
    await fixture.page.waitForTimeout(2000);
});

Then('the system should display detailed information for ISIN code {string} with Issuer Name {string}', async function (isinCode: string, issuerName: string) {
    await basicSearchPage.validateSearchResult(issuerName);
});

Then('the system should indicate that no records were found for ISIN code {string}', async function (isinCode: string) {
    await basicSearchPage.validateNoSearchResult();
});
