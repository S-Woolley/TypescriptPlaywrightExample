import { test, expect } from '@playwright/test';

test('shows valid error message when no user name or password is entered', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByText("Login").click();
    const errorLabel = page.getByTestId("error");

    await expect(errorLabel).toBeVisible();
    await expect(errorLabel).toHaveText("Epic sadface: Username is required");
    await expect(errorLabel).toHaveScreenshot();
  });