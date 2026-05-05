import "./Row11.css"

function Row11() {
    const creativity="Let's Create Together! 🎨"
    const underline="____________"
    const description="Got a wild idea? Let's make it real!"
    return (
        <>
            <div className="row11">
                <h1>{creativity}</h1>
                <h2>{underline}</h2>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Row11;