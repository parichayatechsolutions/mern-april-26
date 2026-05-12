import {Routes,Route} from 'react-router-dom'
import Portfolio from './component/Portfolio'
import Home from './component/Home/Home'
import About from './component/About/About'
import Skill from './component/Skill/Skill'
import Experience from './component/Experience/Experience'
import Contact from './component/Contact/Contact'




const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<Portfolio/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skill" element={<Skill/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}
export default AppRouter