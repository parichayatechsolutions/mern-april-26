import {Routes,Route} from 'react-router-dom'
import Portfolio from './component/Portfolio'
import Home from './component/Home/Home'
import About from './component/About/About'
import Skill from './component/Skill/Skill'
import Experience from './component/Experience/Experience'
import Contact from './component/Contact/Contact'
import Forgot from './component1/component/Forgot/Forgot'
import Left from './component1/component/Loginpage/Lp'
import Register from './component1/component/Loginpage/Register'




const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<Left/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/log" element={<Left/>}/>
            <Route path="/reg" element={<Register/>}/>
            <Route path="/forgot" element={<Forgot/>}/>
            <Route path="*" element={<Portfolio/>}/>
        </Routes>
    )
}
export default AppRouter