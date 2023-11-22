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
        await this.page.fill(this.Elements.isinCode, isinCode);
        await this.page.click(this.Elements.searchBtn);
    }

    async clearSearch() {
        await this.page.click(this.Elements.clearSearchBtn);
    }

    async validateSearchResult(expectedResult: string) {
        const toast = this.page.locator(this.Elements.results);
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText(expectedResult);
    }

    async validateNoSearchResult() {
        const toast = this.page.locator(this.Elements.results);
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText("There are no records which meet your search criteria. Please refine your query.");
    }
}
