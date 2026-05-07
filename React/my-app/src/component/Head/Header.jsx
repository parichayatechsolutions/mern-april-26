
import "./Header.css"


function Header() {
    const port = "Portfolio"
    const navItems = ["Home", "About", "Skill", "Experience", "Contact"]

    return (

        <>
            <nav className=" flex justify-between ">
                <div className=" flex items-center gap-2 ">
                    <div className=" text-3xl ">
                        <p className="text-3xl bg-linear-to-r from-indigo-400 to-purple-800 bg-clip-text text-transparent pl-">{port}</p>
                    </div>
                    </div>
                    <div className=" flex list-none gap-7.5 justify-center items-center">
                        { 
                        navItems.map((item,index) => { 
                                return < a key={index} href={`#${item}`}>{item}</a>
                            }       
                        )}
                    </div>
            </nav>
        </>
    )
}

export default Header
