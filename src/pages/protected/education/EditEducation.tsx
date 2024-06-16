import EducationForm from '@/components/education/EducationForm';
import Layout from '@/components/global/layout/Layout'
import { educationTempList } from '@/static/education-static';

export default function EditEducatiion() {
    const mockEducationValue = educationTempList[0]
    return (
    <Layout title='Country' content='Add Countries'>
        <div className="card">
            <div className="mt-3 py-2 border-b">
                <span className='font-bold text-lg'>Edit Education</span>
            </div>   
            <EducationForm
                defaultValues={{
                    valueNumber:mockEducationValue.valueNumber,
                    name:mockEducationValue.educationLevel
                }}
            />
        </div>
  
    </Layout>
  )
}
