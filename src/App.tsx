import {BrowserRouter,Route,Routes,
} from 'react-router-dom';
import LogIn from './pages/auth/LogIn';
import Dashboard from './pages/protected/dashboard/DashBoard';
import ForgotPassword from './pages/auth/ForgotPassword';
import NewPassword from './pages/auth/NewPassword';
import Recruitment from './pages/protected/recruitment/Recruitment';
import RecruitmentAdd from './pages/protected/recruitment/RecruitmentAdd';
import CoutnryAdd from './pages/protected/country/CoutnryAdd';
import PaymentDashBoard from './pages/protected/dashboard/PaymentDashBoard';


export function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path='/dashboard/payment' element ={<PaymentDashBoard/>}/>
      <Route path="/login" element={<LogIn/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path='/new-password' element={<NewPassword/>}/>
      <Route path='/admin/country/add' element={<CoutnryAdd/>}/>
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
