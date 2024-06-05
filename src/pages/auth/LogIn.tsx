import AuthLayout from '@/components/auth/AuthLayout';
import InputField from '@/components/global/InputField';
import { Button } from '@/components/ui/button';
import { ISignInForm, InputType } from '@/interfaces/authInterface';
import { AuthStatic } from '@/static/authStatic';
import { loginSchema } from '@/validations/authValidations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
export default function LogIn() {

    const {register, handleSubmit,formState: { errors }} = useForm<ISignInForm>(
        { resolver: yupResolver(loginSchema) },
    );

    const [passwordType, setPasswordType] = useState<InputType>('password');
    
    const onSubmit: SubmitHandler<ISignInForm> = (data) => {
        console.log(data)
    };

    const [isVisible,setIsVisible] = useState(false)
    return (
    <AuthLayout 
        title={AuthStatic.login.title}
        tiltleHeading={AuthStatic.login.titleHeading}
        image='/auth/login.png'
        align="center"
    >
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
                title='Email'
                className='rounded-2xl border-main'
                register={register}
                fieldName="email"
                placeholder='deniel123@gmail.com'
                type='email'
                error={errors.email?.message}
            />
            <InputField
                title='Password'
                className='rounded-2xl border-main'
                register={register}
                type={passwordType}
                showPasswordToggle
                onpaswordToggle={() => {
                    setPasswordType((prev) => (prev === 'password' ? 'text' : 'password'));
                  }}
                placeholder='• • • • •'
                fieldName="password"
                error={errors.password?.message}
            />

            <div className="flex-center px-2 justify-between">
                <div className='flex-center'>
                    <button type='button' className="h-5 w-5 rounded-full  border p-[2px] bg-white" 
                    onClick={()=>setIsVisible((prev=>!prev))}>
                        <span className={`h-full block cursor-pointer w-full rounded-full ${isVisible?"bg-main":""}`}>
                        </span>
                    </button>
                    <span className='ml-2'>Remember me</span>
                </div>

                <Link to={"/forgot-password"} className="text-main hover:underline font-medium">Forgot Password</Link>
            </div>

            <Button className='w-full block mt-6' size="lg">Sign In</Button>
        </form>    
    </AuthLayout>
  )
}
