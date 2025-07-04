import { Page, test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/homePage';
import { PersonalInfoPage } from '../src/pages/PersonalInfoPage';
import { getDefaultPersonalInfo } from '../src/models/PersonalInfo';

test.describe('Personal information form test suite', async ()=> {
  let homePage: HomePage;
  let personalInfoPage: PersonalInfoPage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto('/');
    personalInfoPage = await homePage.clickGetStarted();
  });

  test('should show an error message if name is empty', async ({page}) => {
    const dataMissingName = {
      ...getDefaultPersonalInfo(),
      name: '',
    };
    await personalInfoPage.fillPersonalInfo(dataMissingName);

    expect(personalInfoPage.errorMessage()).toBeVisible();
  });

  test('should show an error message if email is empty', async ({page}) => {
    const dataMissingName = {
      ...getDefaultPersonalInfo(),
      email: '',
    };
    await personalInfoPage.fillPersonalInfo(dataMissingName);

    expect(personalInfoPage.errorMessage()).toBeVisible();
  });



});