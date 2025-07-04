import { test, expect } from '@playwright/test';

test.describe('caribou regression', async ()=> {
  test('Should redirect to info page', async ({page})=>{
    await page.goto('https://caribou.com/');
    await page.locator(".login").click();
    await page.waitForLoadState();

    const submitButton = page.locator("#submit-email");
    expect(page.url().includes('https://login.caribou.com/login')).toBeTruthy();
    await expect(submitButton).toBeVisible();
  });
});
