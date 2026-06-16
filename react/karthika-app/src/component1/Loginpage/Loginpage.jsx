import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    AiOutlineUser, 
    AiOutlineMail, 
    AiOutlineLock, 
    AiOutlineEye, 
    AiOutlineEyeInvisible, 
    AiOutlineExclamationCircle, 
    AiOutlineLoading3Quarters 
} from "react-icons/ai";

const Loginpage = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [FormDetails, setFormDetails] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const formDocs = async (details) => {
        details.preventDefault();
        setIsLoading(true);
        setErrorMessage("");

        const loginDetails = {
            FirstName: details.target[0].value,
            Email: details.target[1].value,
            Password: details.target[2].value
        };
        setFormDetails(loginDetails);

        const URL = "http://localhost:5000/login";
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginDetails),
            });
            const result = await response.json();
            
            if (result.islogin) {
                navigate("/Dashboard");
            } else {
                setErrorMessage("Invalid credentials. Please try again.");
                setVisible(true);
                setTimeout(() => {
                    setVisible(false);
                    setErrorMessage("");
                }, 5000);
            }
        } catch (error) {
            setErrorMessage("Connection error. Please try again.");
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
                setErrorMessage("");
            }, 5000);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        console.log("Form Details :", FormDetails);
    }, [FormDetails]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-2xl shadow-lg mb-4">
                        <AiOutlineLock className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Welcome Back</h1>
                    <p className="text-gray-500 mt-2 font-medium">Sign in to continue to your dashboard</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-indigo-100/50 p-8 border border-white/50">
                    <form onSubmit={formDocs} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <AiOutlineUser className="text-indigo-500" />
                                Full Name
                            </label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <AiOutlineMail className="text-indigo-500" />
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <AiOutlineLock className="text-indigo-500" />
                                Password
                            </label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 placeholder:text-gray-400 pr-12"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
                                >
                                    {showPassword ? <AiOutlineEyeInvisible className="w-5 h-5" /> : <AiOutlineEye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {visible && (
                            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm animate-pulse">
                                <AiOutlineExclamationCircle className="text-red-500 flex-shrink-0" />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-300 transition-all duration-200 shadow-lg shadow-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <AiOutlineLoading3Quarters className="animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </button>

                        <div className="text-center pt-2">
                            <button
                                type="button"
                                onClick={() => navigate("/Password")}
                                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium hover:underline transition-all"
                            >
                                Forgot your password?
                            </button>
                        </div>
                    </form>
                </div>

                <div className="text-center mt-6">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        <span className="inline-block w-1 h-1 bg-green-400 rounded-full"></span>
                        Secured with industry-standard encryption
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;