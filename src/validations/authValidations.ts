import { INewPassword, IResetpassword, ISignInForm } from "@/interfaces/authInterface";
import * as yup from "yup"


export const loginSchema:yup.ObjectSchema<ISignInForm> = yup.object({
    email: yup.string().email('E-mail must be a valid e-mail').required('E-mail is required'),
    password: yup.string().required('Password is required'),
});

export const resetPasswordSchema:yup.ObjectSchema<IResetpassword> = yup.object({
  email: yup.string().email('E-mail must be a valid e-mail').required('E-mail is required'),

});

export const newPasswordSchema:yup.ObjectSchema<INewPassword> = yup.object({
  oldPassword:yup.string().required('Enter old password'),
  newPassword:yup.string().required('Enter New Password'),
})