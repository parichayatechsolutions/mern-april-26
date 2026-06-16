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
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 tracking-tight">
                            {Login}
                        </h1>
                        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600 text-lg font-medium">{site}</p>
                    </div>

                    {/* Form Section */}
                    <form className="bg-white rounded-xl shadow-2xl px-6 sm:px-8 py-8 space-y-6" onSubmit={formValues}>
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
                                Full Name
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter your full name" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-700 placeholder-gray-400"
                                required 
                            />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                placeholder="your@email.com" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-700 placeholder-gray-400"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
                                Password
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter your password" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-700 placeholder-gray-400"
                                required
                            />
                        </div>

                        {/* Error Message & Forgot Password */}
                        <div className="space-y-3">
                            {visible && (
                                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                                    <p className="text-red-700 text-sm font-medium">{incorrect}</p>
                                </div>
                            )}
                            
                            <div className="flex justify-end">
                                <button 
                                    type="button" 
                                    className="text-sm text-blue-600 hover:text-blue-800 font-medium transition duration-200 hover:underline focus:outline-none"
                                    onClick={() => { navigate("/UpdatePassword") }}
                                >
                                    {forgot}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg"
                        >
                            {submit}
                        </button>

                        {/* Additional Info */}
                        <p className="text-center text-gray-500 text-sm mt-4">
                            Secure login • Protected by encryption
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;