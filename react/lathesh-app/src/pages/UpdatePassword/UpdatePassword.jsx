import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaArrowLeft, FaKey, FaCheckCircle, FaShieldAlt, FaEye, FaEyeSlash, FaMoon, FaSun } from "react-icons/fa";

function UpdatePassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const [FirstName, setFirstName] = useState("");
    const [OldPassword, setOldPassword] = useState("");
    const [NewPassword, setNewPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [NewFormDetail, setNewFormDetail] = useState(null);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isDark, setIsDark] = useState(false);

    // Toggle theme
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const newFormValue = async (psw) => {
        psw.preventDefault();
        setIsSubmitting(true);
        
        // Validation
        if (!FirstName.trim()) {
            setPasswordError("Please enter your first name");
            setIsSubmitting(false);
            return;
        }
        
        if (NewPassword !== ConfirmPassword) {
            setPasswordError("New passwords do not match!");
            setIsSubmitting(false);
            return;
        }
        
        if (NewPassword.length < 8) {
            setPasswordError("New password must be at least 8 characters!");
            setIsSubmitting(false);
            return;
        }
        
        if (OldPassword === NewPassword) {
            setPasswordError("New password must be different from old password!");
            setIsSubmitting(false);
            return;
        }
        
        setPasswordError("");
        
        const updatePassword = {
            FirstName: FirstName,
            oldpassword: OldPassword,
            newpassword: NewPassword
        }
        setNewFormDetail(updatePassword);
        
        try {
            const URL = "http://localhost:5000/updatepassword";
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatePassword),
            });
            
            const result = await response.json();
            console.log(result);
            
            if (result.isUpdate) {
                setSuccessMessage("Password updated successfully! 🎉");
                setTimeout(() => {
                    navigate("/Login");
                }, 2000);
            } else {
                setPasswordError(result.message || "Incorrect password. Please try again.");
                setIsSubmitting(false);
            }
        } catch (error) {
            setPasswordError("Network error. Please try again.");
            setIsSubmitting(false);
        }
    }

    useEffect(() => {
        console.log("Current password details", NewFormDetail);
    }, [NewFormDetail]);

    // Password strength checker
    const getPasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.match(/[a-z]+/)) strength++;
        if (password.match(/[A-Z]+/)) strength++;
        if (password.match(/[0-9]+/)) strength++;
        if (password.match(/[$@#&!]+/)) strength++;
        return strength;
    };

    const passwordStrength = getPasswordStrength(NewPassword);
    const strengthColor = [
        'bg-gray-200',
        'bg-red-500',
        'bg-orange-500',
        'bg-yellow-500',
        'bg-blue-500',
        'bg-green-500'
    ][passwordStrength];
    
    const strengthText = [
        'No Password',
        'Very Weak',
        'Weak',
        'Fair',
        'Strong',
        'Very Strong'
    ][passwordStrength];

    return (
        <>
            <div className={`min-h-screen transition-colors duration-500 ${
                isDark 
                    ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
                    : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
            } flex items-center justify-center p-4 relative overflow-hidden`}>
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl animate-pulse ${
                        isDark 
                            ? 'bg-purple-500 opacity-20' 
                            : 'bg-purple-300 opacity-30'
                    }`}></div>
                    <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000 ${
                        isDark 
                            ? 'bg-blue-500 opacity-20' 
                            : 'bg-blue-300 opacity-30'
                    }`}></div>
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000 ${
                        isDark 
                            ? 'bg-indigo-500 opacity-10' 
                            : 'bg-indigo-300 opacity-20'
                    }`}></div>
                </div>

                <div className="w-full max-w-md relative z-10">
                    {/* Theme Toggle Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                                isDark 
                                    ? 'bg-white/10 text-yellow-400 hover:bg-white/20' 
                                    : 'bg-white/80 text-gray-700 hover:bg-white shadow-lg'
                            }`}
                        >
                            {isDark ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
                        </button>
                    </div>

                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 ${
                            isDark 
                                ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                                : 'bg-gradient-to-br from-blue-500 to-purple-600'
                        }`}>
                            <FaShieldAlt className="text-white text-4xl" />
                        </div>
                        <h1 className={`text-4xl sm:text-5xl font-bold mb-2 tracking-tight transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-800'
                        }`}>
                            Update Password
                        </h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-3"></div>
                        <p className={`text-sm font-light transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            Secure your account with a new password
                        </p>
                    </div>

                    {/* Form Section */}
                    <form className={`rounded-2xl shadow-2xl px-6 sm:px-8 py-8 space-y-5 transition-all duration-500 ${
                        isDark 
                            ? 'bg-white/10 backdrop-blur-lg border border-white/10' 
                            : 'bg-white shadow-2xl'
                    }`} onSubmit={newFormValue}>
                        
                        {/* Success Message */}
                        {successMessage && (
                            <div className={`border-l-4 p-4 rounded-lg flex items-center gap-2 ${
                                isDark 
                                    ? 'bg-green-500/20 border-green-400' 
                                    : 'bg-green-50 border-green-500'
                            }`}>
                                <FaCheckCircle className={isDark ? 'text-green-400' : 'text-green-500'} />
                                <p className={isDark ? 'text-green-300 font-medium' : 'text-green-700 font-medium'}>
                                    {successMessage}
                                </p>
                            </div>
                        )}

                        {/* Error Message */}
                        {passwordError && (
                            <div className={`border-l-4 p-4 rounded-lg ${
                                isDark 
                                    ? 'bg-red-500/20 border-red-400' 
                                    : 'bg-red-50 border-red-500'
                            }`}>
                                <p className={isDark ? 'text-red-300 font-medium' : 'text-red-700 font-medium'}>
                                    {passwordError}
                                </p>
                            </div>
                        )}

                        {/* First Name Field */}
                        <div>
                            <label className={`block font-semibold text-sm mb-2 uppercase tracking-wider transition-colors duration-300 ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                                First Name
                            </label>
                            <div className="relative group">
                                <FaUser className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                                    isDark 
                                        ? 'text-gray-400 group-focus-within:text-blue-400' 
                                        : 'text-gray-400 group-focus-within:text-blue-500'
                                }`} />
                                <input 
                                    type="text" 
                                    value={FirstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter your first name" 
                                    className={`w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                                        isDark 
                                            ? 'bg-white/5 border border-white/10 text-white placeholder-gray-400 backdrop-blur-sm uppercase' 
                                            : 'bg-white border border-gray-300 text-gray-700 placeholder-gray-400 uppercase'
                                    }`}
                                    required 
                                />
                            </div>
                        </div>

                        {/* Old Password Field */}
                        <div>
                            <label className={`block font-semibold text-sm mb-2 uppercase tracking-wider transition-colors duration-300 ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                                Current Password
                            </label>
                            <div className="relative group">
                                <FaLock className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                                    isDark 
                                        ? 'text-gray-400 group-focus-within:text-blue-400' 
                                        : 'text-gray-400 group-focus-within:text-blue-500'
                                }`} />
                                <input 
                                    type={showOldPassword ? "text" : "password"}
                                    value={OldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    placeholder="Enter your current password" 
                                    className={`w-full pl-10 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                                        isDark 
                                            ? 'bg-white/5 border border-white/10 text-white placeholder-gray-400 backdrop-blur-sm' 
                                            : 'bg-white border border-gray-300 text-gray-700 placeholder-gray-400'
                                    }`}
                                    required 
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowOldPassword(!showOldPassword)}
                                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                                        isDark 
                                            ? 'text-gray-400 hover:text-white' 
                                            : 'text-gray-400 hover:text-gray-600'
                                    }`}
                                >
                                    {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* New Password Field */}
                        <div>
                            <label className={`block font-semibold text-sm mb-2 uppercase tracking-wider transition-colors duration-300 ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                                New Password
                            </label>
                            <div className="relative group">
                                <FaLock className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                                    isDark 
                                        ? 'text-gray-400 group-focus-within:text-blue-400' 
                                        : 'text-gray-400 group-focus-within:text-blue-500'
                                }`} />
                                <input 
                                    type={showNewPassword ? "text" : "password"}
                                    value={NewPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Create a new password" 
                                    className={`w-full pl-10 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                                        isDark 
                                            ? 'bg-white/5 border border-white/10 text-white placeholder-gray-400 backdrop-blur-sm' 
                                            : 'bg-white border border-gray-300 text-gray-700 placeholder-gray-400'
                                    }`}
                                    required 
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                                        isDark 
                                            ? 'text-gray-400 hover:text-white' 
                                            : 'text-gray-400 hover:text-gray-600'
                                    }`}
                                >
                                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            
                            {/* Password Strength Indicator */}
                            {NewPassword && (
                                <div className="mt-2">
                                    <div className="flex items-center gap-2">
                                        <div className={`flex-1 h-1.5 rounded-full overflow-hidden ${
                                            isDark ? 'bg-gray-600' : 'bg-gray-200'
                                        }`}>
                                            <div 
                                                className={`h-full ${strengthColor} transition-all duration-500`}
                                                style={{ width: `${(passwordStrength / 5) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className={`text-xs font-medium ${
                                            passwordStrength <= 2 ? 'text-red-400' :
                                            passwordStrength === 3 ? 'text-yellow-400' :
                                            'text-green-400'
                                        }`}>
                                            {strengthText}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Confirm New Password Field */}
                        <div>
                            <label className={`block font-semibold text-sm mb-2 uppercase tracking-wider transition-colors duration-300 ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                                Confirm New Password
                            </label>
                            <div className="relative group">
                                <FaLock className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                                    isDark 
                                        ? 'text-gray-400 group-focus-within:text-blue-400' 
                                        : 'text-gray-400 group-focus-within:text-blue-500'
                                }`} />
                                <input 
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={ConfirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Re-enter new password" 
                                    className={`w-full pl-10 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                                        isDark 
                                            ? 'bg-white/5 border border-white/10 text-white placeholder-gray-400 backdrop-blur-sm' 
                                            : 'bg-white border border-gray-300 text-gray-700 placeholder-gray-400'
                                    }`}
                                    required 
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                                        isDark 
                                            ? 'text-gray-400 hover:text-white' 
                                            : 'text-gray-400 hover:text-gray-600'
                                    }`}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {ConfirmPassword && NewPassword !== ConfirmPassword && (
                                <p className="text-red-400 text-xs mt-1">Passwords do not match</p>
                            )}
                            {ConfirmPassword && NewPassword === ConfirmPassword && NewPassword && (
                                <p className="text-green-400 text-xs mt-1">✓ Passwords match</p>
                            )}
                        </div>

                        {/* Password Requirements */}
                        <div className={`rounded-lg p-4 transition-colors duration-300 ${
                            isDark ? 'bg-white/5' : 'bg-gray-50'
                        }`}>
                            <p className={`text-xs font-semibold uppercase tracking-wide mb-2 transition-colors duration-300 ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                Password Requirements:
                            </p>
                            <ul className={`text-xs space-y-1 transition-colors duration-300 ${
                                isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                <li className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${
                                        NewPassword.length >= 8 ? 'bg-green-500' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                                    }`}></span>
                                    At least 8 characters long
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${
                                        NewPassword !== OldPassword && NewPassword ? 'bg-green-500' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                                    }`}></span>
                                    Must be different from current password
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${
                                        NewPassword === ConfirmPassword && NewPassword ? 'bg-green-500' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                                    }`}></span>
                                    Passwords must match
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${
                                        NewPassword.match(/[A-Z]/) && NewPassword.match(/[a-z]/) && NewPassword.match(/[0-9]/) ? 'bg-green-500' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                                    }`}></span>
                                    Include uppercase, lowercase, and numbers
                                </li>
                            </ul>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3.5 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Updating Password...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    <FaKey />
                                    Update Password
                                </span>
                            )}
                        </button>

                        {/* Back to Login Button */}
                        <button 
                            type="button" 
                            className={`w-full flex items-center justify-center gap-2 font-medium transition duration-200 hover:underline py-2 ${
                                isDark 
                                    ? 'text-gray-400 hover:text-white' 
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                            onClick={() => { navigate("/login") }}
                        >
                            <FaArrowLeft className="text-sm" />
                            Back to Login
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="text-center mt-6">
                        <p className={`text-xs transition-colors duration-300 ${
                            isDark ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                            Secured with 256-bit encryption
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdatePassword;