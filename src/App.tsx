import {BrowserRouter,Route,Routes,
} from 'react-router-dom';
import LogIn from './pages/auth/LogIn';
import Dashboard from './pages/protected/dashboard/DashBoard';
import ForgotPassword from './pages/auth/ForgotPassword';
import NewPassword from './pages/auth/NewPassword';
import Recruitment from './pages/protected/recruitment/Recruitment';
import RecruitmentAdd from './pages/protected/recruitment/RecruitmentAdd';
import AddCountry from './pages/protected/country/AddCountry';
import PaymentDashBoard from './pages/protected/dashboard/PaymentDashBoard';
import CountryList from './pages/protected/country/CountryList';
import CountryEdit from './pages/protected/country/CountryEdit';
// import AddEducation from './pages/protected/education/AddEducation';
// import EditEducatiion from './pages/protected/education/EditEducation';
// import EducationList from './pages/protected/education/EduactionList';
// import AddExperience from './pages/protected/experience/AddExperience';
// import ExperienceList from './pages/protected/experience/ExperienceList';
// import EditExperience from './pages/protected/experience/EditExperience';


export function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path='/dashboard/payment' element ={<PaymentDashBoard/>}/>
      <Route path="/login" element={<LogIn/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path='/new-password' element={<NewPassword/>}/>

      <Route path='/admin/country/add' element={<AddCountry/>}/>
      {/* NextUpdate */}
      <Route path='/admin/country/view' element={<CountryList/>}/>
      <Route path='/admin/country/edit/:id' element={<CountryEdit/>}/>
      {/* Next Update */}

      {/* <Route path='/admin/education/add' element={<AddEducation/>}/>
      <Route path='/admin/education/view' element={<EducationList/>}/>
      <Route path='/admin/education/edit/123' element={<EditEducatiion/>}/>

      <Route path='/admin/experience/add' element={<AddExperience/>}/>
      <Route path='/admin/experience/view' element={<ExperienceList/>}/>
      <Route path='/admin/experience/edit/123' element={<EditExperience/>}/> */}
      
      <Route path='/recruit/company/view' element={<Recruitment/>}/>
      <Route path='/recruit/company/add' element={<RecruitmentAdd/>}/>
      <Route path='*' element={<div className='text-shade text-2xl pt-20'>Not Found</div>}/>
    </Routes>
  );
}

export  default function WrappedApp() {
  return (
    <BrowserRouter>
        <App />
    </BrowserRouter>
  );
}
