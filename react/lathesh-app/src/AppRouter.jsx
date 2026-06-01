import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Registration from './pages/Registration/Registration';
import Popup from './pages/Popup/Popup';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/popup" element={<Popup />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default AppRouter;