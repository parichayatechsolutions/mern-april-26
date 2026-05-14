import "./Forgot.css"


function Forgot() {
    const heading2="Forgot Password"
    const button="Reset Password"
    const mail="E-mail"
    const old="Old Password"
    const ne="New Password"

    return (
        <>
            <div className="main p-32 max-w-7xl ml-auto mr-auto flex justify-center w-full h-full bg-linear-to-r from-indigo-50 to-indigo-50 rounded-2xl items-center ">
                <div className="page flex justify-start w-1/2 items-center bg-white rounded-2xl border-indigo-800 shadow-gray-800 shadow-2xl/100 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                    <div className="left w-full m-2.5 rounded-2xl bg-blue-50-100">
                        <form>
                            <div className="heading text-center pt-3 text-3xl mt-100px font-bold">
                                <h2>{heading2}</h2>
                            </div>
                            <div className="form text-base flex flex-col m-5">
                                <label className="text-blue-900 p-1.5 pl-3.5 text-lg">{mail}</label>
                                <input className="text-blue-900 p-3.5 border-2 border-solid border-indigo-400 text-base w-full outline-none bg-indigo-50 rounded-2xl" type="e-mail" placeholder="E-mail"></input>
                                <label className="text-blue-900 p-1.5 pl-3.5 text-lg">{old}</label>
                                <input className="text-blue-900 p-3.5 border-2 border-solid border-indigo-400 text-base w-full outline-none bg-indigo-50 rounded-2xl" type="password" placeholder="Password"></input>
                                <label className="text-blue-900 p-1.5 pl-3.5 text-lg">{ne}</label>
                                <input className="text-blue-900 p-3.5 border-2 border-solid border-indigo-400 text-base w-full outline-none bg-indigo-50 rounded-2xl" type="password" placeholder="Password"></input>
                            </div>
                            <div className="btn pt-4 pb-3.5 flex justify-center items-centerr">
                                <button className=" flex items-center gap-1.5 justify-center w-4/5 p-2.5 text-base bg-linear-to-r from-indigo-300 to-purple-800 rounded-2xl shadow-indigo-800 shadow-lg/50 text-white transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100" type="submit">
                                    <div className="span">
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="15px" height="15px"
                                            viewBox="0 0 32 32" version="1.1">
                                            <title>paper-plane</title>
                                            <path
                                                d="M0 14.016l9.216 6.912 18.784-16.928-14.592 20.064 10.592 7.936 8-32zM8 32l6.016-4-6.016-4v8z" />
                                        </svg>
                                    </span>
                                    </div>
                                    <div>
                                    <p>{button}</p>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Forgot
