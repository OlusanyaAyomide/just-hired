export interface IDynamicForm{
    name:boolean
    fullName:boolean
    email:boolean
    phoneNumber:boolean
    dateOfBirth:boolean
    maritalStatus:boolean
    currentLocation:boolean
    gender:boolean
    city:boolean
    educationalQualification:boolean
    experience:boolean
    qualifications:boolean
    resume:boolean
}

export interface DynamicSelectFields{
    qualifications:string[]
    gender:string[]
    maritalStatus:string[]

}

export const DynamicSelectDefault:DynamicSelectFields = {
    qualifications:[],
    gender:[],
    maritalStatus:[]
}

export const DynamicDefault:IDynamicForm={
    name:false,
    fullName:false,
    email:false,
    phoneNumber:false,
    dateOfBirth:false,
    maritalStatus:false,
    currentLocation:false,
    gender:false,
    city:false,
    educationalQualification:false,
    experience:false,
    resume:false,
    qualifications:false
}

export const DynamicFormDefault:DynamicSelectFields = {
    qualifications:["WFH","Healthcare","Candidate","WOS","Insurance"],
    gender:["Male","Female","Prefer not to say"],
    maritalStatus:["Single","Married","Divorced"]
}