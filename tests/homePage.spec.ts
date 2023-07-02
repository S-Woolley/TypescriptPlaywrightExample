import { test, expect } from '@playwright/test';
import { LoginPage } from '../sauceDemo/loginPage';
import { HomePage } from '../sauceDemo/homePage';

let loginPage, homePage;

test.beforeEach(async ({ page }, testInfo) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToPage();
    await loginPage.enterUserName("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickLoginButton();
    homePage = new HomePage(page);
  });

test('Should return user to the login page after logging out', async ({ page }) => {
    const returnedPage = await homePage.MenuHeader.logout();
    expect(returnedPage.url).toEqual("https://www.saucedemo.com/");
    const loginPageScreenshot = await returnedPage.getScreenshot();
    expect(loginPageScreenshot).toMatchSnapshot();
  });