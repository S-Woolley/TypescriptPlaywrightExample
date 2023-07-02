import { Locator, Page } from '@playwright/test';
import { AuthenticatedPage } from './authenticatedPage';

export class HomePage extends AuthenticatedPage{
    constructor(page : Page) {
        super(page);
    }
}