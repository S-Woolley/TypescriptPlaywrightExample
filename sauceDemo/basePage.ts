import { Locator, Page } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;

    constructor(page : Page) {
        this.page = page;
    }

    get url(): string {
        return this.page.url();
    }

    async getScreenshot() {
        return await this.page.screenshot();
    }
}