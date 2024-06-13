import { useState } from 'react'
import Layout from '@/components/global/layout/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SvgIcons } from '@/icons/SvgIconts'
import { countryTempList } from '@/static/coutry-static'

interface ICountryItem{
    title:string
    content?:string
    flagUrl?:string
}
const CountryItem = ({title,content,flagUrl}:ICountryItem)=>(
    <div className='w-6/12 sm:w-4/12 md:w-3/12 mb-2'>
        <h4 className="font-light text-gray-700">{title}</h4>
        {flagUrl?
          <img className='h-4 w-[18px] shrink-0 mr-2' src={flagUrl} alt={flagUrl} />
          :
          <h3 className="font-semibold">{content}</h3>
        } 
    </div>
)

export default function CountryList() {
  const [activeCountry,setActiveCountry] = useState("")




  return (
    <Layout title='Country' content={"Country List"}>
      <div className="card">
        <div className='flex justify-between max-sm:flex-col mt-3 pb-2 border-b'>
          <span className='font-bold text-lg'>View Country</span>
          <div className="flex-center grow rounded-md bg-gray-100 max-sm:mt-3 sm:max-w-[380px]">
            <SvgIcons.BlueSearch className="scale-[75%] shrink-0 relative left-2"/>
            <Input placeholder='Search' className=" rounded-r-none border-none focus-visible:border-none focus:border-none w-full bg-transparent md:max-w-[400px]"/>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="font-semibold text-base pl-2">Country Listed</h3>
          {countryTempList.map((item,key)=>{
            const isActive = item.countryName === activeCountry
            return(
              <div  key={key} className={`pb-3 transition-all duration-300 overflow-hidden border shdow-md border-main mb-4 rounded-2xl px-2 sm:px-3 
                ${isActive?"max-h-96 overflow-scroll default-scroll":"max-h-10"}`}>
                <div className="flex-center justify-between">
                  <div className='flex-center'>
                    <img className='h-4 w-[18px] shrink-0 mr-2' src={item.flag} alt={item.flag} />
                    <span>{item.countryName}</span>
                  </div> 
                  <Button 
                  onClick={()=>{
                    setActiveCountry((prev)=>prev === item.countryName?"":item.countryName)}
                  }
                  className={`transition-all hover:bg-transparent group duration-200 ${isActive?"-rotate-[90deg]":""}`} variant={"ghost"} size={"icon"}>
                    <SvgIcons.BlueDropDown
                    className='group-hover:scale-[130%] transition-all duration-300'
                      />
                  </Button>
                </div>
                <div className='flex-center flex-wrap'>
                    <CountryItem  title='Country Name' content={item.countryName}/>
                    <CountryItem  title='Continent' content={item.continent}/>
                    <CountryItem  title='Country Flag' flagUrl={item.flag}/>
                    <CountryItem  title='Created By' content={item.createdAt}/>
                    <CountryItem  title='Edited On' content={item.editedAt}/>
                    <CountryItem  title='Edited By' content={item.editedBy}/>
                    <CountryItem  title='Created On' content={item.createdAt}/>
                  </div>
                  <h3 className="mt-2 font-light">Additional Note</h3>
                  <p className="my-0.5">{item.additionalNote}</p>
                <div className="mt-5 flex-center justify-between w-full max-w-[200px]">
                  <Button className='shadow-sm px-12 mr-4 rounded-lg'>Edit</Button>
                  <Button variant={"outline"} className='shadow-sm px-10 rounded-lg'>Delete</Button>
                </div>
            </div>)
        })}
        </div>
      </div> 
    </Layout>
  )
}
