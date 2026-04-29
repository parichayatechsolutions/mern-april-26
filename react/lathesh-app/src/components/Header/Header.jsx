import "./Header.css"

function Header() {

    return (
        <>
            <nav class="header">
                <div class="ht">
                    <div class="hl">
                        <div class="i1">
                            <img src="./icon.png!w700wp" alt="logo"/>
                        </div>
                        <span class="name ">Lathesh</span>
                    </div>
                    <div class="hr navigation">
                        <a href="#about" class="link">ABOUT</a>
                        <a href="#projects" class="link">PROJECTS</a>
                        <a href="#skills" class="link">SKILLS</a>
                        <a href="#experience" class="link">EXPERIENCE</a>
                        <a href="#contact" class="link">CONTACT</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;