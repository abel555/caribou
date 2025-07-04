import { Page, test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/homePage';
import { PersonalInfoPage } from '../src/pages/PersonalInfoPage';
import { getDefaultPersonalInfo } from '../src/models/PersonalInfo';
import { VehicleInfoPage } from '../src/pages/VehicleInfoPage';
import { getDefaultVehicleInfo } from '../src/models/VehicleInfo';
import { ResidenceEmploymentPage } from '../src/pages/ResidenceEmploymentPage';
import { getDefaultResidenceInfo } from '../src/models/ResidenceInfo';
import { ReviewPage } from '../src/pages/ReviewPage';


test.describe('Regression test suite', async ()=> {
	let homePage: HomePage;

	test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto('/');
  });

  test('Login button should redirect to login page', async ()=>{	
  	const loginPage = await homePage.navigateToLogin();
    await expect(loginPage.pageHeader()).toBeVisible();
  });

  test('Get started should load personal info form', async () => {
    const personalInfoPage: PersonalInfoPage = await homePage.clickGetStarted();
    await expect(personalInfoPage.pageTitle()).toBeVisible();
  });

  test('Check rate button should load personal info form', async () => {
    const personalInfoPage: PersonalInfoPage = await homePage.clickCheckRate();
    await expect(personalInfoPage.pageTitle()).toBeVisible();
  });

  test('See savings button should load personal info form', async () => {
    const personalInfoPage: PersonalInfoPage = await homePage.clickGetStarted();
    await expect(personalInfoPage.pageTitle()).toBeVisible();
  });

  test('User should be able to complete all the loan forms', async() => {
  	const personalInfo = getDefaultPersonalInfo();
  	const vehicleInfo = getDefaultVehicleInfo();
  	const residenceInfo = getDefaultResidenceInfo();

  	const personalInfoPage = await homePage.clickGetStarted();
  	await personalInfoPage.fillPersonalInfo(personalInfo);

  	const vehiclePage = await personalInfoPage.clickContinue();
  	await vehiclePage.fillVehicleInformation(vehicleInfo);

  	const residencePage = await vehiclePage.submitVehicleInfo();
  	await residencePage.fillForm(residenceInfo);

  	const reviewPage = await residencePage.submitForm();
  	await reviewPage.checkAgreeButton();
  	await reviewPage.clickContinue();

  	await expect(reviewPage.getPage()).toHaveURL(/.*no-loan-options.*/);
  });
  
});
