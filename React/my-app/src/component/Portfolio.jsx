import { Outlet } from "react-router-dom"
import Header from "./Head/Header"





import Skill from "./Skill/Skill"
import Experience from "./Experience/Experience"
import Contact from "./Contact/Contact"
import Home from "./Home/Home"
import About from "./About/About"
import Left from "./Loginpage copy/Lp"
import Sign from "./Signin/s"


const Portfolio = () => {
    return (
        <>
            <Header/>
            <Home/>
            <About/>
            <Skill/>
            <Experience/>
            <Contact/>
            <Outlet/>
        </>
    )
}
export default Portfolio