import "./Header.css"

function Header() {
    const name = "Lathesh"
    const navItems=["ABOUT","PROJECT","SKILLS","EXPERIENCE","CONTACT"]
    return (
        <>
            <nav className="pl-4 pr-4">
                <div className="flex items-center justify-between flex-row ">
                    <div className="flex items-center pl-11 gap-2.5">
                        <div className="flex justify-center items-center rounded-[50%]">
                            <img src="./icon.png!w700wp" alt="logo" className="rounded-[50%] h-12 w-12"/>
                        </div>
                        <span className="text-3xl font-bold font-[cursive]  text-shadow-[3px_3px_rgba(165,165,12,1)]">{name}</span>
                    </div>
                    <div className="flex justify-evenly items-center font-[cusive] ]  ">
                        <a href={`#${navItems[0]}`} className="py-2.5 px-4.5 my-0 mx-1 bg-[white] font-[cursive] border-2 border-solid border-black rounded-[50px] transition-all duration-300 ease-in-out -rotate-2 hover:rotate-0 hover:bg-[#d0d000] foc">{navItems[0]}</a>
                        <a href={`#${navItems[1]}`} className="py-2.5 px-4.5 my-0 mx-1 bg-[white] font-[cursive] border-2 border-solid border-black rounded-[50px] navigation transition-all duration-300 ease-in-out rotate-2 hover:rotate-0 hover:bg-[#d0d000]">{navItems[1]}</a>
                        <a href={`#${navItems[2]}`} className="py-2.5 px-4.5 my-0 mx-1 bg-[white] font-[cursive] border-2 border-solid border-black rounded-[50px] navigation transition-all duration-300 ease-in-out -rotate-2 hover:rotate-0 hover:bg-[#d0d000]">{navItems[2]}</a>
                        <a href={`#${navItems[3]}`} className="py-2.5 px-4.5 my-0 mx-1 bg-[white] font-[cursive] border-2 border-solid border-black rounded-[50px] navigation transition-all duration-300 ease-in-out rotate-2 hover:rotate-0 hover:bg-[#d0d000]">{navItems[3]}</a>
                        <a href={`#${navItems[4]}`} className="py-2.5 px-4.5 my-0 mx-1 bg-[white] font-[cursive] border-2 border-solid border-black rounded-[50px] navigation transition-all duration-300 ease-in-out -rotate-2 hover:rotate-0 hover:bg-[#d0d000]">{navItems[4]}</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;