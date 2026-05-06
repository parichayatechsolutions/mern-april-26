import "./Toolbox_content.css"

function Toolbox_content() {
    const program_name1="Python Artistry"
    const p_percentage="30%"
    const program_name2="JavaScript Creativity"
    const js_perceentage="60%"
    const pgrogram_name3="React Imagination"
    const r_percentage="80%"
    const program_name4="Design Thinking"
    const d_percentage="40%"
    return (
        <>
            <div className="flex flex-col text-5 font-[cursive] font-bold pt-18 px-90">
                <div className="mb-2.5">
                    <div className="flex justify-between">
                        <span className="t1"><b>{program_name1}</b></span>
                        <span className="t2">{p_percentage}</span>
                    </div>
                    <div className="border border-solid border-black w-full h-5 rounded-2xl relative m-0">
                        <div className="absolute w-[30%] h-full bg-linear-90 from-red-400 to-blue-400 rounded-2xl"></div>
                    </div>
                </div>
                <div className="mb-2.5">
                    <div className="flex justify-between">
                        <div className="t1"><b>{program_name2}</b></div>
                        <div className="t2">{js_perceentage}</div>
                    </div>
                    <div className="border border-solid border-black w-full h-5 rounded-2xl relative m-0">
                        <div className="absolute w-[60%] h-full bg-linear-90 from-red-400 to-blue-400 rounded-2xl"></div>
                    </div>
                </div>

                <div className="mb-2.5">
                    <div className="flex justify-between">
                        <div className="t1"><b>{pgrogram_name3}</b></div>
                        <div className="t2">{r_percentage}</div>
                    </div>
                    <div className="border border-solid border-black w-full h-5 rounded-2xl relative m-0">
                        <div className="absolute w-[80%] h-full bg-linear-90 from-red-400 to-blue-400 rounded-2xl"></div>
                    </div>
                </div>
                <div className="mb-2.5">
                    <div className="flex justify-between">
                        <div className="t1"><b>{program_name4}</b></div>
                        <div className="t2">{d_percentage}</div>
                    </div>
                    <div className="border border-solid border-black w-full h-5 rounded-2xl relative m-0">
                        <div className="absolute w-[40%] h-full bg-linear-90 from-red-400 to-blue-400 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Toolbox_content;