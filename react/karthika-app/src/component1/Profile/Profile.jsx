import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
    AiOutlineUser, 
    AiOutlineMail, 
    AiOutlinePhone, 
    AiOutlineCalendar, 
    AiOutlineTeam, 
    AiOutlineHome,
    AiOutlineEdit,
    AiOutlineArrowLeft,
    AiOutlineSave,
    AiOutlineClose,
    AiOutlineLoading3Quarters,
    AiOutlineIdcard,
    AiOutlineCamera
} from "react-icons/ai";

function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [profile, setProfile] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [photoFile, setPhotoFile] = useState(null);

    const [FirstName, setFirstName] = useState("");
    const [SecondName, setSecondName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [DOB, setDOB] = useState("");
    const [Gender, setGender] = useState("");
    const [Address, setAddress] = useState("");

    const getUserProfile = async (id) => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:5000/users/' + id);
            const result = await response.json();
            console.log(result);
            setProfile(result);
            if (result.photo) {
                setPhotoPreview(result.photo);
            }
            return result;
        } catch (error) {
            console.error("Error fetching profile:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        console.log(location.search);
        if (location.search) {
            const profileData = getUserProfile(location.search.slice(1));
            console.log(profileData);
        }
    }, [location]);

    useEffect(() => {
        if (profile) {
            console.log(profile);
            setFirstName(profile.FirstName || "");
            setSecondName(profile.SecondName || "");
            setAddress(profile.Address || "");
            setDOB(profile.DOB || "");
            setEmail(profile.Email || "");
            setPhone(profile.Phone || "");
            setGender(profile.Gender || "");
            if (profile.photo) {
                setPhotoPreview(profile.photo);
            }
        }
    }, [profile]);

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result);
                setPhotoFile(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleSecondName = (event) => {
        setSecondName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePhone = (event) => {
        setPhone(event.target.value);
    };
    const handleDOB = (event) => {
        setDOB(event.target.value);
    };
    const handleGender = (event) => {
        setGender(event.target.value);
    };
    const handleAddress = (event) => {
        setAddress(event.target.value);
    };
const updateUser = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    const updateData = {
        FirstName: FirstName,
        SecondName: SecondName,
        Email: Email,
        Phone: Phone,
        DOB: DOB,
        Gender: Gender,
        Address: Address
    };

    const URL = `http://localhost:5000/users/${location.search.slice(1)}`;
    console.log("Sending update:", updateData);
    
    try {
        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });
        
        const result = await response.json();
        console.log("Response:", result);
        
        if (response.status === 200) {
            await getUserProfile(location.search.slice(1));
            setVisible(false);
            alert("Profile updated successfully!");
        } else {
            alert(result.message || "Failed to update profile");
        }
    } catch (error) {
        console.error("Error updating profile:", error);
        alert("Error updating profile. Please try again.");
    } finally {
        setIsSaving(false);
    }
};

    const InfoItem = ({ icon: Icon, label, value }) => (
        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="p-2 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg">
                <Icon className="text-indigo-600 text-lg" />
            </div>
            <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</p>
                <p className="text-lg font-semibold text-gray-800 mt-0.5">{value || "Not provided"}</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-white/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-xl">
                                <AiOutlineIdcard className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Profile
                            </h1>
                        </div>
                        <button 
                            onClick={() => navigate("/Dashboard")} 
                            className="flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-gray-500/30"
                        >
                            <AiOutlineArrowLeft />
                            Back to Dashboard
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {isLoading ? (
                    <div className="flex items-center justify-center py-20">
                        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-indigo-500" />
                    </div>
                ) : (
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-indigo-100/50 border border-white/50 overflow-hidden">
                        {/* Profile Header */}
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8">
                            <div className="flex items-center gap-6">
                                {/* Profile Photo with Camera Icon at Bottom-Right */}
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full border-4 border-white/30 overflow-hidden bg-white/20 flex items-center justify-center">
                                        {photoPreview ? (
                                            <img 
                                                src={photoPreview} 
                                                alt="Profile" 
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <AiOutlineUser className="w-12 h-12 text-white" />
                                        )}
                                    </div>
                                    {/* Camera icon at bottom-right - only visible in edit mode */}
                                    {visible && (
                                        <label 
                                            htmlFor="photo-upload" 
                                            className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-colors border-2 border-white"
                                        >
                                            <AiOutlineCamera className="w-4 h-4 text-indigo-600" />
                                            <input
                                                id="photo-upload"
                                                type="file"
                                                accept="image/*"
                                                onChange={handlePhotoChange}
                                                className="hidden"
                                            />
                                        </label>
                                    )}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">
                                        {profile?.FirstName} {profile?.SecondName}
                                    </h2>
                                    <p className="text-indigo-100 mt-1">{profile?.Email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Profile Content */}
                        <div className="p-6">
                            {!visible ? (
                                <>
                                    {/* View Mode */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <InfoItem icon={AiOutlineUser} label="First Name" value={profile?.FirstName} />
                                        <InfoItem icon={AiOutlineUser} label="Last Name" value={profile?.SecondName} />
                                        <InfoItem icon={AiOutlineMail} label="Email Address" value={profile?.Email} />
                                        <InfoItem icon={AiOutlinePhone} label="Phone Number" value={profile?.Phone} />
                                        <InfoItem icon={AiOutlineCalendar} label="Date of Birth" value={profile?.DOB} />
                                        <InfoItem icon={AiOutlineTeam} label="Gender" value={profile?.Gender} />
                                        <div className="md:col-span-2">
                                            <InfoItem icon={AiOutlineHome} label="Address" value={profile?.Address} />
                                        </div>
                                    </div>

                                    {/* Edit Button */}
                                    <div className="flex justify-end mt-6 pt-6 border-t border-gray-200">
                                        <button 
                                            onClick={() => {
                                                setVisible(true);
                                            }} 
                                            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-indigo-500/30"
                                        >
                                            <AiOutlineEdit />
                                            Edit Profile
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Edit Mode */}
                                    <form onSubmit={updateUser} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                                                    <AiOutlineUser className="text-indigo-500" />
                                                    First Name
                                                </label>
                                                <input 
                                                    type="text" 
                                                    value={FirstName} 
                                                    onChange={handleFirstName} 
                                                    placeholder="First Name" 
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                                                    <AiOutlineUser className="text-indigo-500" />
                                                    Last Name
                                                </label>
                                                <input 
                                                    type="text" 
                                                    value={SecondName} 
                                                    onChange={handleSecondName} 
                                                    placeholder="Last Name" 
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                                                    <AiOutlineMail className="text-indigo-500" />
                                                    Email Address
                                                </label>
                                                <input 
                                                    type="email" 
                                                    value={Email} 
                                                    onChange={handleEmail} 
                                                    placeholder="Email" 
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                                                    <AiOutlinePhone className="text-indigo-500" />
                                                    Phone Number
                                                </label>
                                                <input 
                                                    type="tel" 
                                                    value={Phone} 
                                                    onChange={handlePhone} 
                                                    placeholder="Phone" 
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                                                    <AiOutlineCalendar className="text-indigo-500" />
                                                    Date of Birth
                                                </label>
                                                <input 
                                                    type="date" 
                                                    value={DOB} 
                                                    onChange={handleDOB} 
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                                                    <AiOutlineTeam className="text-indigo-500" />
                                                    Gender
                                                </label>
                                                <select 
                                                    value={Gender} 
                                                    onChange={handleGender} 
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200"
                                                    required
                                                >
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                                                    <AiOutlineHome className="text-indigo-500" />
                                                    Address
                                                </label>
                                                <textarea 
                                                    rows={3} 
                                                    value={Address} 
                                                    onChange={handleAddress} 
                                                    placeholder="Address" 
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 resize-none"
                                                />
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap justify-end gap-3 pt-6 border-t border-gray-200">
                                            <button 
                                                type="button" 
                                                onClick={() => {
                                                    setVisible(false);
                                                    setPhotoFile(null);
                                                    // Reset form values to profile data
                                                    if (profile) {
                                                        setFirstName(profile.FirstName || "");
                                                        setSecondName(profile.SecondName || "");
                                                        setAddress(profile.Address || "");
                                                        setDOB(profile.DOB || "");
                                                        setEmail(profile.Email || "");
                                                        setPhone(profile.Phone || "");
                                                        setGender(profile.Gender || "");
                                                        setPhotoPreview(profile.photo || null);
                                                    }
                                                }} 
                                                className="flex items-center gap-2 px-6 py-2.5 bg-red-100 text-red-600 font-medium rounded-xl hover:bg-red-200 transition-all duration-200"
                                            >
                                                <AiOutlineClose />
                                                Cancel
                                            </button>
                                            <button 
                                                type="submit" 
                                                disabled={isSaving}
                                                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-indigo-500/30 disabled:opacity-70"
                                            >
                                                {isSaving ? (
                                                    <>
                                                        <AiOutlineLoading3Quarters className="animate-spin" />
                                                        Saving...
                                                    </>
                                                ) : (
                                                    <>
                                                        <AiOutlineSave />
                                                        Save Changes
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="text-center mt-6">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        <span className="inline-block w-1 h-1 bg-green-400 rounded-full"></span>
                        Your profile information is secure
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;