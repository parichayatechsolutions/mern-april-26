import "./Row7.css"

function Row7() {
    const toolbox="MY TOOLBOX 🧰"
    const underline="_______________"
    const description="The colors on my creative palette"
    return (
        <>
            <div className="row7">
                <h1>{toolbox}</h1>
                <h2>{underline}</h2>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Row7;