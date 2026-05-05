import "./Header.css"

function Header() {
    const name = "Lathesh"
    const navItems=["ABOUT","PROJECT","SKILLS","EXPERIENCE","CONTACT"]
    return (
        <>
            <nav className="header">
                <div className="ht">
                    <div className="hl">
                        <div className="i1">
                            <img src="./icon.png!w700wp" alt="logo"/>
                        </div>
                        <span className="name ">{name}</span>
                    </div>
                    <div className="hr navigation">
                        <a href={`#${navItems[0]}`} className="link">{navItems[0]}</a>
                        <a href={`#${navItems[1]}`} className="link">{navItems[1]}</a>
                        <a href={`#${navItems[2]}`} className="link">{navItems[2]}</a>
                        <a href={`#${navItems[3]}`} className="link">{navItems[3]}</a>
                        <a href={`#${navItems[4]}`} className="link">{navItems[4]}</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;