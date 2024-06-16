interface IDropDownItem{
    title:string
    content?:string
    flagUrl?:string
}
const DropDownItem = ({title,content,flagUrl}:IDropDownItem)=>(
    <div className='w-6/12 sm:w-4/12 md:w-3/12 mb-2'>
        <h4 className="font-light text-gray-700">{title}</h4>
        {flagUrl?
          <img className='h-4 w-[18px] shrink-0 mr-2' src={flagUrl} alt={flagUrl} />
          :
          <h3 className="font-semibold">{content}</h3>
        } 
    </div>
)

export default DropDownItem
