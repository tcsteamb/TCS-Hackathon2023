import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class basicSearchPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        isinInput: "input[name='ISIN_Code']",
        SearchButton: "button[id='midEASearchSubmit']",
        errorMessage: "alert"
    }

    async navigateToSearchIsinPage() {
        await expect(this.page).toHaveTitle("Query eligible assets (daily data)");
    }
    async enterUserName(ISIN: string) {
        await this.page.getByLabel(this.Elements.isinInput).fill(ISIN);
    }

    async clickSearchButton() {
        await this.base.waitAndClick(this.Elements.SearchButton);
    }

    getErrorMessage() {
        return this.page.getByRole("alert");
    }

}