import "./My_toolbox.css"

function My_toolbox() {
    const toolbox = "MY TOOLBOX 🧰"
    const underline = "_______________"
    const description = "The colors on my creative palette"
    return (
        <>
            <section id="SKILLS">
                <div className="flex flex-col mt-30 items-center  ">
                    <h1 className="text-5xl text-shadow-[4px_4px_0px_yellow] font-bold font-[cursive] text-center mb-2">{toolbox}</h1>
                    <h2 className="text-5xl text-shadow-[px_3px_1px_gray] font-bold font-[cursive] text-center -mt-4 mb-2">{underline}</h2>
                    <p className="text-[20px] font-[cursive] text-center">{description}</p>
                </div>
            </section>
        </>
    )
}

export default My_toolbox;