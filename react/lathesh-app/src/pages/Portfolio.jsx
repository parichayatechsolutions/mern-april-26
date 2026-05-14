import About_content from "../components/About_content/About_content"
import About from "../components/About_me/About_me"
import Creation_content from "../components/Creation_content/Creation_content"
import Header from "../components/Header/Header"
import Home from "../components/Home/Home"
import Journey_content from "../components/Journey_content/Journey_content"
import Lets_create_together from "../components/Lets_create_together/Lets_create_together"
import My_creation from "../components/My_creation/My_creation"
import My_journey from "../components/My_journey/My_journey"
import My_toolbox from "../components/My_toolbox/My_toolbox"
import Toolbox_content from "../components/Toolbox_content/Toolbox_content"
import Footer from "../components/Footer/Footer"
import Form from "../components/Form/Form"
import { Outlet } from "react-router-dom"


const Portfolio = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <About_content />
            <My_creation />
            <Creation_content />
            <My_toolbox />
            <Toolbox_content />
            <My_journey />
            <Journey_content />
            <Lets_create_together />
            <Form />
            <Footer />
            <Outlet/>
        </div >
    )
}

export default Portfolio;