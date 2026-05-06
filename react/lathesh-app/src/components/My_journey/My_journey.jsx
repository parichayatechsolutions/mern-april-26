import "./My_journey.css"

function My_journey() {
    const journey="My Journey 🌟"
    const underline="____________"
    const description="The story so far..."
    return (
        <>
            <div className="flex flex-col mt-30 items-center  ">
                <h1 className="text-5xl text-shadow-[4px_4px_0px_yellow] font-bold font-[cursive] text-center mb-2">{journey}</h1>
                <h2 className="text-5xl text-shadow-[px_3px_1px_gray] font-bold font-[cursive] text-center -mt-4 mb-2">{underline}</h2>
                <p className="text-[20px] font-[cursive] text-center">{description}</p>
            </div>
        </>
    )
}

export default My_journey;