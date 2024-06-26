
import { Select,SelectTrigger,SelectContent, SelectItem } from '../ui/select'
import { cn } from '@/lib/utils'

interface ISelectField{
    value:string | undefined
    onSelect:(value:string)=>void
    options:{label:string,value:string}[]
    className?:string
    labelText:string
    extraLabel?:string
    required?:boolean
    disabled?:boolean
    placeholder?:string
    error?:string
}

export default function SelectField({
    value,onSelect,options,error,
    extraLabel,labelText,disabled = false,
    className,required,placeholder
    }:ISelectField) {

  return (
    <div className={cn("w-full mb-3 relative",className)}>
        <h3>
            <span>{labelText}</span>
            {required?<span className='text-red-500 text-lg relative top-1 ml-1'>*</span>:null}  
            {extraLabel?<span className="text-[13px] text-[#8A8686]/70">{extraLabel}</span>:null}
        </h3>
        <Select value={value} onValueChange={(value)=>onSelect(value)}>
            <SelectTrigger className={`${error && "border-red-500"}`} disabled={disabled}>
                {value?<span>{value}</span>:<span className='opacity-70'>{placeholder || "Select a value"}</span>}
            </SelectTrigger>
            <SelectContent>
                {options.map((item,key)=>(
                    <SelectItem key={key} value={item.value}>{item.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
        {error ? <span className="text-red-500 text-sm absolute -bottom-5 left-2">{error}</span> : null}
    </div>

  )
}
