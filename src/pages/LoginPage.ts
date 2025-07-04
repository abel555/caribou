import { Page } from '@playwright/test'

export class LoginPage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public pageHeader = () => this.page.getByText('Welcome back!');
    private emailInput = () => this.page.locator('#email');
    private continueBtn = () => this.page.locator('#submit-email');

    public async fillEmailAdress(email: string) {
        await this.emailInput().fill(email);
    }

    public async clickContinue() {
        await this.continueBtn().click();
    }
}