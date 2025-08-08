import './App.css';
import LandingPageMain from './apps/landing page/LandingPageMain';
import LoginPage from "./apps/auth/LoginPage"
import SignUpPage from './apps/auth/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Dashboard from './apps/dashboard/Dashboard';
import ProtectedRoute from './apps/auth/ProtectedRoute';
function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<LandingPageMain />} />
              <Route path='/auth' element={<LoginPage />} />
              <Route path='/signup' element={<SignUpPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
