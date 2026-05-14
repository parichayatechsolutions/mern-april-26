import Login from "./src/component1/Loginpage/login";
import Portfolio from "./src/components/Portfolio";
import { Routes, Route } from "react-router-dom";

const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password" element={<Password />} />
            <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
    );
};
export default AppRouter;