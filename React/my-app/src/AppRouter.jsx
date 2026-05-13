import {Routes,Route} from 'react-router-dom'
import Portfolio from './component/Portfolio'
import Home from './component/Home/Home'
import About from './component/About/About'
import Skill from './component/Skill/Skill'
import Experience from './component/Experience/Experience'
import Contact from './component/Contact/Contact'
import Left from './component/Loginpage copy/Lp'
import Sign from './component/Signin/s'




const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<Portfolio/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/login" element={<Left/>}/>
            <Route path="/sign" element={<Sign/>}/>
            <Route path="*" element={<Portfolio/>}/>
        </Routes>
    )
}
export default AppRouter