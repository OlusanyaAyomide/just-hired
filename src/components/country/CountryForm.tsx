import InputArea from '@/components/global/InputArea';
import InputField from '@/components/global/InputField';
import { Button } from '@/components/ui/button';
import { SvgIcons } from '@/icons/SvgIconts';
import { IAddCountryForm } from '@/interfaces/countryinterface';
import { addCountrySchema } from '@/validations/countryValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function CountryForm({defaultValues}:{defaultValues?:IAddCountryForm}) {

  const {register,setValue,handleSubmit,formState: { errors }} = useForm<IAddCountryForm>(
    { resolver: yupResolver(addCountrySchema),defaultValues },
  );
  const [file,setFile] = useState<File | null>(null)
  const [url,setUrl] = useState(defaultValues?.flag || "")

  const ref = useRef<HTMLInputElement>(null)

  const onSubmit: SubmitHandler<IAddCountryForm> = (data) => {
      console.log(data,file?.size)
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
      const file = e.target.files && e.target.files[0];
      if(!file){return}

      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend=()=>{
          const imageData = reader.result as string
          setUrl(imageData)
          setFile(file)
          setValue("flag",imageData)
      }
  }   
  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="mt-3 flex flex-wrap flex-col 2xl:flex-row">
    <div className='grow max-w-[600px]'>
        <InputField
            title='Country Name'
            required
            register={register}
            fieldName="countryName"
            placeholder='Enter the name of the country'
            error={errors.countryName?.message}
        />
        <InputField
            title='Continent'
            required
            register={register}
            fieldName="continent"
            placeholder='Enter Continet of the countey'
            error={errors.countryName?.message}
        />
        <InputArea
            title='Additional Notes'
            register={register}
            fieldName="additionalNote"
            placeholder='Enter Continent of the country'
            error={errors.continent?.message}
        />
    </div>
    <div className="w-[300px] 2xl:pl-4 relative">
            <h3 className='my-1 pl-1 text-shade font-medium'>
                 <span>Country Flag</span>
                 <span className='text-red-500 text-lg ml-2'>*</span>
            </h3>
            <input  className='hidden' accept="image/*" onChange={handleUpload} ref={ref} type="file"/>
            {(url)?
                <>
                    <div className='w-[250px] h-[200px]'>
                        <img src={url} alt="uploaded-image"  className='object-cover h-full w-full'/>
                    </div>
                    <Button variant={"outline"} type='button' onClick={()=>ref.current?.click()} className='px-6 mt-3 h-8'>
                        <span>change file</span>
                    </Button>
                </>
                :
                <div className="border-2 w-[250px] border-main border-dashed h-[200px] py-10 rounded-md flex flex-col justify-between">
                    <SvgIcons.Upload className='block w-fit mx-auto'/>
                    <Button type='button' onClick={()=>ref.current?.click()} className='px-6 flex mx-auto h-8'>
                        <span>Select file</span>
                    </Button>
                </div>      
                }
            {errors.flag ? <span className="text-red-500 absolute -bottom-5 whitespace-nowrap left-2 text-[13px]">{errors.flag.message}</span>:null}
        </div>
        <div className="w-full mt-8">
            <Button size={"lg"} className='flex px-10 2xl:ml-auto'>
                <span>{defaultValues?"Edit":"Save"} Country</span>
            </Button>
        </div>

    </form>
  )
}
