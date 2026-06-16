import {Routes,Route} from 'react-router-dom'
import Portfolio from './component/Portfolio'
import Home from './component/Home/Home'
import About from './component/About/About'
import Skill from './component/Skill/Skill'
import Experience from './component/Experience/Experience'
import Contact from './component/Contact/Contact'
import Register from './component1/component/Loginpage/Register'
import Loginpage from './component1/component/Loginpage/Lp'
import Password from './component1/component/Forgot/Forgot'
import Dashboard from './component1/component/Dashboard/Dashboard'





const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/log" element={<Loginpage/>}/>
            <Route path="/reg" element={<Register/>}/>
            <Route path="/forgot" element={<Password/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}
export default AppRouter