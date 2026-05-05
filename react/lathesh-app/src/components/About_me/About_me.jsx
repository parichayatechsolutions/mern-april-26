import "./About_me.css"


function About() {
    const am="ABOUT ME 🎨"
    const amp="I'm excited to learn new things and I'm a chill guy 😎"
    const dash="____________"
    return (
        <>
            <div className="row3">
                <h1>{am}</h1>
                <h2>{dash}</h2>
                <p>{amp}</p>
            </div>
        </>
    )
} 

export default About;