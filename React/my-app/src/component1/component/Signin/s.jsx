import "./s.css"


function Sign() {
    const heading1 = "Welcome to Sign In page"
    const n = "Name"
    const p = "Password"
    const sign = "Sign In"

    return (
        <>

            <div className="main p-40 max-w-7xl ml-auto mr-auto flex justify-center w-full h-full bg-linear-to-r from-indigo-50 to-indigo-50 rounded-2xl items-center ">
                <div className="page flex justify-start w-1/2 items-center bg-white rounded-2xl border-indigo-800 shadow-gray-800 shadow-2xl/100 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                    <div className="left w-full m-2.5 rounded-2xl bg-blue-50-100">
                        <div className=" heading text-center text-3xl font-bold">
                            <p>{heading1}</p>
                        </div>
                        <form>
                            <div className="details pl-14 flex flex-col justify-center">
                                <label className="pt-5 pl-7 text-blue-900 p-1.5 text-base">{n}</label>
                                <input className="text-blue-900 p-3.5 border-solid border-2 border-indigo-400 text-base w-4/5 outline-none rounded-2xl bg-indigo-50 ml-2.5 hover:bg-white hover:opacity-80 hover:border-indigo-300 hover:rounded-2xl" type="text" placeholder="Your name"></input>
                                <label className=" pl-7 text-blue-900 p-1.5 text-base">{p}</label>
                                <input className="text-blue-900 p-3.5 border-solid border-2 border-indigo-400 rounded-2xl text-base w-4/5 outline-none bg-indigo-50 ml-2.5 hover:bg-white hover:opacity-80 hover:border-indigo-300 hover:rounded-2xl" type="text" placeholder="Your Password"></input>
                            </div>
                            <div className="btn pt-7 flex justify-center items-center">
                                <button className=" flex items-center gap-1.5 justify-center w-3/4 p-2.5 text-base bg-linear-to-r from-indigo-300 to-purple-800 font-sans border-indigo-400 rounded-2xl text-white transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 mb-5 shadow-indigo-800 shadow-lg/50" type="button">
                                    <div className="span">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="#ffffff">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H7C6.44772 19 6 19.4477 6 20C6 20.5523 6.44772 21 7 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H7ZM12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289C10.9024 7.68342 10.9024 8.31658 11.2929 8.70711L13.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H13.5858L11.2929 15.2929C10.9024 15.6834 10.9024 16.3166 11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L12.7071 7.29289Z" fill="#ffffff" />
                                        </svg></div>
                                    <div>{sign}</div>
                                </button>
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