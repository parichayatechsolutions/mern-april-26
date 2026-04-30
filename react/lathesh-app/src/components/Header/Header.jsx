import "./Header.css"

function Header() {

    return (
        <>
            <nav className="header">
                <div className="ht">
                    <div className="hl">
                        <div className="i1">
                            <img src="./icon.png!w700wp" alt="logo"/>
                        </div>
                        <span className="name ">Lathesh</span>
                    </div>
                    <div className="hr navigation">
                        <a href="#about" className="link">ABOUT</a>
                        <a href="#projects" className="link">PROJECTS</a>
                        <a href="#skills" className="link">SKILLS</a>
                        <a href="#experience" className="link">EXPERIENCE</a>
                        <a href="#contact" className="link">CONTACT</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;