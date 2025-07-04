
export interface PersonalInfo {
    name: string;
    lastName: string;
    email: string;
    confirmEmail: string;
    birthDate: string;
    citizenStatus: string;
    cellPhone: string;
}

export function getDefaultPersonalInfo(): PersonalInfo {
    let uniqueEmail = `bradHawley${Date.now()}@hotmail.com`;
  return {
    name: 'Brad',
    lastName: 'Hawley',
    email: uniqueEmail,
    confirmEmail: uniqueEmail,
    birthDate: "07/02/1989",
    citizenStatus: 'US_CITIZEN',
    cellPhone: '59173472921'  
  };
}