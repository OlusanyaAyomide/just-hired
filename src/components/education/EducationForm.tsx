import InputField from '@/components/global/InputField';
import { Button } from '@/components/ui/button';
import { IAddEducationInterface } from '@/interfaces/educationInterface';
import { addEducationSchema } from '@/validations/educationValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function EducationForm({defaultValues}:{defaultValues?:IAddEducationInterface}) {

  const {register,handleSubmit,formState: { errors }} = useForm<IAddEducationInterface>(
    { resolver: yupResolver(addEducationSchema),defaultValues },
  );

  const onSubmit: SubmitHandler<IAddEducationInterface> = (data) => {
    console.log(data)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="mt-3 max-w-[600px]">
        <div className='grow max-w-[600px]'>
            <InputField
                title='Name'
                required
                register={register}
                fieldName="name"
                placeholder='Enter the name of the certification'
                error={errors.name?.message}
            />
            <InputField
                title='value Number'
                extraLabel='(Ranking value from the least to the highest)'
                required
                register={register}
                fieldName="valueNumber"
                placeholder='Enter the value number of the education'
                error={errors.valueNumber?.message}
            />
        </div>
        <div className="w-full mt-8 flex justify-end">
            <Button size={"lg"} className='flex px-10'>
                <span>Save Education</span>
            </Button>
        </div>
    </form>
  )
}
