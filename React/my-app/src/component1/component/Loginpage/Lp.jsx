import "./Loginp.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { MdLogin } from "react-icons/md";
import { PiUser, PiEnvelope, PiLock, PiCheckCircle } from "react-icons/pi";


const Loginpage = () => {
    const navigate = useNavigate()
    const heading = "Welcome"
    const n = "First Name"
    const n1 = "Last Name"
    const mail = "Email Address"
    const p = "Password"
    const forgot = "Forgot Password?"
    const button = "Log In"
    const signin = "Don't have an account? Register"
    const incorrect = "Incorrect Password!"
    const [visible, setVisible] = useState(false)
    const [FormDetails, setFormDetails] = useState(null)

    const formDocs = async (details) => {
        details.preventDefault()
        console.log(details.target[0].value)
        console.log(details.target[1].value)
        console.log(details.target[2].value)
        const loginDetails = {
            FirstName: details.target[0].value,
            Email: details.target[1].value,
            Password: details.target[2].value
        }
        setFormDetails(loginDetails)

        const URL = "http://localhost:5000/login"
        console.log(FormDetails)
        const response = await fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginDetails),
            });
        const result = await response.json();
        console.log(result)
        if (result.islogin) {
            navigate("/Dashboard")
        }
        else {
            setVisible(!visible);
            setTimeout(() => setVisible(visible), 8000);
        }
    }

    useEffect(() => {
        console.log("Form Details :", FormDetails)
    }, [FormDetails])

    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
                <div className="w-full max-w-2xl bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8 md:p-10 transition-all duration-300 hover:shadow-indigo-500/20">
                    
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        {/* <div className="inline-block p-3 bg-indigo-500/10 rounded-full mb-4">
                            <MdLogin className="text-4xl text-indigo-400" />
                        </div> */}
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            {heading}
                        </h2>
                        <p className="text-indigo-300/70 mt-2 text-sm">
                            Log In to continue your journey
                        </p>
                    </div>

                    <form onSubmit={formDocs} className="space-y-5">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                                    <PiUser className="text-indigo-400" />
                                    {n}
                                </label>
                                <input 
                                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none" 
                                    type="text" 
                                    placeholder="Your First name" 
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                                    <PiUser className="text-indigo-400" />
                                    {n1}
                                </label>
                                <input 
                                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none" 
                                    type="text" 
                                    placeholder="Your Last name" 
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                                <PiEnvelope className="text-indigo-400" />
                                {mail}
                            </label>
                            <input 
                                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none" 
                                type="email" 
                                placeholder="example@email.com" 
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                                <PiLock className="text-indigo-400" />
                                {p}
                            </label>
                            <input 
                                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none" 
                                type="password" 
                                placeholder="••••••••" 
                                required
                            />
                        </div>

                        {/* Mid Section - Remember Me & Forgot Password */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2">
                            <div className="flex items-center gap-2">
                                {/* <input 
                                    className="w-4 h-4 accent-indigo-500 rounded border-white/20 bg-white/5 focus:ring-2 focus:ring-indigo-400" 
                                    type="checkbox" 
                                    id="check"
                                /> */}
                                {/* <label className="text-indigo-200/80 text-sm hover:text-indigo-200 cursor-pointer transition-colors">
                                    {log}
                                </label> */}
                            </div>
                            <button 
                                type="button" 
                                className="text-indigo-300/70 hover:text-indigo-300 text-sm transition-colors duration-200 hover:underline underline-offset-4"
                                onClick={() => { navigate("/forgot") }}
                            >
                                {forgot}
                            </button>
                        </div>

                        {/* Error Message */}
                        <div className="flex flex-col justify-between font-bold">
                            {visible && (
                                <div className="flex justify-center">
                                    <span className="text-red-400 text-sm bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">
                                        {incorrect}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button 
                                className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-base"
                                type="submit"
                            >
                                <MdLogin className="text-xl" />
                                {button}
                            </button>
                        </div>

                        {/* Register Link */}
                        <div className="text-center pt-2">
                            <button 
                                type="button" 
                                className="text-indigo-300/80 hover:text-indigo-300 text-sm transition-colors duration-200 hover:underline underline-offset-4"
                                onClick={() => { navigate("/reg") }}
                            >
                                {signin}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Loginpage