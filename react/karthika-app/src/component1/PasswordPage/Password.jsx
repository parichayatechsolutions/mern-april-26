import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    AiOutlineUser, 
    AiOutlineLock, 
    AiOutlineKey,
    AiOutlineLoading3Quarters,
    AiOutlineArrowLeft,
    AiOutlineEye,
    AiOutlineEyeInvisible,
    AiOutlineCheckCircle
} from "react-icons/ai";

function Password() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [passDetails, setPassDetails] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [visible, setVisible] = useState(false);

    const passDocs = async (passdetails) => {
        passdetails.preventDefault();
        setIsLoading(true);
        setErrorMessage("");

        const updatePass = {
            FirstName: passdetails.target[0].value,
            oldpassword: passdetails.target[1].value,
            newpassword: passdetails.target[2].value
        };
        setPassDetails(updatePass);

        const URL = "http://localhost:5000/updatepassword";
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatePass),
            });
            const result = await response.json();
            console.log(result);

            if (result.isUpdate) {
                alert("Password Updated Successfully!");
                navigate("/Login");
            } else {
                setErrorMessage("Incorrect password. Please try again.");
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
        console.log("Current password details", passDetails);
    }, [passDetails]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-2xl shadow-lg mb-4">
                        <AiOutlineKey className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Update Password</h1>
                    <p className="text-gray-500 mt-2 font-medium">Change your account password</p>
                </div>

                {/* Form Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-indigo-100/50 p-8 border border-white/50">
                    <form onSubmit={passDocs} className="space-y-5">
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

                        {/* Old Password Field */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <AiOutlineLock className="text-indigo-500" />
                                Old Password
                            </label>
                            <div className="relative">
                                <input 
                                    type={showOldPassword ? "text" : "password"} 
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 placeholder:text-gray-400 pr-12"
                                    placeholder="Enter your old password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowOldPassword(!showOldPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
                                >
                                    {showOldPassword ? <AiOutlineEyeInvisible className="w-5 h-5" /> : <AiOutlineEye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* New Password Field */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <AiOutlineCheckCircle className="text-indigo-500" />
                                New Password
                            </label>
                            <div className="relative">
                                <input 
                                    type={showNewPassword ? "text" : "password"} 
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 placeholder:text-gray-400 pr-12"
                                    placeholder="Enter your new password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
                                >
                                    {showNewPassword ? <AiOutlineEyeInvisible className="w-5 h-5" /> : <AiOutlineEye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Error Message */}
                        {visible && (
                            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm animate-pulse">
                                <AiOutlineKey className="text-red-500 flex-shrink-0" />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        {/* Update Password Button */}
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-300 transition-all duration-200 shadow-lg shadow-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <AiOutlineLoading3Quarters className="animate-spin" />
                                    Updating Password...
                                </>
                            ) : (
                                "Update Password"
                            )}
                        </button>

                        {/* Back Button */}
                        <button 
                            type="button"
                            onClick={() => navigate("/Login")}
                            className="w-full py-3.5 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 transition-all duration-200 flex items-center justify-center gap-2 border border-gray-200"
                        >
                            <AiOutlineArrowLeft />
                            Back to Login
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <div className="text-center mt-6">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        <span className="inline-block w-1 h-1 bg-green-400 rounded-full"></span>
                        Your password is encrypted and secure
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Password;