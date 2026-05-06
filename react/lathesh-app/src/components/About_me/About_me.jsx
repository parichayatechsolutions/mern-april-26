import "./About_me.css"


function About() {
    const am="ABOUT ME 🎨"
    const amp="I'm excited to learn new things and I'm a chill guy 😎"
    const dash="____________"
    return (
        <>
            <div className="flex flex-col mt-30 items-center  ">
                <h1 className="text-5xl text-shadow-[4px_4px_0px_yellow] font-bold font-[cursive] text-center mb-2">{am}</h1>
                <h2 className="text-5xl text-shadow-[px_3px_1px_gray] font-bold font-[cursive] text-center -mt-4 mb-2">{dash}</h2>
                <p className="text-[20px] font-[cursive] text-center">{amp}</p>
            </div>
        </>
    )
} 

export default About;