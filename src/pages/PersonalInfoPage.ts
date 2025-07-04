import { Page } from '@playwright/test'

export class PersonalInfoPage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    private name = () => this.page.getByTestId('firstName');
    private lastName = () => this.page.getByTestId('lastName');
    private email = () => this.page.getByTestId('emailAddress');
    private confirmEmail = () => this.page.getByTestId('confirmEmailAddress');
    private birthDate = () => this.page.getByTestId('birthdate');
    private citizenStatus = () => this.page.getByTestId('citizenship');
    private cellPhone = () => this.page.getByTestId('cellPhone');
    private continueBtn = () => this.page.getByTestId('personal-info-submit');

    


}