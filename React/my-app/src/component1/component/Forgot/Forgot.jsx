import "./Forgot.css"
import { useEffect, useState } from "react"
import { MdLockReset } from "react-icons/md";
import { useNavigate } from "react-router-dom"


function Forgot() {
    const navigate = useNavigate()
    const heading2 = "Update Password"
    const button = "Reset Password"
    const mail = "E-mail"
    const old = "Old Password"
    const ne = "New Password"
    const login = "Click to reach login page"

    return (
        <>
            <div className="main p-18 py-35 ml-auto mr-auto flex justify-center w-full bg-[url('/Users/Lakshmi/Documents/GitHub/mern-april-26/React/my-app/src/component1/component/Loginpage/bgs.png')] bg-cover rounded-2xl items-center ">
                <div className="page flex justify-start w-1/2 items-center bg-white/10 backdrop-blur-xs rounded-2xl border-indigo-800 shadow-gray-800 shadow-2xl/100 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                    <div className="left w-full m-2.5 rounded-2xl bg-blue-50-100">
                        <form>
                            <div className="heading text-white text-center pt-3 text-3xl mt-100px font-bold">
                                <h2>{heading2}</h2>
                            </div>
                            <div className="form text-base flex flex-col m-5">
                                <label className="text-white p-1.5 pl-3.5 text-lg">{mail}</label>
                                <input className="text-blue-900 p-3.5 border-2 border-solid border-purple-800 text-base w-full outline-none bg-indigo-200/10 hover:bg-indigo-50 focus:bg-indigo-50 rounded-2xl" type="e-mail" placeholder="E-mail"></input>
                                <label className="text-white p-1.5 pl-3.5 text-lg">{old}</label>
                                <input className="text-blue-900 p-3.5 border-2 border-solid border-purple-800 text-base w-full outline-none bg-indigo-200/10 hover:bg-indigo-50 focus:bg-indigo-50 rounded-2xl" type="password" placeholder="Password"></input>
                                <label className="text-white p-1.5 pl-3.5 text-lg">{ne}</label>
                                <input className="text-blue-900 p-3.5 border-2 border-solid border-purple-800 text-base w-full outline-none bg-indigo-200/10 hover:bg-indigo-50 focus:bg-indigo-50 rounded-2xl" type="password" placeholder="Password"></input>
                            </div>
                            <div className="btn pt-4 pb-3.5 flex justify-center items-centerr">
                                <button className=" flex items-center gap-1.5 justify-center w-4/5 p-2.5 text-base bg-linear-to-r from-purple-800 to-purple-300 rounded-2xl shadow-indigo-800 shadow-lg/50 text-white transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100" type="submit">
                                    <div className="span text-xl">
                                        <span>
                                            <MdLockReset />
                                        </span>
                                    </div>
                                    <div>
                                        <p>{button}</p>
                                    </div>
                                </button>
                            </div>
                            <div className="footer flex justify-center text-center items-center p-2">
                                <button type="text" className="text-center text-white hover:text-purple-800 focus:underline focus:underline-offset-6 focus:decoration-2 focus:decoration-purple-800 focus:text-white" onClick={() => { navigate("/log")}}>{login}</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Forgot
