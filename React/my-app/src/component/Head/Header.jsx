
import "./Header.css"


function Header() {

    return (

        <>
            <nav className="navigation">
                <div className="logo">
                    <div className="top_l">
                        <img src="./logo.png"></img>
                    </div>
                    <div className="top_m">
                        <p>Portfolio</p>
                    </div>
                </div>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skill">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </>

    )
}

export default Header
