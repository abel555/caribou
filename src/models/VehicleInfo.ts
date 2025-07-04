
export interface VehicleInfo {
    vin: string;
    loan: string;
    miles: string;
    monthlyPay?: string;
}

export function getDefaultVehicleInfo(): VehicleInfo {
  return {
    vin: "1HGCM82633A004352",
    loan: "80000",
    miles: "50000"  
  };
}