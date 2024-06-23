import {BrowserRouter,Route,Routes,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import FullLoader from './components/global/FullLoader';
const LogIn = lazy(()=> import('./pages/auth/LogIn'));
const Dashboard = lazy(()=> import('./pages/protected/dashboard/DashBoard'));
const ForgotPassword = lazy(()=> import('./pages/auth/ForgotPassword'));
const NewPassword = lazy(()=> import('./pages/auth/NewPassword'));
// const Recruitment = lazy(()=> import('./pages/protected/recruitment/Recruitment'));
// const RecruitmentAdd = lazy(()=> import('./pages/protected/recruitment/RecruitmentAdd'));
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
        
        {/* NextUpdate */}
        {/* <Route path='/admin/experience/view' element={<Recruitment/>}/>
        <Route path='/admin/experience/add' element={<RecruitmentAdd/>}/> */}
        {/* Next Update */}
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
