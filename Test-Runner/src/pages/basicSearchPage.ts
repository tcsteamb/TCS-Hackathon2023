import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class basicSearchPage {

    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        isinCode: "input[name='ISIN_Code']",
        searchBtn: "a[type='submit']",
        results: "#midSearchResult"
    }

    async navigateToSearch() {
        await this.base.goto("https://www.ecb.europa.eu/paym/html/midEA.en.html")
    }

    async searchIsinCode(isinCode: string) {
        await this.page.type(this.Elements.isinCode, isinCode);
        this.page.click(this.Elements.searchBtn);
    }

    async validaSearch(result: string) {
        const toast = this.page.locator(this.Elements.results);
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText("result");        
    }

    async invalidtSearch() {
        const toast = this.page.locator(this.Elements.results);
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText("There are no EA records which meet your search criteria. Please refine your query.");        
    }
}

