import EducationForm from '@/components/education/EducationForm';
import Layout from '@/components/global/layout/Layout'
import { experienceTempList } from '@/static/experience-static';

export default function EditExperience() {
    const mockExperienceValue = experienceTempList[0]
    return (
    <Layout title='Country' content='Add Countries'>
        <div className="card">
            <div className="mt-3 py-2 border-b">
                <span className='font-bold text-lg'>Edit Experience</span>
            </div>   
            <EducationForm
                defaultValues={{
                    valueNumber:mockExperienceValue.valueNumber,
                    name:mockExperienceValue.experienceLevel
                }}
            />
        </div>
  
    </Layout>
  )
}
