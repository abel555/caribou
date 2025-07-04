import { Page, test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/homePage';
import { PersonalInfoPage } from '../src/pages/PersonalInfoPage';
import { getDefaultPersonalInfo, PersonalInfo } from '../src/models/PersonalInfo';

test.describe('Personal information required field validations', () => {
  let personalInfoPage: PersonalInfoPage;

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto('/');
    personalInfoPage = await homePage.clickGetStarted();
  });

  const requiredFields: Array<keyof PersonalInfo> = [
    'name',
    'lastName',
    'email',
    'confirmEmail',
    'birthDate',
    'cellPhone',
  ];

  for (const field of requiredFields) {
    test(`should show an error when "${field}" is empty`, async () => {
      const data = { ...getDefaultPersonalInfo(), [field]: '' };
      await personalInfoPage.fillPersonalInfo(data);

      await expect(personalInfoPage.errorMessage()).toBeVisible();
    });
  }
});