import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    AiOutlineUser, 
    AiOutlineMail, 
    AiOutlineLock, 
    AiOutlinePhone, 
    AiOutlineCheckCircle,
    AiOutlineLoading3Quarters,
    AiOutlineArrowLeft,
    AiOutlineEye,
    AiOutlineEyeInvisible
} from "react-icons/ai";

const Register = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [RegDetails, setRegDetails] = useState(null);

    const regDocs = async (regdetails) => {
        regdetails.preventDefault();
        setIsLoading(true);

        const UpDateDetails = {
            FirstName: regdetails.target[0].value,
            SecondName: regdetails.target[1].value,
            Email: regdetails.target[2].value,
            Phone: regdetails.target[3].value,
            Password: regdetails.target[4].value,
            ConfirmPassword: regdetails.target[5].value
        };
        setRegDetails(UpDateDetails);

        const URL = "http://localhost:5000/register";
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(UpDateDetails),
            });
            console.log(response);
            regdetails.target.reset();
            navigate("/Login");
        } catch (error) {
            console.error("Registration error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (RegDetails) {
            console.log(RegDetails);
            const passwordMatch = (RegDetails.Password == RegDetails.ConfirmPassword) 
                ? alert("Password not matched") 
                : alert("Password matched! \nUser registered Successfully") ;
        }
    }, [RegDetails]);

    useEffect(() => {
        console.log("Form Details :", RegDetails);
    }, [RegDetails]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-2xl shadow-lg mb-4">
                        <AiOutlineUser className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Create Account</h1>
                    <p className="text-gray-500 mt-2 font-medium">Join us and get started</p>
                </div>

                {/* Form Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-indigo-100/50 p-8 border border-white/50">
                    <form onSubmit={regDocs} className="space-y-4">
                        {/* First Name Field */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <AiOutlineUser className="text-indigo-500" />
                                First Name
                            </label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                                placeholder="Enter your first name"
                                required
                            />
                        </div>

                        {/* Second Name Field */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <AiOutlineUser className="text-indigo-500" />
                                Last Name
                            </label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                                placeholder="Enter your last name"
                                required
                            />
                        </div>

                        {/* Email Field */}
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

                        {/* Phone Field */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <AiOutlinePhone className="text-indigo-500" />
                                Phone Number
                            </label>
                            <input 
                                type="tel" 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <AiOutlineLock className="text-indigo-500" />
                                Password
                            </label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 placeholder:text-gray-400 pr-12"
                                    placeholder="Create a password"
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

                        {/* Confirm Password Field */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <AiOutlineCheckCircle className="text-indigo-500" />
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input 
                                    type={showConfirmPassword ? "text" : "password"} 
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 placeholder:text-gray-400 pr-12"
                                    placeholder="Re-enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
                                >
                                    {showConfirmPassword ? <AiOutlineEyeInvisible className="w-5 h-5" /> : <AiOutlineEye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-300 transition-all duration-200 shadow-lg shadow-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                        >
                            {isLoading ? (
                                <>
                                    <AiOutlineLoading3Quarters className="animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                "Create Account"
                            )}
                        </button>

                        {/* Login Link */}
                        <div className="text-center pt-3">
                            <button
                                type="button"
                                onClick={() => navigate("/Login")}
                                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium hover:underline transition-all flex items-center justify-center gap-1"
                            >
                                <AiOutlineArrowLeft className="text-xs" />
                                Already have an account? Sign In
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="text-center mt-6">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        <span className="inline-block w-1 h-1 bg-green-400 rounded-full"></span>
                        Your data is protected and secure
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;