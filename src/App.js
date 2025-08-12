import './App.css';
import LandingPageMain from './apps/landing page/LandingPageMain';
import LoginPage from "./apps/auth/LoginPage"
import SignUpPage from './apps/auth/SignUp';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './MainLayout';
import Dashboard from './apps/dashboard/Dashboard';
import ProtectedRoute from './apps/auth/ProtectedRoute';
import OverviewMain from './apps/dashboard/components/OverviewMain';
import ProjectOverview from './apps/dashboard/ProjectOverview';
import SchemaOverview from './apps/dashboard/components/SchemaOverview';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPageMain />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="projects" replace />} />
            <Route path="projects" element={<OverviewMain />} />
            <Route path="overview" element={<OverviewMain/>} />
            <Route path="projects/:projectname" element={<ProjectOverview />}>
              <Route path=":schemaname" element={<SchemaOverview />} />
            </Route>

            
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
