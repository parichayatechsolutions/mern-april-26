import "./Row5.css"

function Row5() {
    const creation="My Creation 🚀"
    const underline="____________"
    const descrition="Where Imagination Meets Implementation"
    return (
        <>
            <div className="row5">
                <h1>{creation}</h1>
                <h2>{underline}</h2>
                <p>{descrition}</p>
            </div>
        </>
    )
}


export default Row5;