import "./Loginp.css"


function Left() {

    return (
        <>
            <div className="main p-32 max-w-7xl ml-auto mr-auto flex justify-center w-full h-full bg-linear-to-r from-indigo-300 to-indigo-400 rounded-2xl items-center ">
                <div className="page flex justify-start w-1/2 items-center bg-white rounded-2xl border-white shadow-white shadow-2xl/100 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                    <div className="left w-full m-2.5 rounded-2xl bg-blue-50-100">
                        <form>
                            <div className="heading text-center text-3xl mt-100px font-bold">
                                <h2>Welcome to Login Page</h2>
                            </div>
                            <div className="form text-base flex flex-col m-5">
                                <label className="text-blue-900 p-1.5 pl-3.5 text-lg">Name</label>
                                <input className="text-blue-900 p-3.5 border-2 border-solid border-indigo-400 text-base w-full outline-none bg-indigo-50 rounded-2xl"type="text" placeholder="Your name"></input>
                                <label className="text-blue-900 p-1.5 pl-3.5 text-lg">E-mail</label>
                                <input className="text-blue-900 p-3.5 border-2 border-solid border-indigo-400 text-base w-full outline-none bg-indigo-50 rounded-2xl" type="e-mail" placeholder="E-mail"></input>
                                <label className="text-blue-900 p-1.5 pl-3.5 text-lg">Password</label>
                                <input className="text-blue-900 p-3.5 border-2 border-solid border-indigo-400 text-base w-full outline-none bg-indigo-50 rounded-2xl" type="password" placeholder="Password"></input>
                            </div>
                            <div className="mid flex justify-around items-center pt-2.5">
                                <div className="l_l flex items-center">
                                    <input className="w-auto" type="checkbox" id="check"></input>
                                    <label className="text-blue-900 p-1.5 pl-3.5 text-lg">Keep me logged in</label>
                                </div>
                                <div class="l_r w-auto">
                                    <a className="text-blue-900" href="l.html">Forgot Password</a>
                                </div>
                            </div>
                            <div className="btn pt-4 flex justify-center items-center">
                                <button className="w-4/5 p-2.5 text-base bg-linear-to-r from-indigo-300 to-indigo-400 rounded-2xl text-white transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100" type="submit">
                                    {/* <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="15px" height="15px"
                                            viewBox="0 0 32 32" version="1.1">
                                            <title>paper-plane</title>
                                            <path
                                                d="M0 14.016l9.216 6.912 18.784-16.928-14.592 20.064 10.592 7.936 8-32zM8 32l6.016-4-6.016-4v8z" />
                                        </svg>
                                    </span>*/}Log in
                                </button>
                            </div>
                            <div className="footer flex justify-center text-center items-center pt-5">
                                <p className="text-center text-blue-900">Don't have an account? <a href="sign.html">Sign in</a></p>
                            </div>
                        </form>
                    </div>
                    {/* <div className="right w-3/5 flex flex-col">
                        <img className="w-full h-full rounded-2xl" src="./clipart.jpg"></img>
                    </div> */}
                </div >
            </div >
        </>
    )
}

export default Left