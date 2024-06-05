export interface ISignInForm{
    email:string
    password:string
}

export  interface IResetpassword{
    email:string
}

export interface INewPassword{
    oldPassword:string
    newPassword:string
}

export type InputType = "password" | "email" | "text"