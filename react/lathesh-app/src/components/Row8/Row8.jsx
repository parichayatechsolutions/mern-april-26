import "./Row8.css"

function Row8() {
    const program_name1="Python Artistry"
    const p_percentage="30%"
    const program_name2="JavaScript Creativity"
    const js_perceentage="60%"
    const pgrogram_name3="React Imagination"
    const r_percentage="0%"
    const program_name4="Design Thinking"
    const d_percentage="40%"
    return (
        <>
            <div className="row8">
                <div className="mrgnbtm">
                    <div className="rw8">
                        <span className="t1"><b>{program_name1}</b></span>
                        <span className="t2">{p_percentage}</span>
                    </div>
                    <div className="progressbar">
                        <div className="p1"></div>
                    </div>
                </div>
                <div className="mrgnbtm">
                    <div className="rw8">
                        <div className="t1"><b>{program_name2}</b></div>
                        <div className="t2">{js_perceentage}</div>
                    </div>
                    <div className="progressbar">
                        <div className="p2"></div>
                    </div>
                </div>

                <div className="mrgnbtm">
                    <div className="rw8">
                        <div className="t1"><b>{pgrogram_name3}</b></div>
                        <div className="t2">{r_percentage}</div>
                    </div>
                    <div className="progressbar">
                        <div className="p3"></div>
                    </div>
                </div>
                <div className="mrgnbtm">
                    <div className="rw8">
                        <div className="t1"><b>{program_name4}</b></div>
                        <div className="t2">{d_percentage}</div>
                    </div>
                    <div className="progressbar">
                        <div className="p4"></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Row8;