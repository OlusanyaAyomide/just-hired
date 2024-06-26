import {BrowserRouter,Route,Routes,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';

import FullLoader from './components/global/FullLoader';


const LogIn = lazy(()=> import('./pages/auth/LogIn'));
const Dashboard = lazy(()=> import('./pages/protected/dashboard/DashBoard'));
const ForgotPassword = lazy(()=> import('./pages/auth/ForgotPassword'));
const NewPassword = lazy(()=> import('./pages/auth/NewPassword'));
const HrList = lazy(()=> import('./pages/protected/hr/user/HrList'));
const HrAdd = lazy(()=> import('./pages/protected/hr/user/HrAdd'));
const HrEdit = lazy(()=>import('./pages/protected/hr/user/HrEdit'))
const AddCountry = lazy(()=> import('./pages/protected/country/AddCountry'));
const PaymentDashBoard = lazy(()=> import('./pages/protected/dashboard/PaymentDashBoard'));
const CountryList = lazy(()=> import('./pages/protected/country/CountryList'));
const CountryEdit = lazy(()=> import('./pages/protected/country/CountryEdit'));
const AddEducation = lazy(()=> import('./pages/protected/education/AddEducation'));
const EditEducatiion = lazy(()=> import('./pages/protected/education/EditEducation'));
const EducationList = lazy(()=> import('./pages/protected/education/EduactionList'));
const AddExperience = lazy(()=> import( './pages/protected/experience/AddExperience'));
const ExperienceList = lazy(()=> import( './pages/protected/experience/ExperienceList'));
const EditExperience = lazy(()=> import( './pages/protected/experience/EditExperience'));
const AddGroup = lazy(()=>import("./pages/protected/hr/group/AddGroup"))
const GroupList = lazy(()=>import('./pages/protected/hr/group/GroupList'))
const GroupEdit = lazy(()=>import('./pages/protected/hr/group/GroupEdit'))


export function App() {
  return (
    <Suspense fallback={<FullLoader isLoading/>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/dashboard/payment' element ={<PaymentDashBoard/>}/>
        <Route path="/login" element={<LogIn/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path='/new-password' element={<NewPassword/>}/>

        <Route path='/admin/country/add' element={<AddCountry/>}/>
        <Route path='/admin/country/view' element={<CountryList/>}/>
        <Route path='/admin/country/edit/:id' element={<CountryEdit/>}/>

        <Route path='/admin/education/add' element={<AddEducation/>}/>
        <Route path='/admin/education/view' element={<EducationList/>}/>
        <Route path='/admin/education/edit/123' element={<EditEducatiion/>}/>

        <Route path='/admin/experience/add' element={<AddExperience/>}/>
        <Route path='/admin/experience/view' element={<ExperienceList/>}/>
        <Route path='/admin/experience/edit/123' element={<EditExperience/>}/>

        <Route path='/admin/hr/view' element={<HrList/>}/>
        <Route path='/admin/hr/add' element={<HrAdd/>}/>
        <Route path='/admin/hr/edit/123' element={<HrEdit/>}/>

        {/* <Route path='/admin/hr/group/create' element={<AddGroup/>} />
        <Route path='/admin/hr/group/view' element={<GroupList/>} />
        <Route path='/admin/hr/group/edit/123' element={<GroupEdit/>} /> */}
        <Route path='*' element={<div className='text-shade text-2xl pt-20'>Not Found</div>}/>
      </Routes>
    </Suspense>

  );
}

export  default function WrappedApp() {
  return (
    <BrowserRouter>
        <App />
    </BrowserRouter>
  );
}
