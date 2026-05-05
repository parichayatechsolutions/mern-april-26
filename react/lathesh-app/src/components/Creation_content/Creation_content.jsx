import "./Creation_content.css"

function Creation_content() {
    const ai_vision="Creative Vision AI"
    const about_ai="An AI that turns imagination into digital art. Because why should humans have all the fun?"
    const ai_image="🤖"
    const ai_art="AI ART"
    const program1="PYTHON"
    const program2="ML"
    const program3="CREATIVE"
    const program4="REACT"
    const program5="FIREBASE"
    const program6="FUN"
    const program7="D3.JS"
    const program8="PYTHON"
    const program9="ART"
    const sp1="See Magic"
    const sp2="Play"
    const sp3="Explore"
    const sp4="Try It"
    const sp5="View"
    const sp6="Interact"
    const mobile_image="📱"
    const mobile="MOBILE"
    const doodle="Doodle Task-Manager"
    const about_doodle="Productivity app that feels like playing. Because boring tasks deserve fun solutions"
    const data_graph="📈"
    const data_art="DATA art"
    const visual_data="Visual Data Stories"
    const about_visual_data="Turning boring numbers into data visualizations that tell stories."
    return (
        <>
            <div className="row6">
                <div className="r6w">
                    <div className="rw1">
                        <div className="r61a">
                            <h1>{ai_vision}</h1>
                            <div className="ai">{about_ai}</div>
                        </div>

                        <h2>{ai_image}</h2>
                        <h4>{ai_art}</h4>
                        <div className="r61">
                            <div className="ri1 item2">{program1}</div>
                            <div className="ri1 item3">{program2}</div>
                            <div className="ri1 item4">{program3}</div>
                        </div>
                        <div className="sp">
                            <div>{sp1}</div>
                            <div>{sp2}</div>
                        </div>
                    </div>
                    <div className="rw2">
                        <div className="r61b">
                            <h1>{mobile_image}</h1>
                            <div className="ai">{mobile}</div>
                        </div>

                        <h2>{doodle}</h2>
                        <h4>{about_doodle}</h4>
                        <div className="r61">
                            <div className="ri1 item3">{program4}</div>
                            <div className="ri1 item4">{program5}</div>
                            <div className="ri1 item2">{program6}</div>
                        </div>
                        <div className="sp">
                            <div>{sp3}</div>
                            <div>{sp4}</div>
                        </div>
                    </div>
                    <div className="rw3">
                        <div className="r61c">
                            <h1>{data_graph}</h1>
                            <div className="ai">{data_art}</div>
                        </div>
                        <h2>{visual_data}</h2>
                        <h4>{about_visual_data}</h4>
                        <div className="r61">
                            <div className="ri1 item4">{program7}</div>
                            <div className="ri1 item3">{program8}</div>
                            <div className="ri1 item2">{program9}</div>
                        </div>
                        <div className="sp">
                            <div>{sp5}</div>
                            <div>{sp6}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Creation_content;