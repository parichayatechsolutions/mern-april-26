import "./Loginp.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PiSignIn } from "react-icons/pi";


function Register() {
    const navigate = useNavigate()
    const heading = "Welcome to Register Page"
    const n = "First Name"
    const n1 = "Second Name"
    const mail = "E-mail"
    const phone = "Phone"
    const p = "Password"
    const button = "Create"
    const signin = "Already have an account? Log in"

    // const Login = () =>{
    //     const navigate = useNavigate();
    //     const title = "Login"
    //     const password = "Password"
    //     const [FormDetails,setFormDetails] = useState(null)


    //     details.preventDefault()
    //     console.log(details.target[0].value)
    //     console.log(details.target[1].value)
    //     console.log(details.target[2].value)
    //     setFormDetails({
    //         Name:details.target[0].value,
    //         Email:details.target[1].value,
    //         Password:details.target[2].value,
    //     })

    // }

    return (
        <>
            <div className="flex p-18 mb-auto justify-center w-full h-full bg-[url('/Users/Lakshmi/Documents/GitHub/mern-april-26/React/my-app/src/component1/component/Loginpage/bgs.png')] bg-cover rounded-2xl ">
                <div className="page flex justify-start w-1/2 items-center bg-white/10 backdrop-blur-xs rounded-2xl border-indigo-800 shadow-gray-800 shadow-2xl/100 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                    <div className="left w-full m-2.5 rounded-2xl bg-blue-50-100 ">
                        <form>
                            <div className="heading text-white text-center text-3xl mt-100px font-bold">
                                <h2>{heading}</h2>
                            </div>
                            <div className="form text-base flex flex-col m-5">
                                <div className="flex justify-between gap-3">
                                    <div className="flex flex-col w-full">
                                        <label className="text-white p-1.5 pl-3.5 text-lg">{n}</label>
                                        <input className="text-indigo-900 p-3.5 border-2 border-solid border-purple-800 text-base w-full outline-none bg-indigo-200/10 hover:bg-indigo-50 focus:bg-indigo-50 rounded-2xl" type="text" placeholder="Your First name"></input>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-white p-1.5 pl-3.5 text-lg">{n1}</label>
                                        <input className="text-indigo-900 p-3.5 border-2 border-solid border-purple-800 text-base w-full outline-none bg-indigo-200/10 hover:bg-indigo-50 focus:bg-indigo-50 rounded-2xl" type="text" placeholder="Your Second name"></input>
                                    </div>
                                </div>
                                <label className="text-white p-1.5 pl-3.5 text-lg">{mail}</label>
                                <input className="text-indigo-900 p-3.5 border-2 border-solid border-purple-800 text-base w-full outline-none bg-indigo-200/10 hover:bg-indigo-50 focus:bg-indigo-50 rounded-2xl" type="e-mail" placeholder="E-mail"></input>
                                <label className="text-white p-1.5 pl-3.5 text-lg">{phone}</label>
                                <input className="text-indigo-900 p-3.5 border-2 border-solid border-purple-800 text-base w-full outline-none bg-indigo-200/10 hover:bg-indigo-50  focus:bg-indigo-50 rounded-2xl" type="tel" placeholder="Phone"></input>
                                <label className="text-white p-1.5 pl-3.5 text-lg">{p}</label>
                                <input className="text-indigo-900 p-3.5 border-2 border-solid border-purple-800 text-base w-full outline-none bg-indigo-200/10 hover:bg-indigo-50 focus:bg-indigo-50 rounded-2xl" type="password" placeholder="Password"></input>
                            </div>
                            <div className="btn pt-4 flex justify-center items-center">
                                <button className="flex items-center gap-1.5 justify-center w-4/5 p-2.5 text-base bg-linear-to-r from-purple-800 to-purple-300 rounded-2xl shadow-indigo-800 shadow-lg/50 text-white transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100" type="submit">
                                    <div className="text-2xl">
                                        <span>
                                            <PiSignIn />
                                        </span></div>
                                    <div>{button}</div>
                                </button>
                            </div>
                            <div className="footer flex justify-center text-center items-center pt-5">
                                <button type="text" className="text-center text-white hover:text-purple-800 focus:underline focus:underline-offset-6 focus:decoration-2 focus:decoration-purple-800 focus:text-white" onClick={() => { navigate("/log")}}>{signin}</button>
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

export default Register