import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import AuthLayout from '@/components/auth/AuthLayout';
import InputField from '@/components/global/InputField';
import { Button } from '@/components/ui/button';
import { IResetpassword } from '@/interfaces/authInterface';
import { AuthStatic } from '@/static/authStatic';
import { resetPasswordSchema } from '@/validations/authValidations';
import { yupResolver } from '@hookform/resolvers/yup';


export default function ForgotPassword() {

    const {register, handleSubmit,formState: { errors }} = useForm<IResetpassword>(
        { resolver: yupResolver(resetPasswordSchema) },
    );
    
    const onSubmit: SubmitHandler<IResetpassword> = (data) => {
        console.log(data)
    };

    return (
    <AuthLayout 
        title={AuthStatic.forgotPassword.title}
        tiltleHeading={AuthStatic.forgotPassword.titleHeading}
        image='/auth/forgot-password.png'
        align="bottom"
        style='aspect-[8/7]'
    >
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
                title='Email'
                className='rounded-2xl border-main'
                register={register}
                fieldName="email"
                type='email'
                placeholder='deniel123@gmail.com'
                error={errors.email?.message}
            />

            <Button className='w-full block mt-8' size="lg">Sign In</Button>

            <Link to={"/login"}>
                <Button size="lg" variant="outline" className='block mt-6 mx-auto px-12'>
                    Login
                </Button>
            </Link>
        </form>    
    </AuthLayout>
  )
}
