import "./s.css"


function Sign() {

    return (
        <>

            <div className="main p-32 max-w-7xl ml-auto mr-auto flex justify-center w-full h-full bg-linear-to-r from-indigo-300 to-purple-800 rounded-2xl items-center ">
               <div className="page flex justify-start w-1/2 items-center bg-white rounded-2xl border-indigo-800 shadow-indigo-800 shadow-2xl/100 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                    <div className="left w-full m-2.5 rounded-2xl bg-blue-50-100">
                        <div className=" heading text-center text-2xl font-bold">
                            <p>Welcome to Sign In page</p>
                        </div>
                        <form>
                            <div className="details pl-16 flex flex-col justify-center">
                                <label className="pt-5 pl-7 text-blue-900 p-1.5 text-base">Name</label>
                                <input className="text-blue-900 p-3.5 border-solid border-2 border-indigo-400 text-base w-4/5 outline-none rounded-2xl bg-indigo-50 ml-2.5 hover:bg-white hover:opacity-80 hover:border-indigo-300 hover:rounded-2xl" type="text" placeholder="Your name"></input>
                                <label className=" pl-7 text-blue-900 p-1.5 text-base">Password</label>
                                <input className="text-blue-900 p-3.5 border-solid border-2 border-indigo-400 rounded-2xl text-base w-4/5 outline-none bg-indigo-50 ml-2.5 hover:bg-white hover:opacity-80 hover:border-indigo-300 hover:rounded-2xl" type="text" placeholder="Your Password"></input>
                            </div>
                            <div className="btn pt-7 flex justify-center items-center">
                                <button className=" w-3/4 p-2.5 text-lg bg-linear-to-r from-indigo-300 to-purple-800 font-serif border-indigo-400 rounded-2xl text-white transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 mb-5 shadow-indigo-800 shadow-lg/50" type="button">Sign In</button>
                            </div>
                        </form>
                    </div>
                    {/* <!-- <div class="s_r">
                <img src="./sign.png">
            </div> --> */}
                </div>
            </div>
        </>

    )
}

export default Sign