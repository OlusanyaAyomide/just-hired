import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthLayout from '@/components/auth/AuthLayout';
import InputField from '@/components/global/InputField';
import { Button } from '@/components/ui/button';
import { INewPassword, InputType } from '@/interfaces/authInterface';
import { AuthStatic } from '@/static/authStatic';
import { newPasswordSchema } from '@/validations/authValidations';
import { useState } from 'react';


export default function NewPassword() {

    const {register, handleSubmit,formState: { errors }} = useForm<INewPassword>(
        { resolver: yupResolver(newPasswordSchema) },
    );
    
    const onSubmit: SubmitHandler<INewPassword> = (data) => {
        console.log(data)
    };

    const [passwordType, setPasswordType] = useState<InputType>('password');
    const [passwordConfirmType, setPasswordConfirmType] = useState<InputType>('password');

    return (
    <AuthLayout 
        title={AuthStatic.newPassword.title}
        tiltleHeading={AuthStatic.newPassword.titleHeading}
        image='/auth/newpassword.png'
        align="center"
        style='aspect-[2/2.5] max-w-[350px] relative top-12'
    >
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
                title='Password'
                className='rounded-2xl border-main'
                register={register}
                fieldName="oldPassword"
                type={passwordType}
                showPasswordToggle
                onpaswordToggle={() => {
                    setPasswordType((prev) => (prev === 'password' ? 'text' : 'password'));
                }}
                placeholder='• • • • •'
                error={errors.oldPassword?.message}
            />

            <InputField
                title='Confirm Password'
                className='rounded-2xl border-main'
                register={register}
                fieldName="newPassword"
                showPasswordToggle
                type={passwordConfirmType}
                onpaswordToggle={() => {
                  setPasswordConfirmType((prev) => (prev === 'password' ? 'text' : 'password'));
                }}
                placeholder='• • • • •'
                error={errors.newPassword?.message}
            />

            <Button className='w-full block mt-12' size="lg">Reset Password</Button>

        </form>    
    </AuthLayout>
  )
}
