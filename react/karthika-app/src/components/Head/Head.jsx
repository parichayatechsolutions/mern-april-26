import "./Head.css"

function Head() {
    const name = "KARTHIKA"
    const navItems = ["About", "Project", "Skill", "Experience", "Contact"]
    const classNames = 100

    // function add(){

    // }
    // const cal = (item) => {
    //     console.log(item)
    // }

    return (
        <>

            <div className=" flex p-[16px] justify-between bg-[#f8fafc]">
                <div className={"flex flex- items-center gap-3.5 ml-4 " + classNames}>
                    <h1 className={`text-2xl m-0 font-bold font-serif`}>{name}</h1>
                </div>
                {/* <button onClick={()=>{cal(10)}}>calc</button> */}
                <div className="flex justify-between items-center gap-2.5 text-lg">
                       { navItems.map((item, index) => {
                        console.log(item)
                            return <a key={index} className="no-underline t-black p-2.5" href={`#${item}`}>{item}</a>

                        }
                    )}
                </div>
            </div>
        </>)
}
export default Head
