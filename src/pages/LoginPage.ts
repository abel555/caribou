import { Page } from '@playwright/test'

export class LoginPage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    private pageHeader = () => this.page.getByText('Welcome back!');
    private emailInput = () => this.page.locator('#email');
    private continueBtn = () => this.page.locator('#submit-email');

    public fillEmailAdress(email: string) {
        this.emailInput().fill(email);
    }

    public clickContinue() {
        this.continueBtn().click();
    }
}