import { Locator, Page } from '@playwright/test';
import { LoginPage } from './loginPage';
import { MenuHeaderComponent } from './components/menuHeader';
import { BasePage } from './basePage';

export class AuthenticatedPage extends BasePage {
    public MenuHeader: MenuHeaderComponent;

    constructor(page : Page) {
        super(page);
        this.MenuHeader = new MenuHeaderComponent(page);
    }
}