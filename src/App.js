import './App.css';
import NavBar from './main components/NavBar';
import LandingPageMain from './apps/landing page/LandingPageMain';
import LoginPage from "./apps/auth/LoginPage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPageMain />} />
          <Route element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
