import "./My_journey.css"

function My_journey() {
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

export default My_journey;