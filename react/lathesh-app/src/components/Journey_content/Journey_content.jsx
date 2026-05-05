import "./Journey_content.css"

function Journey_content() {
    const role1="Creative Developer"
    const designation1="Tech Art Studio | Summer 2023"
    const about1="Where I learned that code can be poetry and pixels can dance. Built magical interfaces that made users smile."
    const number1="1"
    const role2="Innovation Lead"
    const designation2="Creative Coding Club | 2022-Present"
    const about2="Teaching others that coding is like painting with logic. Organized hackathons that felt more like art festivals."
    const number2="2"
    return (
        <>
            <div className="row10">
                <div className="r10l">
                    <div className="rl1">
                        <h3>{role1}</h3>
                        <h4>{designation1}</h4>
                        <p>{about1}</p>
                    </div>
                    <div className="rl2">{number1}</div>
                </div>
                <div className="r10m"></div>
                <div className="r10r">
                    <div className="rr1">
                        <h3>{role2}</h3>
                        <h4>{role2}</h4>
                        <p>{about2}</p>
                    </div>
                    <div className="rr2">{number2}</div>
                </div>
            </div>
        </>
    )
}

export default Journey_content;