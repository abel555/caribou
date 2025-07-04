import { Page } from '@playwright/test'

export class HomePage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    private loginBtn = () => this.page.getByRole('link', { name: 'Login' });
    private getStartedBtn = () => this.page.getByRole('link', { name: 'Get started', exact: true });
    private checkRateBtn = () => this.page.getByRole('link', { name: 'Check your rate' });
    private seeSavingsBtn = () => this.page.getByRole('link', { name: 'See your savings' });
    private howItWorksBtn = () => this.page.getByRole('link', { name: 'See how it works' });

    public async clickLogin(): Promise<void> {
        await this.loginBtn().click();
    }

    public async clickGetStarted(): Promise<void> {
        await this.getStartedBtn().click();
    }

    public async clickCheckRate(): Promise<void> {
        await this.checkRateBtn().click();
    }

    public async clickSeeSavings(): Promise<void> {
        await this.seeSavingsBtn().click();
    }

    public async clickHowItWorks(): Promise<void> {
        await this.howItWorksBtn().click();
    }


}