import "./My_creation.css"

function My_creation() {
    const creation="My Creation 🚀"
    const underline="____________"
    const descrition="Where Imagination Meets Implementation"
    return (
        <>
            <div className="flex flex-col mt-30 items-center ">
                <h1 className="text-5xl text-shadow-[4px_4px_0px_yellow] font-bold font-[cursive] text-center mb-2">{creation}</h1>
                <h2 className="text-5xl text-shadow-[px_3px_1px_gray] font-bold font-[cursive] text-center -mt-4 mb-2">{underline}</h2>
                <p className="text-[20px] font-[cursive] text-center">{descrition}</p>
            </div>
        </>
    )
}


export default My_creation;