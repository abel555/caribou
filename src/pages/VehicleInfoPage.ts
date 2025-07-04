import { Page } from '@playwright/test'
import { VehicleInfo } from '../models/VehicleInfo';
import { ResidenceEmploymentPage } from './ResidenceEmploymentPage';

export class VehicleInfoPage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    private vehicleVin = () => this.page.getByRole('radio', { name: 'VIN' });
    private vehicleLicense = () => this.page.getByRole('radio', { name: 'License Plate' });
    private vehicleModel = () => this.page.getByRole('radio', { name: 'Make/Model' });

    private vinNumber = () => this.page.getByTestId('input-vin');
    private vehicleloan = () => this.page.getByTestId('input-loan-value');
    private vehicleMiles = () => this.page.getByTestId('input-estimated-mileage');
    private monthlyPayment = () => this.page.getByTestId('input-estimated-monthly-payment');

    private submitVehicleForm = () => this.page.getByTestId('vehicle-info-submit');

    public async fillVehicleInformation(vehicle: VehicleInfo) {
        await this.vehicleVin().check();
        await this.vinNumber().fill(vehicle.vin);
        await this.vehicleloan().fill(vehicle.loan);
        await this.vehicleMiles().fill(vehicle.miles);
    }

    public async submitVehicleInfo(): Promise<ResidenceEmploymentPage> {
        await Promise.all([
            this.page.waitForURL('**/residence-and-employment', { timeout: 10000 }),
            this.submitVehicleForm().click()
        ]);
        return new ResidenceEmploymentPage(this.page);
       
    }

    //TO DO: methods to fill individual fields to test negative scenarios for each one
}