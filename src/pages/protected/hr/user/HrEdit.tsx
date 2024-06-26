import Layout from '@/components/global/layout/Layout'
import HrForm from '@/components/hr/HrForm';
import { mockHrUser } from '@/static/hr-static';



export default function HrEdit() {

  return (
    <Layout title='Human Resources' content='Hello Helen, Welcome to JustRecruit'>
      <div className="card">
          <div className="mt-3 py-2 border-b">
              <span className='font-bold text-lg'>Edit User</span>
          </div>   
          <HrForm defaultValues={mockHrUser}/>
      </div>
    </Layout>
  )
}
