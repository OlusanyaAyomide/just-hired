import { useState } from 'react'
import Layout from '@/components/global/layout/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SvgIcons } from '@/icons/SvgIconts'
import { educationTempList } from '@/static/education-static'
import { Link } from 'react-router-dom'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import DropDownItem from '@/components/global/DropDownItem'


export default function EducationList() {
  const [activeCountry,setActiveCountry] = useState<string[]>([])

  const handleClick=(countryName:string)=>{
    if(activeCountry.includes(countryName)){
      const filteredList = activeCountry.filter((item)=>item !== countryName)
      setActiveCountry(filteredList)
    }
    else{setActiveCountry((item)=>[...item,countryName])}
  }

  return (
    <Layout title='Country' content="Hello Hellen , Welcome to pronext">
      <div className="card">
        <div className='flex justify-between max-sm:flex-col mt-3 pb-2 border-b'>
          <span className='font-bold text-lg'>View Education</span>
          <div className="flex-center grow rounded-md bg-gray-100 max-sm:mt-3 sm:max-w-[380px]">
            <SvgIcons.BlueSearch className="scale-[75%] shrink-0 relative left-2"/>
            <Input placeholder='Search' className=" rounded-r-none border-none focus-visible:border-none focus:border-none w-full bg-transparent md:max-w-[400px]"/>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="font-semibold text-base pl-2">Education Listed</h3>
          {educationTempList.map((item,key)=>{
            const isActive = activeCountry.includes(item.educationLevel)
            return(
              <div  key={key} className={`pb-3 transition-all duration-300 overflow-hidden border shadow-md border-main mb-4 rounded-2xl px-2 sm:px-3 
                ${isActive?"max-h-96 overflow-scroll default-scroll":"max-h-10"}`}>
                <div className="flex-center justify-between">
                    <span>{item.educationLevel}</span>
                  <Button 
                  onClick={()=>{handleClick(item.educationLevel)}}
                  className={`transition-all hover:bg-transparent group duration-200 ${isActive?"-rotate-[90deg]":""}`} variant={"ghost"} size={"icon"}>
                    <SvgIcons.BlueDropDown
                    className='group-hover:scale-[130%] transition-all duration-300'
                      />
                  </Button>
                </div>
                <div className='flex-center flex-wrap'>
                    <DropDownItem  title='Name' content={item.educationLevel}/>
                    <DropDownItem  title='Value Number' content={item.valueNumber.toString()}/>
                    <DropDownItem  title='Created By' content={item.editedBy}/>
                    <DropDownItem  title='Created On' content={item.createdAt}/>
                    <DropDownItem  title='Edited By' content={item.editedBy}/>
                    <DropDownItem  title='Edited On' content={item.createdAt}/>
                  </div>
                <div className="mt-5 flex-center justify-between w-full max-w-[200px]">
                  <Link to="/admin/education/edit/123">
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
