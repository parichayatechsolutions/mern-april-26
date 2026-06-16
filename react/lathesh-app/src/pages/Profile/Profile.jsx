import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
    FaArrowLeft, 
    FaEdit, 
    FaSave, 
    FaUserCircle, 
    FaCamera,
    FaEnvelope,
    FaPhone,
    FaCalendarAlt,
    FaVenusMars,
    FaMapMarkerAlt,
    FaUser,
    FaUserGraduate,
    FaIdCard,
    FaArrowRight
} from "react-icons/fa";

function Profile() {
    const location = useLocation();
    const navigate = useNavigate();
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePicturePreview, setProfilePicturePreview] = useState(null);

    const [data, setData] = useState({
        FirstName: "",
        SecondName: "",
        Email: "",
        Phone: "",
        DOB: "",
        Gender: "",
        Address: "",
        profilePicture: null
    });
    const first = "First Name"
    const second = "Last Name"
    const eadress = "Email Address"
    const phn = "Phone Number"
    const dob = "Date of Birth"
    const gender = "Gender"
    const address = "Address"
    const [FirstName, setFirstName] = useState("")
    const [SecondName, setSecondName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [DOB, setDOB] = useState("")
    const [Gender, setGender] = useState("")
    const [Address, setAddress] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [imageFile, setImageFile] = useState(null);

    const getUsersProfile = async (id) => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:5000/users/' + id);
            const result = await response.json();
            console.log(result);
            setProfileData(result);
            // If profile picture exists, set the preview
            if (result.profilePicture) {
                // Check if it's base64 or file path
                if (result.profilePicture.startsWith('data:image')) {
                    setProfilePicturePreview(result.profilePicture);
                } else {
                    setProfilePicturePreview(`http://localhost:5000/uploads/${result.profilePicture}`);
                }
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
        setIsLoading(false);
        return result;
    }

    useEffect(() => {
        console.log(location.search);
        if (location.search) {
            getUsersProfile(location.search.slice(1));
        }
    }, [location]);

    useEffect(() => {
        if (profileData) {
            setFirstName(profileData.FirstName || "");
            setSecondName(profileData.SecondName || "");
            setEmail(profileData.Email || "");
            setPhone(profileData.Phone || "");
            setDOB(profileData.DOB || "");
            setGender(profileData.Gender || "");
            setAddress(profileData.Address || "");
            setData({
                FirstName: profileData.FirstName || "",
                SecondName: profileData.SecondName || "",
                Email: profileData.Email || "",
                Phone: profileData.Phone || "",
                DOB: profileData.DOB || "",
                Gender: profileData.Gender || "",
                Address: profileData.Address || "",
                profilePicture: profileData.profilePicture || null
            });
        }
        console.log(profileData);
    }, [profileData]);

    const updateUser = async (e) => {
        e.preventDefault();
        
        // Create FormData for file upload
        const formData = new FormData();
        formData.append('FirstName', FirstName);
        formData.append('SecondName', SecondName);
        formData.append('Email', Email);
        formData.append('Phone', Phone);
        formData.append('DOB', DOB);
        formData.append('Gender', Gender);
        formData.append('Address', Address);
        
        // Append image file if selected
        if (imageFile) {
            formData.append('profilePicture', imageFile);
        }
        
        const URL = `http://localhost:5000/users/${location.search.slice(1)}`;
        try {
            const response = await fetch(URL, {
                method: 'PUT',
                body: formData, // Don't set Content-Type header, browser will set it with boundary
            });
            
            if (response.status === 200) {
                const result = await response.json();
                setProfileData(result);
                // Update preview with new image
                if (result.profilePicture) {
                    if (result.profilePicture.startsWith('data:image')) {
                        setProfilePicturePreview(result.profilePicture);
                    } else {
                        setProfilePicturePreview(`http://localhost:5000/uploads/${result.profilePicture}`);
                    }
                }
                setData({
                    FirstName: FirstName,
                    SecondName: SecondName,
                    Email: Email,
                    Phone: Phone,
                    DOB: DOB,
                    Gender: Gender,
                    Address: Address,
                    profilePicture: result.profilePicture || null
                });
                setIsVisible(false);
                setImageFile(null);
                setProfilePicture(null);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    const handleFirstName = (event) => {
        const value = event.target.value;
        setFirstName(value);
        setData(prev => ({ ...prev, FirstName: value }));
    }

    const handleSecondName = (event) => {
        const value = event.target.value;
        setSecondName(value);
        setData(prev => ({ ...prev, SecondName: value }));
    }

    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
        setData(prev => ({ ...prev, Email: value }));
    }

    const handlePhone = (event) => {
        const value = event.target.value;
        setPhone(value);
        setData(prev => ({ ...prev, Phone: value }));
    }

    const handleDOB = (event) => {
        const value = event.target.value;
        setDOB(value);
        setData(prev => ({ ...prev, DOB: value }));
    }

    const handleGender = (event) => {
        const value = event.target.value;
        setGender(value);
        setData(prev => ({ ...prev, Gender: value }));
    }

    const handleAddress = (event) => {
        const value = event.target.value;
        setAddress(value);
        setData(prev => ({ ...prev, Address: value }));
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file');
                return;
            }
            
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size should be less than 5MB');
                return;
            }
            
            // Store the file object for FormData
            setImageFile(file);
            
            // Create preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicturePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Get initials for avatar fallback
    const getInitials = () => {
        if (profileData) {
            return `${profileData.FirstName?.charAt(0) || ''}${profileData.SecondName?.charAt(0) || ''}`;
        }
        return '';
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 relative overflow-hidden">
                
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

                <div className="max-w-5xl mx-auto relative z-10">
                    {/* Header Section */}
                    <div className="flex justify-between items-center mb-6">
                        <button
                            onClick={() => navigate(-1)}
                            className="group p-3 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                        >
                            <FaArrowLeft className="text-amber-700 text-xl group-hover:text-amber-900" />
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-lg">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-600">Profile Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Card */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                        {/* Cover Image - Warm Gradient */}
                        <div className="h-32 sm:h-40 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            {!isVisible && (
                                <button
                                    onClick={() => {
                                        setData({
                                            FirstName: profileData?.FirstName,
                                            SecondName: profileData?.SecondName,
                                            Email: profileData?.Email,
                                            Phone: profileData?.Phone,
                                            DOB: profileData?.DOB,
                                            Gender: profileData?.Gender,
                                            Address: profileData?.Address,
                                            profilePicture: profileData?.profilePicture
                                        });
                                        setIsVisible(!isVisible);
                                    }}
                                    className="absolute bottom-4 right-4 flex items-center gap-2 px-5 py-2.5 bg-white/90 hover:bg-white rounded-xl transition duration-200 transform hover:scale-105 shadow-lg"
                                >
                                    <FaEdit className="text-amber-600" />
                                    <span className="text-sm font-medium text-gray-700">Edit Profile</span>
                                </button>
                            )}
                            
                            {/* Decorative Elements on Cover */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                            </div>
                        </div>

                        {/* Profile Content */}
                        <div className="px-6 sm:px-8 pb-8">
                            {/* Profile Header with Avatar */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-16 mb-8">
                                <div className="relative group">
                                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white bg-gradient-to-br from-amber-400 to-orange-500">
                                        {profilePicturePreview ? (
                                            <img 
                                                src={profilePicturePreview}
                                                alt="Profile"
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-white">
                                                {getInitials() || <FaUserCircle className="text-white" />}
                                            </div>
                                        )}
                                    </div>
                                    {isVisible && (
                                        <label 
                                            htmlFor="profile-upload" 
                                            className="absolute bottom-0 right-0 p-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-full cursor-pointer transition duration-200 transform hover:scale-110 shadow-lg"
                                        >
                                            <FaCamera className="text-white text-sm" />
                                        </label>
                                    )}
                                    <input
                                        id="profile-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center justify-center sm:justify-start gap-3">
                                        {profileData?.FirstName} {profileData?.SecondName}
                                        <span className="text-sm bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-0.5 rounded-full">
                                            Student
                                        </span>
                                    </h1>
                                    <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                                        <FaIdCard className="text-amber-500" />
                                        <p className="text-sm text-gray-500 font-medium">
                                            ID: {location.search.slice(1)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* View Mode */}
                            {!isVisible && profileData && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="group bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-2xl p-4 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-md">
                                                <FaUser className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">{first}</p>
                                                <p className="font-medium text-gray-800">{profileData?.FirstName}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-2xl p-4 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-md">
                                                <FaUser className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">{second}</p>
                                                <p className="font-medium text-gray-800">{profileData?.SecondName}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-2xl p-4 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-md">
                                                <FaEnvelope className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">{eadress}</p>
                                                <p className="font-medium text-gray-800 break-all">{profileData?.Email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-2xl p-4 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-md">
                                                <FaPhone className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">{phn}</p>
                                                <p className="font-medium text-gray-800">{profileData?.Phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-2xl p-4 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-md">
                                                <FaCalendarAlt className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">{dob}</p>
                                                <p className="font-medium text-gray-800">{profileData?.DOB}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-2xl p-4 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-md">
                                                <FaVenusMars className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">{gender}</p>
                                                <p className="font-medium text-gray-800">{profileData?.Gender}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 group bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-2xl p-4 transition-all duration-300 transform hover:scale-[1.01] shadow-sm hover:shadow-md">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-md mt-1">
                                                <FaMapMarkerAlt className="text-white text-sm" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">{address}</p>
                                                <p className="font-medium text-gray-800">{profileData?.Address}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Edit Mode */}
                            {isVisible && (
                                <div>
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-200">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">
                                                Edit Profile Information
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Update your personal details below
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setIsVisible(false);
                                                setFirstName(profileData?.FirstName || "");
                                                setSecondName(profileData?.SecondName || "");
                                                setEmail(profileData?.Email || "");
                                                setPhone(profileData?.Phone || "");
                                                setDOB(profileData?.DOB || "");
                                                setGender(profileData?.Gender || "");
                                                setAddress(profileData?.Address || "");
                                                setProfilePicturePreview(profileData?.profilePicture ? `http://localhost:5000/uploads/${profileData.profilePicture}` : null);
                                                setImageFile(null);
                                                setProfilePicture(null);
                                            }}
                                            className="p-2 rounded-full hover:bg-amber-100 text-gray-500 hover:text-gray-700 transition duration-200"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <form className="space-y-5" onSubmit={updateUser} encType="multipart/form-data">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{first}</label>
                                                <input
                                                    type="text"
                                                    value={FirstName}
                                                    onChange={handleFirstName}
                                                    className="w-full uppercase rounded-xl px-4 py-3 bg-amber-50 border border-amber-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{second}</label>
                                                <input
                                                    type="text"
                                                    value={SecondName}
                                                    onChange={handleSecondName}
                                                    className="w-full uppercase rounded-xl px-4 py-3 bg-amber-50 border border-amber-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{eadress}</label>
                                                <input
                                                    type="email"
                                                    value={Email}
                                                    onChange={handleEmail}
                                                    className="w-full rounded-xl px-4 py-3 bg-amber-50 border border-amber-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{phn}</label>
                                                <input
                                                    type="tel"
                                                    value={Phone}
                                                    onChange={handlePhone}
                                                    className="w-full rounded-xl px-4 py-3 bg-amber-50 border border-amber-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{dob}</label>
                                                <input
                                                    type="date"
                                                    value={DOB}
                                                    onChange={handleDOB}
                                                    className="w-full rounded-xl px-4 py-3 bg-amber-50 border border-amber-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{gender}</label>
                                                <select
                                                    value={Gender}
                                                    onChange={handleGender}
                                                    className="w-full rounded-xl px-4 py-3 bg-amber-50 border border-amber-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200"
                                                >
                                                    <option value="">Select Gender</option>
                                                    <option value="MALE">Male</option>
                                                    <option value="FEMALE">Female</option>
                                                    <option value="OTHER">Other</option>
                                                </select>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{address}</label>
                                                <textarea
                                                    rows={3}
                                                    value={Address}
                                                    onChange={handleAddress}
                                                    className="w-full rounded-xl px-4 py-3 bg-amber-50 border border-amber-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200"
                                                    placeholder="Enter your full address"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-3 pt-4">
                                            <button
                                                type="submit"
                                                className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-medium transition duration-200 transform hover:scale-105 shadow-lg"
                                            >
                                                <FaSave className="text-sm" />
                                                Save Changes
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setIsVisible(false);
                                                    setFirstName(profileData?.FirstName || "");
                                                    setSecondName(profileData?.SecondName || "");
                                                    setEmail(profileData?.Email || "");
                                                    setPhone(profileData?.Phone || "");
                                                    setDOB(profileData?.DOB || "");
                                                    setGender(profileData?.Gender || "");
                                                    setAddress(profileData?.Address || "");
                                                    setProfilePicturePreview(profileData?.profilePicture ? `http://localhost:5000/uploads/${profileData.profilePicture}` : null);
                                                    setImageFile(null);
                                                    setProfilePicture(null);
                                                }}
                                                className="px-6 py-3 rounded-xl font-medium bg-amber-100 text-amber-700 hover:bg-amber-200 transition duration-200"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-400">
                            © 2024 MySite.com • All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;