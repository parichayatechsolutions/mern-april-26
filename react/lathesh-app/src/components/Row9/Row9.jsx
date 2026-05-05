import "./Row9.css"

function Row9() {
    const journey="My Journey 🌟"
    const underline="____________"
    const description="The story so far..."
    return (
        <>
            <div className="row9">
                <h1>{journey}</h1>
                <h2>{underline}</h2>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Row9;