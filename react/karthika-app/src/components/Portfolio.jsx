import { Outlet } from "react-router-dom";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import About from "./Head/About/About";
import Head from "./Head/Head";
import Intro from "./Head/Intro/Intro";
import Project from "./Head/Project/Project";
import Skill from "./Skill/Skill";

const Portfolio =() => {
    return (
        <>
            <Head />
            <Intro/>
            <About />
            <Project />
            <Skill />
            <Experience />
            <Contact />
            <Outlet/>
        </>

    )
}

export default Portfolio;