import { expect, type Locator, type Page } from '@playwright/test';

export class ControlCenterPage {
    readonly page: Page;
    readonly controlCenterPage: Locator;


    constructor(page: Page) {
        this.page = page

        this.controlCenterPage = page.locator("//H2[@_ngcontent-serverapp-c337=''][text()='Journey To Profit']");

}
}