import { Page } from '@playwright/test'
import { ResidenceInfo } from '../models/ResidenceInfo';
import { ReviewPage } from './ReviewPage';

export class ResidenceEmploymentPage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    private street = () => this.page.locator('input[name="address"]');
    private city = () => this.page.getByRole('textbox', { name: 'City' });
    private state = () => this.page.locator('select[name="state"]');
    private zipCode = () => this.page.getByRole('textbox', { name: 'digit zip code' });

    private livedAddressYear = () => this.page.locator('select[name="livedInAddress.years"]');
    private livedAddressMonth = () => this.page.locator('select[name="livedInAddress.months"]');
    private rentOwn = () => this.page.locator('select[name="rentOrOwn"]');
    private mortage = () => this.page.locator('input[name="monthlyPayment"]');
    private employmentStatus = () => this.page.locator('select[name="employmentStatus"]');
    private yearlyIncome = () => this.page.locator('input[name="yearlyIncome"]');
    private submitResidenceForm = () => this.page.getByRole('button', { name: 'Continue' });

    public async fillForm(info: ResidenceInfo) {
        await this.street().fill(info.streetAddress);
        await this.city().fill(info.city);
        await this.state().selectOption(info.state);
        await this.zipCode().fill(info.zipCode);
        await this.livedAddressYear().selectOption(info.yearsLived);
        await this.livedAddressMonth().selectOption(info.monthsLived);
        await this.rentOwn().selectOption(info.rentStatus);
        await this.mortage().fill(info.mortgage);
        await this.employmentStatus().selectOption(info.employmentStatus);
        await this.yearlyIncome().fill(info.yearlyIncome);
       
    }

    public async submitForm(): Promise<ReviewPage> {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 60000 }),
            this.submitResidenceForm().click()
        ]);
        return new ReviewPage(this.page);
    }
}