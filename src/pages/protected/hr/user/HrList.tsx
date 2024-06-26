import DropDownItem from '@/components/global/DropDownItem'
import Layout from '@/components/global/layout/Layout'
import FormFilter from '@/components/hr/FormFilter'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { SvgIcons } from '@/icons/SvgIconts'
import { usersTempList } from '@/static/hr-static'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function HrList() {
  const [activeCountry,setActiveCountry] = useState<string[]>([])

  const handleClick=(countryName:string)=>{
    if(activeCountry.includes(countryName)){
      const filteredList = activeCountry.filter((item)=>item !== countryName)
      setActiveCountry(filteredList)
    }
    else{setActiveCountry((item)=>[...item,countryName])}
  }

  return (
    <Layout title='Human Resources' content='Hello Helen, Welcome to JustRecruit'>
    <div className="card">
      <FormFilter/>
      <div className="pt-4">
          <h3 className="font-semibold text-base pl-2">User Listed</h3>
          {usersTempList.map((item,key)=>{
            const isActive = activeCountry.includes(item.fullName)
            return(
              <div  key={key} className={`pb-3 transition-all duration-300 overflow-hidden border shadow-md border-main mb-4 rounded-2xl px-2 sm:px-3 
                ${isActive?"max-h-[680px] overflow-scroll default-scroll":"max-h-10"}`}>
                <div className="flex-center justify-between">
                  <div className=" sm:w-[40%] flex-center">
                     <img className='w-8 rounded-full h-8 shrink-0 mr-2' src={item.icon} alt={item.icon} />
                     <span>{item.fullName}</span>
                  </div>
                  <div className="grow flex-center justify-end sm:justify-between">
                    <span className='font-light max-sm:hidden w-[30%] text-gray-700'>{item.role}</span>
                    <span className='max-sm:hidden font-light text-gray-700'>{item.status}</span>
                    <Button 
                      onClick={()=>{handleClick(item.fullName)}}
                      className={`transition-all hover:bg-transparent group duration-200 ${isActive?"-rotate-[90deg]":""}`} variant={"ghost"} size={"icon"}>
                      <SvgIcons.BlueDropDown
                    className='group-hover:scale-[130%] transition-all duration-300'
                      />
                  </Button>
                  </div>
                </div>
                <div className='flex-center flex-wrap'>
                    <DropDownItem  title='full Name' content={item.fullName}/>
                    <DropDownItem  title='Phone Number' content={item.phoneNumber}/>
                    <DropDownItem  title='Date of Birth' content={item.DateOfBirth}/>
                    <DropDownItem  title='Gender' content={item.gender}/>
                    <DropDownItem  title='Email Address' content={item.emailAddress}/>
                    <DropDownItem  title='Marital status' content={item.maritalStatus}/>
                    <DropDownItem  title='Role' content={item.role}/>
                    <DropDownItem  title='Team Leader' content={"_ _ _ _ _ _"}/>
                    <DropDownItem  title='Created By' content={item.editedBy}/>
                    <DropDownItem  title='Created On' content={item.createdAt}/>
                    <DropDownItem  title='Edited By' content={item.editedBy}/>
                    <DropDownItem  title='Edited On' content={item.createdAt}/>
                    <DropDownItem  title='Nationality' content={item.Nationality}/>
                    <DropDownItem  title='State' content={item.state}/>
                    <DropDownItem  title='City' content={item.city}/>
                    <DropDownItem  title='Status' content={item.status}/>
                  </div>
                  <div className="flex w-full max-md:flex-col max-md:items-center">
                    <div className="grow max-md:mb-3">
                      <h3 className="mt-2 font-light">Address</h3>
                      <p className="my-0.5">{item.address}</p>
                    </div>
                    <Avatar className='h-44 w-44 max-md:mx-auto'>
                      <AvatarFallback>JH</AvatarFallback>
                      <AvatarImage src={item.icon}/>
                    </Avatar>
                  </div>
                  <div className="mt-5 max-md:justify-center grow flex-center max-sm:mx-auto md:justify-between w-full md:max-w-[200px] max-md:grow">
                  <Link to="/admin/hr/edit/123">
                      <Button className='shadow-sm px-12 mr-4 rounded-lg'>Edit</Button>
                  </Link>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant={"outline"} className='shadow-sm px-10 rounded-lg'>Delete</Button>
                    </AlertDialogTrigger>   
                    <AlertDialogContent className='border border-main py-10 px-3 sm:px-8'>
                      <p className="text-lg font-semibold">
                          The details will be permanently deleted from the database.
                          <br/>
                          Are you sure you want to delete? 
                      </p>
                      <div className="flex mt-8 max-sm:justify-between sm:justify-end ">
                        <AlertDialogCancel asChild className='overflow-hidden'>
                          <Button className='px-12 sm:mr-6 bg-main hover:bg-main hover:text-white hover:brightness-110 rounded-3xl'>No</Button>
                        </AlertDialogCancel>
                        <AlertDialogAction asChild>
                          <Button className='px-12 rounded-3xl hover:bg-accent text-main bg-white border' variant={"outline"}>Yes</Button>
                        </AlertDialogAction>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
            </div>)
        })}
        </div>
    </div>
  </Layout>
  )
}
