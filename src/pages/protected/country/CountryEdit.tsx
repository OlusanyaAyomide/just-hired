import CountryForm from '@/components/country/CountryForm';
import Layout from '@/components/global/layout/Layout'
import { countryTempList } from '@/static/coutry-static';



export default function CountryEdit() {
    const mockCountryValue = countryTempList[0]
    return (
    <Layout title='Country' content='Add Countries'>
        <div className="card">
            <div className="mt-3 py-2 border-b">
                <span className='font-bold text-lg'>Edit Country</span>
            </div>   
            <CountryForm
                defaultValues={mockCountryValue}
            />
        </div>
  
    </Layout>
  )
}
