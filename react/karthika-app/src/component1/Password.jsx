import { useNavigate } from "react-router-dom"

function Password() {

    const navigate = useNavigate()
    const title = "Update Password"
    const password = "Forgot Password"
    const backPage="Back"

    return (
        <>
            <div className="bg-blue-300 min-h-screen py-20 px-120">
                <div className="flex flex-col  bg-white/30 backdrop-invert backdrop-opacity-10 py-20 px-1">
                    <h1 className="text-5xl text-center mb-5">{password}</h1>
                    <form className="flex flex-col gap-3 px-5">
                        <label>E-mail:</label>
                        <input type="mail" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0" placeholder="Enter your E-mail" />
                        <label>Old Password:</label>
                        <input type="password" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0" placeholder="Enter your Password" />
                        <label>New Password:</label>
                        <input type="password" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0" placeholder="Enter your Password" />
                        <button type="Submit" className=" border-blue-800 rounded-lg bg-blue-500  text-white text-lg p-0.5 cursor-pointer">{title}</button>
                        <button className=" border-blue-800 rounded-lg bg-blue-500  text-white text-lg p-0.5 cursor-pointer" onClick={() => { navigate("/login") }}>{backPage}</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Password;
