Certainly! Below is the code for the PageObject and PageSteps based on the provided requirements and Gherkin feature file:

### PageObject: `BasicSearchPage.ts`

```typescript
import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class BasicSearchPage {

    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        isinCode: "input[name='ISIN_Code']",
        searchBtn: "a[type='submit']",
        results: "#midSearchResult",
        clearSearchBtn: "b['clear']"
    }

    async navigateToSearch() {
        await this.base.goto("https://www.ecb.europa.eu/paym/html/midEA.en.html");
    }

    async searchIsinCode(isinCode: string) {
        await this.page.type(this.Elements.isinCode, isinCode);
        this.page.click(this.Elements.searchBtn);
    }

    async validSearch(result: string) {
        const toast = this.page.locator(this.Elements.results);
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText(result);
    }

    async invalidSearch() {
        const toast = this.page.locator(this.Elements.results);
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText("There are no EA records which meet your search criteria. Please refine your query.");
    }

    async clearSearch() {
        this.page.click(this.Elements.clearSearchBtn);
    }
}
```

### PageSteps: `basicSearchSteps.ts`

```typescript
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import Assert from "../../helper/wrapper/assert";
import { expect } from "@playwright/test";
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
    await basicSearchPage.invalidSearch();
});

Then('the system should display detailed information for {string}', async function (issuerName: string) {
    await basicSearchPage.validSearch(`Name: ${issuerName}`);
});

When('the user clears the search', async function () {
    await basicSearchPage.clearSearch();
});

setDefaultTimeout(60 * 1000); // Setting a default timeout for Playwright steps
```

This code should provide the basic structure for your Playwright-based tests using TypeScript, adhering to the guidelines and specifications you've provided. Adjustments can be made based on your specific project structure and requirements.