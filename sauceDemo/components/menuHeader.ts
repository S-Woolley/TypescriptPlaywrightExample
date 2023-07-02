import { Locator, Page } from '@playwright/test';
import { LoginPage } from '../loginPage';

export class MenuHeaderComponent {
    protected readonly page: Page;
    protected menuButton: Locator;
    protected logoutButton: Locator;

    constructor(page : Page) {
        this.page = page;
        this.menuButton = this.page.locator("id=react-burger-menu-btn");
        this.logoutButton = this.page.locator("id=logout_sidebar_link");
    }

    public async logout() {
        await this.menuButton.click();
        await this.logoutButton.click();
        return new LoginPage(this.page);
    }

}