import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Loginpage = () => {
    const navigate = useNavigate()
    const title = "Login"
    const password = "Forgot Password?"
    const [FormDetails, setFormDetails] = useState(null)

    const formDocs = (details) => {
        details.preventDefault()
        console.log(details.target[0].value)
        console.log(details.target[1].value)
        console.log(details.target[2].value)
        setFormDetails({
            Name: details.target[0].value,
            Email: details.target[1].value,
            Password: details.target[2].value

        })
    }

    useEffect(() => {
        console.log("Form Details :", FormDetails)
    }, [FormDetails])

    return (
        <>
            <div className="bg-blue-300 min-h-screen py-10 px-120">
                <div className="flex flex-col  bg-white/30 backdrop-invert backdrop-opacity-10 py-20 px-1">
                    <h1 className="text-6xl text-center mb-5">{title}</h1>
                    <form className="flex flex-col gap-3 px-5" onSubmit={formDocs}>
                        <label>Name:</label>
                        <input type="mail" className=" border-1 rounded-lg opacity focus:border-blue-800 focus:outline-0" placeholder="Enter your Name" />
                        <label>E-mail:</label>
                        <input type="mail" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0" placeholder="Enter your E-mail" />
                        <label>Password:</label>
                        <input type="password" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0" placeholder="Enter your Password" />
                        <button type="Submit" className=" border-blue-800 rounded-lg bg-blue-500  text-white text-lg p-0.5 cursor-pointer">{title}</button>
                        <div className="text-[12px] font-bold flex justify-end" onClick={() => { navigate("/Password") }}> {password} </div>
                    </form>
                </div >
            </div >
        </>
    )
}

export default Loginpage;