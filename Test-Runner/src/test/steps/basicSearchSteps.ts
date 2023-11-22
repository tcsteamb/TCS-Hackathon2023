import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
// import Assert from "../../helper/wrapper/assert";
// import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

import BasicSearchPage from "../../pages/basicSearchPage";

let basicSearchPage: BasicSearchPage;

Given('User navigates to the application', async function () {
    basicSearchPage = new BasicSearchPage(fixture.page);
    await basicSearchPage.navigateToSearch();
});

When('user perform a basic search with ISIN code {string}', async function (isinCode: string) {
    fixture.logger.info("Searching for a isinCode: " + isinCode)

    await basicSearchPage.searchIsinCode(isinCode);
    await fixture.page.waitForTimeout(2000);
});

Then('the system should indicate that no records were found', async function () {
    await basicSearchPage.invalidtSearch();
});

Then('I should see detailed information about the financial instrument', async function () {

});

