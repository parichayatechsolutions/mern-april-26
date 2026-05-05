import "./Head.css"

function Head() {
    const name = "KARTHIKA"
    const navItems = ["About", "Project", "Skill", "Experience", "Contact"]
    const classNames = 100
    return (
        <>

            <div className="one">
                <div className={"left " + classNames}>
                    <h1 className={`${name}`}>{name}</h1>
                </div>
                <div className="navi">
                    <a href={`#${navItems[0]}`}>{navItems[0]}</a>
                    <a href={`#${navItems[1]}`}>{navItems[1]}</a>
                    <a href={`#${navItems[2]}`}>{navItems[2]}</a>
                    <a href={`#${navItems[3]}`}>{navItems[3]}</a>
                    <a href={`#${navItems[4]}`}>{navItems[4]}</a>
                    
                </div>
            </div>
        </>
    )
}
 export default Head
