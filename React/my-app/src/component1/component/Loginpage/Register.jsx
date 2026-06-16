import "./Loginp.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PiSignIn, PiUser, PiEnvelope, PiPhone, PiLock } from "react-icons/pi";

function Register() {
    const navigate = useNavigate()
    const heading = "Create Your Account"
    const [FirstName, setFirstName] = useState("")
    const [SecondName, setSecondName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Password, setPassword] = useState("")
    const button = "Create Account"
    const signin = "Already have an account? Log in"

    const [RegDetails, setRegDetails] = useState(null)
    const [data, setData] = useState({
        FirstName: "",
        SecondName: "",
        Email: "",
        Phone: "",
        Password: "",
        ConfirmPassword: "",
    }
    );

    const regDocs = async (regdetails) => {
        regdetails.preventDefault()
        console.log(regdetails.target[0].value)
        console.log(regdetails.target[1].value)
        console.log(regdetails.target[2].value)
        console.log(regdetails.target[3].value)
        console.log(regdetails.target[4].value)
        console.log(regdetails.target[5].value)
        const UpDateDetails = {
            FirstName: regdetails.target[0].value,
            SecondName: regdetails.target[1].value,
            Email: regdetails.target[2].value,
            Phone: regdetails.target[3].value,
            Password: regdetails.target[4].value,
            ConfirmPassword: regdetails.target[5].value
        }
        setRegDetails(UpDateDetails)

        const URL = "http://localhost:5000/register"
        const response = await fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(UpDateDetails),
            });
        console.log(response);

        regdetails.target.reset();
    }

    useEffect(() => {
        if (RegDetails) {
            console.log(RegDetails);
            const passwordMatch = (RegDetails.Password == RegDetails.ConfirmPassword) ? alert("Password matched! \nUser registered Successfully") : alert("Password not matched");
        }
    }, [RegDetails])

    useEffect(() => {
        console.log("Form Details :", RegDetails)
    }, [RegDetails])

    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
                <div className="w-full max-w-2xl bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8 md:p-10 transition-all duration-300 hover:shadow-indigo-500/20">
                    
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        {/* <div className="inline-block p-3 bg-indigo-500/10 rounded-full mb-4">
                            <PiUser className="text-4xl text-indigo-400" />
                        </div> */}
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            {heading}
                        </h2>
                        <p className="text-indigo-300/70 mt-2 text-sm">
                            Join us and start your journey today
                        </p>
                    </div>

                    <form onSubmit={regDocs} className="space-y-5">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                                    <PiUser className="text-indigo-400" />
                                    First Name
                                </label>
                                <input 
                                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none" 
                                    type="text" 
                                    placeholder="First Name" 
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                                    <PiUser className="text-indigo-400" />
                                    Last Name
                                </label>
                                <input 
                                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none" 
                                    type="text" 
                                    placeholder="Last Name" 
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                                <PiEnvelope className="text-indigo-400" />
                                Email Address
                            </label>
                            <input 
                                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none" 
                                type="email" 
                                placeholder="example@email.com" 
                                required
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                                <PiPhone className="text-indigo-400" />
                                Phone Number
                            </label>
                            <input 
                                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none" 
                                type="tel" 
                                placeholder="Phone" 
                                required
                            />
                        </div>

                        {/* Password Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                                    <PiLock className="text-indigo-400" />
                                    Password
                                </label>
                                <input 
                                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none" 
                                    type="password" 
                                    placeholder="••••••••" 
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                                    <PiLock className="text-indigo-400" />
                                    Confirm Password
                                </label>
                                <input 
                                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none" 
                                    type="password" 
                                    placeholder="••••••••" 
                                    required
                                    
                                />
                                
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button 
                                className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-base"
                                type="submit"
                            >
                                <PiSignIn className="text-xl" />
                                {button}
                            </button>
                        </div>

                        {/* Login Link */}
                        <div className="text-center pt-2">
                            <button 
                                type="button" 
                                className="text-indigo-300/80 hover:text-indigo-300 text-sm transition-colors duration-200 hover:underline underline-offset-4"
                                onClick={() => { navigate("/log") }}
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

export default Register