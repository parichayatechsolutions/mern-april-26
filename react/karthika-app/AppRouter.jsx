
import Loginpage from "./src/component1/Loginpage/Loginpage";
import Password from "./src/component1/Password";
import Portfolio from "./src/components/Portfolio";
import { Routes, Route } from "react-router-dom";

const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/password" element={<Password/>} />
            <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
    );
};
export default AppRouter;