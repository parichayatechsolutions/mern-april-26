import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Password() {

    const navigate = useNavigate()
    const title = "Update Password"
    const password = "Forgot Password"
    const backPage = "Back"
    const [passDetails, setpassDetails] = useState(null)

    const passDocs = (passdetails) => {
        passdetails.preventDefault()
        console.log(passdetails.target[0].value)
        console.log(passdetails.target[1].value)
        console.log(passdetails.target[2].value)
        setpassDetails({
            Email: passdetails.target[1].value,
            Password: passdetails.target[2].value,
            ConfirmPassword: passdetails.target[3].value
        })
    }

    useEffect(() => {
        if (passDetails) {
            console.log(passDetails);
            alert("Password Updated")
        }
    }, [passDetails])

    return (
        <>
            <div className="bg-blue-500 min-h-screen py-20 px-10 md:px-40 sm:px-70 lg:px-90 xl:px-130">
                <div className="flex flex-col bg-white/30 backdrop-invert backdrop-opacity-10 py-20">
                    <h1 className="text-5xl text-center mb-5">{password}</h1>
                    <form className="flex flex-col gap-3 px-5" onSubmit={passDocs}>
                        <label>E-mail:</label>
                        <input type="mail" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0 px-1 py-0.5" placeholder="Enter your E-mail" />
                        <label>Old Password:</label>
                        <input type="password" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0 px-1 py-0.5" placeholder="Enter your Password" />
                        <label>New Password:</label>
                        <input type="password" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0 px-1 py-0.5" placeholder="Enter your Password" />
                        <button type="Submit"  className=" border-blue-800 rounded-lg bg-blue-500  text-white text-lg p-0.5 cursor-pointer">{title}</button>
                        <button type="button" className=" border-blue-800 rounded-lg bg-blue-500  text-white text-lg p-0.5 cursor-pointer" onClick={() => { navigate("/login") }}>{backPage}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Password;
