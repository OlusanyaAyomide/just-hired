import { DateRangePicker } from 'rsuite'

export default function PaymentFilter() {
  return (
    <div className='pt-3 max-w-screen flex-center justify-between'>
      <DateRangePicker className='mr-3'/>
      <span className='text-lg text-main font-medium'>OverAll</span>
    </div>
  )
}
