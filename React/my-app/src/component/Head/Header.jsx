
import "./Header.css"


function Header() {
    const port = "Portfolio"
    const navItems = ["Home", "About","Skill","Experience","Contact"]

    return (

        <>
            <nav className=" flex justify-between ">
                <div className=" flex items-center gap-2 ">
                    <div className=" text-3xl ">
                        <p>{port}</p>
                    </div>
                </div>
                <div className=" flex list-none gap-7.5 items-center">
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
