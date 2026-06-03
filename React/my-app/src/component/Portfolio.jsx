import { Outlet } from "react-router-dom"
import Header from "./Head/Header"





import Skill from "./Skill/Skill"
import Experience from "./Experience/Experience"
import Contact from "./Contact/Contact"
import Home from "./Home/Home"
import About from "./About/About"
import Left from "../component1/component/Loginpage/Lp"
import Forgot from "../component1/component/Forgot/Forgot"



const Portfolio = () => {
    return (
        <>
            <Header/>
            <Home/>
            <About/>
            <Skill/>
            <Experience/>
            <Contact/>
            <Left/>
            <Forgot/>
            <Outlet/>
        </>
    )
}
export default Portfolio