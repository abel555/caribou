
export interface ResidenceInfo {
    streetAddress: string;
    apartmentNumber?: string;
    city: string;
    state: string;
    zipCode: string;
    yearsLived: string;
    monthsLived: string;
    rentStatus: string;
    mortgage: string;
    employmentStatus: string;
    yearlyIncome: string;
}

export function getDefaultResidenceInfo(): ResidenceInfo {
  return {
    streetAddress: '1234 Maple Avenue',
    apartmentNumber: '5B',
    city: 'Springfield',
    state: 'Illinois',
    zipCode: '62704',
    yearsLived: '3',
    monthsLived: '6',
    rentStatus: 'Own', 
    mortgage: '0', 
    employmentStatus: 'Employed', 
    yearlyIncome: '85000'
  };
}