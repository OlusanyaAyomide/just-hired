import { Button } from '../ui/button'

export default function DashboardFilter() {

  return (
    <div className='w-full mt-3 padding-x  flex-center flex-wrap'>
        <div className="flex-center border rounded-md border-main mb-2 grow bg-[#D9D9D9] max-md:flex-wrap">
            <div className="w-[240px] flex-center py-2 px-2 justify-between border-r-2 border-main">
                <Button variant={"ghost"} size={"sm"} className='px-2 h-7 text-main'>
                    Yesterday
                </Button>
                <Button variant={"ghost"} size={"sm"} className='px-2 h-7 text-main'>
                    Today
                </Button>
                <Button variant={"ghost"} size={"sm"} className='px-2 h-7 text-main'>
                    Tomorrow
                </Button>
            </div>
            <div className=" px-2 md:w-[240px] py-2 border-r-2 border-r-main flex-center justify-center">
                <Button variant={"ghost"} size={"sm"} className='font-medium h-7 text-main'>last week</Button>
                <span className='w-[2px] h-6 bg-main mx-1'></span>
                <Button variant={"ghost"} size={"sm"} className='font-medium h-7 text-main'>This week</Button>
            </div>
            <div className="w-full flex-center md:justify-center  px-4 ">
                <span>Overall</span>
            </div>
        </div>
        <div className="w-full px-2 max-md:mt-4 md:w-[250px] flex-center">
            <div className="bg-gray-100 w-[100px] h-10 flex justify-center">
                <span>Select Month</span>
            </div>
        </div>
    </div>
  )
}
