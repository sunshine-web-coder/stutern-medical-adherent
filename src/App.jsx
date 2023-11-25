import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/home/Home';
import LoginForm from './components/auth/LoginForm';
import Dashboard from './views/dashboard/Dashboard';
import PatientsPage from './views/dashboard/PatientsPage';
import MedicalProviders
  from './components/dashboards/medicalProviders/MedicalProviders';
import InvitePatients
  from './components/dashboards/medicalProviders/InvitePatients/InvitePatients';
import NewPatientForm from './components/auth/NewPatientForm';
import AuthPages from './views/authPages/AuthPages';
import PatientsProfile
  from './components/dashboards/patientsProfile/PatientsProfile';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from "./components/ScrollToTop";
import { useSelector } from 'react-redux';

function App () {
  const isAuthenticated = useSelector(state => state.user !== null);

  return (
    <div className="App">
      {/* <Header /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Home />} />
        <Route path="/auth" element={isAuthenticated ? <Navigate to="/dashboard" /> : <AuthPages />}>
          <Route index element={<AuthPages />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="create-new-patient" element={<NewPatientForm />} />
        </Route>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<MedicalProviders />} />
            <Route path="patients" element={<PatientsPage />} />
            <Route path="invite-patients" element={<InvitePatients />} />
            <Route path="patients-profile" element={<PatientsProfile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
