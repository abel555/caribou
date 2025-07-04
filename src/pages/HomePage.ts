import { Page } from '@playwright/test'
import { PersonalInfoPage } from './PersonalInfoPage'
import { LoginPage } from './LoginPage';
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

    public async goto(url: string){
        await this.page.goto(url)
        await this.page.waitForLoadState('domcontentloaded');
    }

    public async navigateToLogin(): Promise<LoginPage> {
         await Promise.all([
            this.page.waitForURL('https://dashboard.caribou.com/', { timeout: 30000 }),
            this.loginBtn().click()
        ]);
        return new LoginPage(this.page);
    }

    public async clickGetStarted(): Promise<PersonalInfoPage> {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 60000 }),
            this.getStartedBtn().click()
        ]);
        return new PersonalInfoPage(this.page);
    }

    public async clickCheckRate(): Promise<PersonalInfoPage> {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 60000 }),
            this.checkRateBtn().click()
        ]);
        return new PersonalInfoPage(this.page);
    }

    public async clickSeeSavings(): Promise<PersonalInfoPage> {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 60000 }),
            this.seeSavingsBtn().click()
        ]);
        return new PersonalInfoPage(this.page);
    }

    public async clickHowItWorks(): Promise<void> {
        await this.howItWorksBtn().click();
    }


}