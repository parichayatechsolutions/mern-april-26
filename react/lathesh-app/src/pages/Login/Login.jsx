import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const submit = "SIGN IN"
    const Login = "LOGIN"
    const forgot = "Update Password?"
    const site = "To MySite.com"
    const incorrect = "Incorrect Password!"
    const [FormDetails, setFormDetails] = useState(null)
    const [visible, setVisible] = useState(false)

    const formValues = async (details) => {
        details.preventDefault()
        console.log(details.target[0].value)
        console.log(details.target[1].value)
        console.log(details.target[2].value)
        const formdata = {
            FirstName: details.target[0].value,
            Email: details.target[1].value,
            Password: details.target[2].value
        }
        setFormDetails(formdata)
        const URL = "http://localhost:5000/Login"
        console.log(FormDetails)
        const response = await fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formdata),
            });
        const result = await response.json();
        console.log(result)

        if (result.islogin) {
            navigate("/Dashboard")
        }
        else {
            setVisible(!visible);
            setTimeout(()=>setVisible(visible),8000);
        }
    }

    useEffect(() => {
        console.log(FormDetails);
    }, [FormDetails])

    useEffect(() => {
        console.log("FormDetail are", FormDetails)
    }, [FormDetails])

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4 relative overflow-hidden">
                
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
                    
                    {/* Subtle Pattern Overlay */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: `radial-gradient(circle at 20px 20px, #d97706 2px, transparent 2px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="w-full max-w-md relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 bg-gradient-to-r from-amber-400 to-orange-500">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 tracking-tight">
                            {Login}
                        </h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full mb-3"></div>
                        <p className="text-gray-600 text-base font-medium">{site}</p>
                    </div>

                    {/* Form Section */}
                    <form className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl px-6 sm:px-8 py-8 space-y-6 border border-white/50" onSubmit={formValues}>
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wider">
                                Full Name
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter your full name" 
                                className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200 text-gray-700 placeholder-gray-400"
                                required 
                            />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wider">
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                placeholder="your@email.com" 
                                className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200 text-gray-700 placeholder-gray-400"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wider">
                                Password
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter your password" 
                                className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200 text-gray-700 placeholder-gray-400"
                                required
                            />
                        </div>

                        {/* Error Message & Forgot Password */}
                        <div className="space-y-3">
                            {visible && (
                                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-lg flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <p className="text-red-700 text-sm font-medium">{incorrect}</p>
                                </div>
                            )}
                            
                            <div className="flex justify-end">
                                <button 
                                    type="button" 
                                    className="text-sm text-amber-600 hover:text-amber-800 font-medium transition duration-200 hover:underline focus:outline-none"
                                    onClick={() => { navigate("/UpdatePassword") }}
                                >
                                    {forgot}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-xl transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 text-lg shadow-lg"
                        >
                            {submit}
                        </button>

                        {/* Additional Info */}
                        <p className="text-center text-gray-400 text-sm mt-4">
                            Secure login • Protected by encryption
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;