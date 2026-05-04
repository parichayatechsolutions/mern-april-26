
import "./Header.css"


function Header() {
    const port = "Portfolio"
    const navItems = ["Home", "About","Skill","Experience","Contact"]

    return (

        <>
            <nav className="navigation">
                <div className="logo">
                    <div className="top_l">
                        <img src="./logo.png"></img>
                    </div>
                    <div className="top_m">
                        <p>{port}</p>
                    </div>
                </div>
                <div className="nav-links">
                    <a href={`#${navItems[0]}`}>{navItems[0]}</a>
                    <a href={`#${navItems[1]}`}>{navItems[1]}</a>
                    <a href={`#${navItems[2]}`}>{navItems[2]}</a>
                    <a href={`#${navItems[3]}`}>{navItems[3]}</a>
                    <a href={`#${navItems[4]}`}>{navItems[4]}</a>
                </div>
            </nav>
        </>

    )
}

export default Header
