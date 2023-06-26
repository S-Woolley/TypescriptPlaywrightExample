import { test, expect } from '@playwright/test';
import { LoginPage } from '../sauceDemo/loginPage'

test('should not show error label when first loaded', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToPage();
  let isDisplayed = await loginPage.isErrorLabelDisplayed();
  expect(isDisplayed).toBeFalsy();
});

test('shows valid error message when no user name or password is entered', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToPage();
  await loginPage.clickLoginButton();
  let isDisplayed = await loginPage.isErrorLabelDisplayed();
  let errorText = await loginPage.getErrorLabelText();
  expect(isDisplayed).toBeTruthy();
  expect(errorText).toEqual("Epic sadface: Username is required");
});

test('shows valid error message when no password is entered', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToPage();
  await loginPage.enterUserName("standard_user");
  await loginPage.clickLoginButton();
  let isDisplayed = await loginPage.isErrorLabelDisplayed();
  let errorText = await loginPage.getErrorLabelText();
  expect(isDisplayed).toBeTruthy();
  expect(errorText).toEqual("Epic sadface: Password is required");
});

test('shows valid error message when incorrect password is entered', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToPage();
  await loginPage.enterUserName("standard_user");
  await loginPage.enterPassword("I'm  Wrong")
  await loginPage.clickLoginButton();
  let isDisplayed = await loginPage.isErrorLabelDisplayed();
  let errorText = await loginPage.getErrorLabelText();
  expect(isDisplayed).toBeTruthy();
  expect(errorText).toEqual("Epic sadface: Username and password do not match any user in this service");
});

test('will take user to the home page when valid username and password is provided', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToPage();
  await loginPage.enterUserName("standard_user");
  await loginPage.enterPassword("secret_sauce");
  await loginPage.clickLoginButton();
});