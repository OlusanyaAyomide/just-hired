import { DynamicFormDefault, DynamicSelectFields,IDynamicForm } from "@/interfaces/form-interface"
import { Checkbox } from "../ui/checkbox"
import { camelCaseToSpaces } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { PopoverClose } from "@radix-ui/react-popover"
import { Button } from "../ui/button"
import { useRef } from "react"

interface IFormTemplateField{
    placeholder?:string
    title:string
    fieldName:keyof DynamicSelectFields
    activeState:IDynamicForm
    setActiveState:React.Dispatch<React.SetStateAction<IDynamicForm>>
    setSelectedFields:React.Dispatch<React.SetStateAction<DynamicSelectFields>>
    selectedFields:DynamicSelectFields

}

export default function FormTSelectTemplate({fieldName,title,activeState,setActiveState,selectedFields,setSelectedFields}:IFormTemplateField) {
    const ref = useRef<HTMLButtonElement>(null)
    return (
    <div className="border-2 border-black border-dashed py-4 px-2 rounded-sm mb-5 justify-between flex items-end">
        <div className="grow px-2  max-w-[700px]">
            <span className="font-medium block text-base sm:text-lg">{title}</span>
            <div className="flex-center flex-wrap mt-3">
                <div  className={`w-full px-1 xs:w-6/12 mb-2 md:w-4/12`}>
                    <h3>
                        <span className="font-medium">{title}</span>
                        <span className='text-red-500 text-lg relative top-1 ml-1'>*</span>
                    </h3>
                    <Popover>
                        <PopoverTrigger className="w-full border h-10 px-2 flex-center justify-start rounded-md">
                            <span className={`${!selectedFields[fieldName].length && "text-gray-400"}`}>
                                {selectedFields[fieldName].length
                                    ?
                                `${selectedFields[fieldName].length} fields selected`:
                                `Select ${title}`}</span>
                        </PopoverTrigger>
                        <PopoverContent className="px-2 py-3 sm:w-[340px] flex flex-wrap" align="start">
                            <h3 className="mt-2 mb-7 w-full text-lg font-bold">Select {camelCaseToSpaces(fieldName)}</h3>
                            <PopoverClose ref={ref} className="hidden"/>
                            {DynamicFormDefault[fieldName].map((item,index)=>{
                                const isPresent = selectedFields[fieldName].includes(item)
                                return (<div key={index} className="px-2 mb-4 w-6/12">
                                <Button 
                                    onClick={()=>{
                                        if(isPresent){
                                            setSelectedFields((prev)=>{
                                                const filteredOptions = prev[fieldName].filter((options=>options!==item))
                                                return {...prev,[fieldName]:filteredOptions}
                                            })
                                        }else{
                                            setSelectedFields((prev)=>{
                                               return {...prev,[fieldName]:[...prev[fieldName],item]}                                
                                            })
                                        }
                                    }}
                                    variant={isPresent?"default":"outline"}
                                    className="w-full rounded-full">
                                        <span>{item}</span>
                                </Button>
                                </div>
                                )})}
                                <div className="w-full mt-4 border-t">
                                    <span className="text-shade text-[13px] sm:text-sm">*You can choose multiple Order type</span>
                                    <Button onClick={()=>ref.current?.click()} 
                                    className="mt-9  block ml-auto px-10 rounded-full">Apply Now</Button>
                                </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
        <Checkbox onCheckedChange={(checked)=>{
            setActiveState((prev)=>{return {...prev,[fieldName]:checked}})
        }} 
        checked={!!activeState[fieldName]} className="h-5 w-5 mb-4"/>
    </div>
  )
}

