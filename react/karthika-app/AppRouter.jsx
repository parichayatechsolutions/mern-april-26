
import Dashboard from "./src/component1/Dasborad/Dasboard";
import Loginpage from "./src/component1/Loginpage/Loginpage";
import Password from "./src/component1/Password";
import Register from "./src/component1/RegisterPage/Register";
import Portfolio from "./src/components/Portfolio";
import { Routes, Route } from "react-router-dom";

const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/password" element={<Password/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
    );
};
export default AppRouter;