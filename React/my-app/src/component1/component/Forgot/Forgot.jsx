import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    AiOutlineUser,
    AiOutlineLock,
    AiOutlineKey,
    AiOutlineLoading3Quarters,
    AiOutlineArrowLeft,
    AiOutlineCheckCircle
} from "react-icons/ai";
import { PiArrowLeft, PiKey, PiUser, PiLock, PiCheckCircle } from "react-icons/pi";

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
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
            <div className="w-full max-w-md bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8 md:p-10 transition-all duration-300 hover:shadow-indigo-500/20">

                {/* Header Section */}
                <div className="text-center mb-8">
                    {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl mb-4 border border-white/10">
                        <PiKey className="w-10 h-10 text-indigo-400" />
                    </div> */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Update Password
                    </h2>
                    <p className="text-indigo-300/70 mt-2 text-sm">
                        Change your account password securely
                    </p>
                </div>

                {/* Form Card */}
                <form onSubmit={passDocs} className="space-y-5">
                    {/* First Name Field */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                            <PiUser className="text-indigo-400" />
                            First Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none"
                            placeholder="Enter your first name"
                            required
                        />
                    </div>

                    {/* Old Password Field */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                            <PiLock className="text-indigo-400" />
                            Old Password
                        </label>
                        <div className="relative">
                            <input
                                type={showOldPassword ? "text" : "password"}
                                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none pr-12"
                                placeholder="Enter your old password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowOldPassword(!showOldPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-300 transition-colors"
                            >
                            </button>
                        </div>
                    </div>

                    {/* New Password Field */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                            <PiCheckCircle className="text-indigo-400" />
                            New Password
                        </label>
                        <div className="relative">
                            <input
                                type={showNewPassword ? "text" : "password"}
                                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:bg-white/10 transition-all duration-200 outline-none pr-12"
                                placeholder="Enter your new password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-300 transition-colors"
                            >
                            </button>
                        </div>
                    </div>

                    {/* Error Message */}
                    {visible && (
                        <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                            <PiKey className="text-red-400 flex-shrink-0" />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    {/* Update Password Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <AiOutlineLoading3Quarters className="animate-spin" />
                                    Updating Password...
                                </>
                            ) : (
                                <>
                                    <PiKey className="text-xl" />
                                    Update Password
                                </>
                            )}
                        </button>
                    </div>

                    {/* Back Button */}
                    <div className="text-center pt-2">
                        <button
                            type="button"
                            className="text-indigo-300/80 hover:text-indigo-300 text-sm transition-colors duration-200 hover:underline underline-offset-4"
                            onClick={() => { navigate("/Log") }}
                        >
                            Click to Login Back
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Password;