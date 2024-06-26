import DateOfBirthPicker from '@/components/global/DatePicker';
import InputArea from '@/components/global/InputArea';
import InputField from '@/components/global/InputField';
import SelectField from '@/components/global/SelectField';
import { Button } from '@/components/ui/button';
import { IAddNewuser } from '@/interfaces/add-userinterface';
import { adduserSchema } from '@/validations/userValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';


export default function HrForm({defaultValues}:{defaultValues?:IAddNewuser}) {

  const {register,handleSubmit,watch,setValue,formState: { errors }} = useForm<IAddNewuser>(
    { resolver: yupResolver(adduserSchema),defaultValues},
  );
  const [
    dateOfBirth,gender,maritalStatus,role,status,teamLeader
  ] = watch(
    ["dateOfBirth","gender","maritalStatus","role","status","teamLeader"]
  ) 
  const onSubmit: SubmitHandler<IAddNewuser> = (data) => {
    console.log(data)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="mt-3 flex flex-wrap max-w-[900px]">
        <InputField
          register={register}
          title='First Name'
          fieldName="firstName"
          placeholder='Enter user first name'
          containerClassName='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
          required
          error={errors.firstName?.message}
        />
        <InputField
          register={register}
          title='Middle Name'
          fieldName="middleName"
          placeholder='Enter user middle name'
          containerClassName='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
          error={errors.middleName?.message}
        />
        <InputField
          register={register}
          title='Last Name'
          fieldName="lastName"
          placeholder='Enter user last name'
          containerClassName='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
          required
          error={errors.lastName?.message}
        />
        <InputField
          register={register}
          title='Phone Number'
          fieldName="phoneNumber"
          placeholder='Enter phone number of the user'
          containerClassName='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
          required
          error={errors.phoneNumber?.message}
        />
        <DateOfBirthPicker
            selectedDate={dateOfBirth}
            labelText='Date Of Birth'
            className='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
            placeholder='DD/MM/YYYY'
            error={errors.dateOfBirth?.message}
            required
            onDateSelect={(date)=>setValue("dateOfBirth",date)}
        />
        <SelectField
          value={gender}
          onSelect={(value)=>{setValue("gender",value)}}
          labelText='Gender'
          required
          placeholder='Select Gender'
          error={errors.gender?.message}
          options={[{value:"Male",label:"Male"},{value:"Female",label:"Female"}]}
          className='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
        />
          <SelectField
          value={maritalStatus}
          onSelect={(value)=>{setValue("maritalStatus",value)}}
          labelText='Marital Status'
          error={errors.maritalStatus?.message}
          required
          placeholder='Select Marital Status'
          options={[
            {value:"Single",label:"Single"},
            {value:"Married",label:"Married"},
            {value:"Divorced",label:"Divorced"}]}
          className='w-full sm:w-6/12 2xl:w-4/12 xl:mt-2 px-1 sm:px-2'
        />
        <InputField
          register={register}
          title='Email Address'
          fieldName="emailAddress"
          placeholder='Enter user email address'
          containerClassName='w-full sm:w-6/12 px-1 sm:px-2'
          required
          error={errors.emailAddress?.message}
        />
        <InputField
          register={register}
          title='City'
          fieldName="city"
          placeholder='Enter City Name'
          containerClassName='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
          required
          error={errors.emailAddress?.message}
        />
        <InputField
          register={register}
          title='State'
          fieldName="state"
          placeholder='Enter State '
          containerClassName='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
          required
          error={errors.emailAddress?.message}
        />
        <div className="w-full flex flex-wrap">
          <InputField
            register={register}
            title="Nationality"
            fieldName="nationality"
            placeholder='Enter Nationality '
            containerClassName='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
            required
            error={errors.emailAddress?.message}
          />
          <InputArea
            register={register}
            title='Detail Address'
            required
            fieldName="detailAddress"
            error={errors.detailAddress?.message}
            containerClassName='w-full 2xl:w-8/12'
            placeholder='Enter Address in detail e.g 5, smith street '
          />
        </div>
        <div className="flex-center w-full my-6">
            <div className="grow h-[2px] bg-[#747474]"></div>
            <span className="h-2 w-2 rounded-full relative right-[2px] bg-[#747474]"></span>
            <span className='px-1 text-[#747474]'>Administration</span>
            <span className="h-2 w-2  rounded-full relative left-[2px] bg-[#747474]"></span>
            <div className="grow h-[2px] bg-[#747474]"></div>
        </div>
        <div className="pt-4 flex w-full flex-wrap">
          <SelectField
            value={role}
            onSelect={(value)=>{setValue("role",value)}}
            labelText='Role'
            error={errors.role?.message}
            required
            placeholder='Select Role'
            options={[
              {value:"SuperAdmin",label:"SuperAdmin"},
              {value:"Admin",label:"Admin"},
              {value:"OfficeAssistant",label:"Office Assistant"},
              {value:"TeamLeader",label:"Team Leader"},
              {value:"Recruiter",label:"Recruiter"},
              {value:"FullTime",label:"Full Time"},
            ]}
            className='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
          />
          <SelectField
            value={teamLeader}
            onSelect={(value)=>{setValue("teamLeader",value)}}
            labelText='Team Leader'
            error={errors.teamLeader?.message}
            required
            placeholder='Select Team Leader'
            options={[
              {value:"Ajao",label:"Ajao Adekunle"},
              {value:"AkangHelen",label:"Akang Helen"},
              {value:"MaryMary",label:"Mary Mary"},
            ]}
            className='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
          />
        </div>
        <SelectField
            value={status}
            onSelect={(value)=>{setValue("status",value)}}
            labelText='Status'
            error={errors.status?.message}
            required
            placeholder='Select Status'
            options={[
              {value:"Active",label:"Active"},
              {value:"Suspend",label:"Suspended"},
            ]}
            className='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
          />
          <div className="py-5 mt-5 w-full ">
            <Button className='block ml-auto px-8'>{defaultValues?"Edit":"Create"} user</Button>
          </div>
      </form>
  )
}
