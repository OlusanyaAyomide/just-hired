export interface IAddNewuser {
    firstName: string;
    middleName?: string;
    lastName: string;
    phoneNumber: string;
    dateOfBirth: Date;
    gender: string;
    maritalStatus: string;
    emailAddress: string;
    city: string;
    state: string;
    nationality: string;
    detailAddress: string;
    role: string;
    teamLeader?: string;
    status: string;
}