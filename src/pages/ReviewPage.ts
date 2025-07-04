import { Page } from '@playwright/test'

export class ReviewPage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    private agreementCheck = () => this.page.getByRole('checkbox', { name: 'By clicking this box, I agree' });
    private submitReviewed = () => this.page.getByRole('button', { name: 'Continue' });

    //loan applications
    public pendingScreen = () => this.page.locator('#pending-screen').getByRole('img');

    public async checkAgreeButton() {
        await this.agreementCheck().check();
    }

    public async clickContinue() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 60000 }),
            this.submitReviewed().click()
        ]);
    }

    public getPage(){
         return this.page;
    }
}
//https://apply.caribou.com/loan_applications/3828388/pending