import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCamera, FaEdit, FaSave, FaUserCircle } from "react-icons/fa";

function Profile() {
    const location = useLocation();
    const navigate = useNavigate();

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
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePicturePreview, setProfilePicturePreview] = useState(null);

    const getUsersProfile = async (id) => {
        const response = await fetch('http://localhost:5000/users/' + id);
        const result = await response.json();
        console.log(result)
        setProfileData(result)
        return result;
    }
    useEffect(() => {
        console.log(location.search)
        if (location.search) {
            const profileData = getUsersProfile(location.search.slice(1))
            console.log(profileData)
        }
    }, [location])
    useEffect(() => {
        if (profileData) {
            setFirstName(profileData.FirstName),
                setSecondName(profileData.SecondName),
                setEmail(profileData.Email),
                setPhone(profileData.Phone),
                setDOB(profileData.DOB),
                setGender(profileData.Gender),
                setAddress(profileData.Address)
        }
        console.log(profileData);
    }, [profileData])

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

            // Convert to base64
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setProfilePicture(base64String);
                setProfilePicturePreview(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const updateUser = async (e) => {
        e.preventDefault();

        // Create object with all form data including base64 image
        const updateData = {
            FirstName: FirstName,
            SecondName: SecondName,
            Email: Email,
            Phone: Phone,
            DOB: DOB,
            Gender: Gender,
            Address: Address
        };

        // Add profile picture as base64 string if it exists
        if (profilePicture) {
            updateData.profilePicture = profilePicture;
        }

        const URL = `http://localhost:5000/users/${location.search.slice(1)}`;
        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });

        if (response.status === 200) {
            const result = await response.json();
            setProfileData(result);
            setIsVisible(false);
            setProfilePicture(null);
        }
    };
    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleSecondName = (event) => {
        setSecondName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleDOB = (event) => {
        setDOB(event.target.value);
    }
    const handleGender = (event) => {
        setGender(event.target.value);
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
    }

    return (
        <>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    {/* Header Section */}
                    <div className="bg-white rounded-lg shadow-md mb-6">
                        <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="text-gray-600 hover:text-gray-900 transition duration-200"
                                >
                                    <FaArrowLeft className="text-xl" />
                                </button>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                    Profile Page
                                </h2>
                            </div>
                            {!isVisible && profileData && (
                                <button
                                    type="button"
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition duration-200 transform hover:scale-105"
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
                                >
                                    <FaEdit className="text-sm" />
                                    Edit Profile
                                </button>

                            )}
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6 sm:p-8">
                            {/* Profile Header with Avatar */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 pb-6 border-b border-gray-200">
                                <div className="flex-shrink-0">
                                    <div className="relative group">
                                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full h-32 w-32 flex items-center justify-center shadow-lg overflow-hidden">
                                            {profilePicturePreview || profileData?.profilePicture ? (
                                                <img
                                                    src={profilePicturePreview || profileData?.profilePicture}
                                                    alt="Profile"
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <FaUserCircle className="text-white text-6xl" />
                                            )}
                                        </div>
                                        <label
                                            htmlFor="profile-upload"
                                            className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-700 transition duration-200 shadow-lg"
                                        >
                                            <FaCamera className="text-white text-sm" />
                                        </label>
                                        <input
                                            id="profile-upload"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase mb-2">
                                        {profileData?.FirstName} {profileData?.SecondName}
                                    </h1>
                                    <p className="text-gray-500 text-sm">
                                        Student ID: {location.search.slice(1)}
                                    </p>
                                </div>
                            </div>

                            {/* View Mode */}
                            {!isVisible && profileData && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{first}</label>
                                            <p className="text-gray-800 font-medium mt-1 uppercase">{profileData?.FirstName}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{second}</label>
                                            <p className="text-gray-800 font-medium mt-1 uppercase">{profileData?.SecondName}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{eadress}</label>
                                            <p className="text-gray-800 font-medium mt-1">{profileData?.Email}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{phn}</label>
                                            <p className="text-gray-800 font-medium mt-1">{profileData?.Phone}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{dob}</label>
                                            <p className="text-gray-800 font-medium mt-1">{profileData?.DOB}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{gender}</label>
                                            <p className="text-gray-800 font-medium mt-1">{profileData?.Gender}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 md:col-span-2">
                                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{address}</label>
                                            <p className="text-gray-800 font-medium mt-1">{profileData?.Address}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Edit Mode */}
                            {isVisible && (
                                <div>
                                    <div className="mb-6 pb-4 border-b border-gray-200">
                                        <h3 className="text-xl font-semibold text-gray-800">Edit Profile Information</h3>
                                        <p className="text-gray-500 text-sm mt-1">Update your personal details below</p>
                                    </div>
                                    <form className="space-y-5" onSubmit={updateUser}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{first}</label>
                                                <input
                                                    type="text"
                                                    value={FirstName}
                                                    onChange={handleFirstName}
                                                    className="w-full uppercase rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{second}</label>
                                                <input
                                                    type="text"
                                                    value={SecondName}
                                                    onChange={handleSecondName}
                                                    className="w-full uppercase rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{eadress}</label>
                                                <input
                                                    type="email"
                                                    value={Email}
                                                    onChange={handleEmail}
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{phn}</label>
                                                <input
                                                    type="tel"
                                                    value={Phone}
                                                    onChange={handlePhone}
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{dob}</label>
                                                <input
                                                    type="date"
                                                    value={DOB}
                                                    onChange={handleDOB}
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">{gender}</label>
                                                <select
                                                    value={Gender}
                                                    onChange={handleGender}
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
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
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                    placeholder="Enter your full address"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-3 pt-4">
                                            <button
                                                type="submit"
                                                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium transition duration-200 transform hover:scale-105"
                                            >
                                                <FaSave className="text-sm" />
                                                Save Changes
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setIsVisible(false)
                                                    setFirstName(profileData?.FirstName)
                                                    setSecondName(profileData?.SecondName)
                                                    setEmail(profileData?.Email)
                                                    setPhone(profileData?.Phone)
                                                    setDOB(profileData?.DOB)
                                                    setGender(profileData?.Gender)
                                                    setAddress(profileData?.Address)
                                                }}
                                                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2.5 rounded-lg font-medium transition duration-200"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;