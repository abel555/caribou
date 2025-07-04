import { Page } from '@playwright/test'
import { PersonalInfo } from '../models/PersonalInfo';
import { VehicleInfoPage } from './VehicleInfoPage';

export class PersonalInfoPage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }
    public pageTitle = () => this.page.getByRole('heading', { name: 'Share a bit about yourself' });
    private name = () => this.page.getByTestId('firstName');
    private lastName = () => this.page.getByTestId('lastName');
    private email = () => this.page.getByTestId('emailAddress');
    private confirmEmail = () => this.page.getByTestId('confirmEmailAddress');
    private birthDate = () => this.page.getByTestId('birthdate');
    private citizenStatus = () => this.page.getByTestId('citizenship');
    private cellPhone = () => this.page.getByTestId('cellPhone');
    private continueBtn = () => this.page.getByTestId('personal-info-submit');
    public errorMessage = () => this.page.getByText('This field is required');

    public async fillName(name: string) {
        await this.name().fill(name);
    }

    public async fillLastName(lastName: string) {
        await this.lastName().fill(lastName);
    }

    public async fillEmail(email: string) {
        await this.email().fill(email);
    }

    public async fillConfirmEmail(email: string) {
        await this.confirmEmail().fill(email);
    }

    async fillBirthDate(value: string) {
        await this.birthDate().fill(value);
    }

    public async fillCitizenStatus(status: string) {
        await this.citizenStatus().selectOption(status);
    }

    public async fillCellPhone(phone: string) {
        await this.cellPhone().fill(phone);
    }

    public async fillPersonalInfo(info: PersonalInfo) {
        await this.name().fill(info.name);
        await this.lastName().fill(info.lastName);
        await this.email().fill(info.email);
        await this.confirmEmail().fill(info.confirmEmail);
        await this.birthDate().fill(info.birthDate);
        await this.citizenStatus().selectOption(info.citizenStatus);
        await this.cellPhone().fill(info.cellPhone);
    }
    //https://new.apply.caribou.com/vehicle-info
    public async clickContinue(): Promise<VehicleInfoPage> {
        await Promise.all([
            this.page.waitForURL('**/vehicle-info', { timeout: 10000 }),
            this.continueBtn().click()
        ]);
        return new VehicleInfoPage(this.page);
    }


}