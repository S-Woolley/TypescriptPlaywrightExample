import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage{
  private userNameField: Locator;
  private passwordField:Locator;
  private errorLabel: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameField =  this.page.locator("data-test=username");
    this.passwordField = this.page.locator("data-test=password");
    this.loginButton = this.page.locator("data-test=login-button");
    this.errorLabel = this.page.locator("data-test=error");
  }

  async navigateToPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async enterUserName(username: string) {
    await this.userNameField.type(username);
  }

  async enterPassword(password: string) {
    await this.passwordField.type(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async isErrorLabelDisplayed() {
    return await this.errorLabel.isVisible();
  }

  async getErrorLabelText() {
    return await this.errorLabel.textContent();
  }
}