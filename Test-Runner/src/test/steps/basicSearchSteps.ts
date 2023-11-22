import { expect, Page } from "@playwright/test";
import BasicSearchPage from "../path-to-basicSearchPage/basicSearchPage";

export default class BasicSearchSteps {

    private basicSearchPage: BasicSearchPage;

    constructor(private page: Page) {
        this.basicSearchPage = new BasicSearchPage(page);
    }

    async performValidSearch(isinCode: string, issuerName: string) {
        await this.basicSearchPage.navigateToSearch();
        await this.basicSearchPage.searchIsinCode(isinCode);
        await this.basicSearchPage.validateSearchResult(`Name: ${issuerName}`);
    }

    async performInvalidSearch(isinCode: string) {
        await this.basicSearchPage.navigateToSearch();
        await this.basicSearchPage.searchIsinCode(isinCode);
        await this.basicSearchPage.validateNoSearchResult();
    }
}
