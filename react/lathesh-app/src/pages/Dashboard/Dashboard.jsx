import { FaArrowRight, FaPlus, FaSignOutAlt, FaEye, FaEdit, FaTrash, FaUsers, FaUserPlus, FaUserCheck, FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const headCards = ["First Name", "Last Name", "Email"]
    const navigate = useNavigate()
    const phone = "Phone"
    const dob = "DOB"
    const gender = "Gender"
    const address = "Address"
    const [rows, setRows] = useState([]);
    const [popUpData, setPopUpData] = useState({
        FirstName: "",
        SecondName: "",
        Email: "",
        Phone: "",
        DOB: "",
        Gender: "",
        Address: "",
    });
    const [popUpType, setPopType] = useState("add");
    const [stats, setStats] = useState({
        totalStudents: 0,
        activeStudents: 0,
        recentAdditions: 0,
        totalClasses: 0
    });

    const dataCards = (addrow) => {
        setRows([...rows, addrow]);
        setIsPopupOpen(false);
        updateStats([...rows, addrow]);
    }

    const getUsers = async () => {
        const response = await fetch('http://localhost:5000/users', {
            method: "GET"
        });
        const result = await response.json();
        console.log(result)
        setRows(result)
        updateStats(result)
        return response;
    }

    const updateStats = (data) => {
        const total = data.length;
        const active = data.filter(user => user.isActive !== false).length;
        const recent = data.filter(user => {
            const createdDate = new Date(user.createdAt || Date.now());
            const now = new Date();
            const diffTime = Math.abs(now - createdDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 7;
        }).length;
        
        setStats({
            totalStudents: total,
            activeStudents: active,
            recentAdditions: recent,
            totalClasses: Math.ceil(total / 3) // Example calculation
        });
    }

    useEffect(() => {
        getUsers()
    }, [])

    const deleteUser = async (id) => {
        const response = await fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const updatedRows = rows.filter(row => row._id !== id);
        setRows(updatedRows);
        updateStats(updatedRows);
    }

    const editUser = async (id) => {
        const response = await fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        getUsers();
        window.target.reset();
    }

    const ViewClick = (row) => {
        navigate(`/profile?${row._id}`);
    }

    // Stat Cards Data
    const statCards = [
        {
            title: "Total Students",
            value: stats.totalStudents,
            icon: <FaUsers className="text-3xl" />,
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
            textColor: "text-blue-600",
            change: "+12%",
            changeColor: "text-green-500"
        },
        {
            title: "Active Students",
            value: stats.activeStudents,
            icon: <FaUserCheck className="text-3xl" />,
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
            textColor: "text-green-600",
            change: "+8%",
            changeColor: "text-green-500"
        },
        {
            title: "New This Week",
            value: stats.recentAdditions,
            icon: <FaUserPlus className="text-3xl" />,
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            textColor: "text-purple-600",
            change: "+5%",
            changeColor: "text-green-500"
        },
        {
            title: "Total Classes",
            value: stats.totalClasses,
            icon: <FaChartLine className="text-3xl" />,
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
            textColor: "text-orange-600",
            change: "+3%",
            changeColor: "text-green-500"
        }
    ];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50">
                {/* Header Section */}
                <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-20 border-b border-gray-200/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                                    <FaChartLine className="text-white text-lg" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Dashboard
                                    </h2>
                                    <p className="text-xs text-gray-500 hidden sm:block">Real-time overview of your students</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-medium text-green-700">System Online</span>
                                </div>
                                <button
                                    className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-xl text-white font-medium transition duration-200 transform hover:scale-105 shadow-md"
                                    onClick={() => { navigate("/login") }}
                                >
                                    <FaSignOutAlt className="text-sm" />
                                    <span className="hidden sm:inline">Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Welcome Section with Stats */}
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold">
                                    Welcome Back! 👋
                                </h1>
                                <p className="text-blue-100 mt-1 text-sm">
                                    Here's what's happening with your students today
                                </p>
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium">Live Updates</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {statCards.map((stat, index) => (
                            <div 
                                key={index}
                                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100/50"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
                                        <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                                        <div className="flex items-center gap-1 mt-2">
                                            <span className={`text-xs font-semibold ${stat.changeColor}`}>
                                                {stat.change}
                                            </span>
                                            <span className="text-xs text-gray-400">vs last month</span>
                                        </div>
                                    </div>
                                    <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                        <div className={stat.textColor}>
                                            {stat.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000`}
                                        style={{ width: `${Math.min((stat.value / 50) * 100, 100)}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content - Table Card */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                            <div className="px-6 py-5">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
                                            <FaUsers className="text-white text-sm" />
                                        </div>
                                        <div>
                                            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                                                Student Records
                                            </h1>
                                            <p className="text-sm text-gray-500">
                                                {rows.length} total students registered
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setPopUpData({
                                                FirstName: "",
                                                SecondName: "",
                                                Email: "",
                                                Phone: "",
                                                DOB: "",
                                                Gender: "",
                                                Address: ""
                                            })
                                            setPopType("add")
                                            setIsPopupOpen(true)
                                        }}
                                        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-xl transition duration-200 transform hover:scale-105"
                                    >
                                        <FaPlus className="text-sm" />
                                        Add New Student
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Table Section */}
                        <div className="overflow-x-auto">
                            <div className="inline-block min-w-full align-middle">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50/50">
                                        <tr>
                                            {headCards.map((head, index) => {
                                                return (
                                                    <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                        {head}
                                                    </th>
                                                )
                                            })}
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{phone}</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{dob}</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{gender}</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{address}</th>
                                            <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {rows.map((row, index) => (
                                            <tr key={index} className="hover:bg-blue-50/30 transition duration-150 group">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                                                            {row.FirstName?.charAt(0)}{row.SecondName?.charAt(0)}
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-900 uppercase">
                                                            {row.FirstName}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 uppercase">
                                                    {row.SecondName}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    <div className="flex items-center gap-1">
                                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                                                        {row.Email}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {row.Phone}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {row.DOB}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                        row.Gender === 'MALE' ? 'bg-blue-100 text-blue-700' : 
                                                        row.Gender === 'FEMALE' ? 'bg-pink-100 text-pink-700' : 
                                                        'bg-gray-100 text-gray-700'
                                                    }`}>
                                                        {row.Gender || 'N/A'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 max-w-xs truncate">
                                                    {row.Address}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex justify-end gap-1">
                                                        <button
                                                            className="text-blue-600 hover:text-blue-900 hover:bg-blue-50 transition duration-150 p-2 rounded-lg"
                                                            onClick={() => ViewClick(row)}
                                                            title="View"
                                                        >
                                                            <FaEye className="text-base" />
                                                        </button>
                                                        <button
                                                            className="text-green-600 hover:text-green-900 hover:bg-green-50 transition duration-150 p-2 rounded-lg"
                                                            onClick={() => {
                                                                setPopUpData(row)
                                                                setPopType("edit")
                                                                setIsPopupOpen(true)
                                                            }}
                                                            title="Edit"
                                                        >
                                                            <FaEdit className="text-base" />
                                                        </button>
                                                        <button
                                                            className="text-red-600 hover:text-red-900 hover:bg-red-50 transition duration-150 p-2 rounded-lg"
                                                            onClick={() => {
                                                                if (window.confirm('Are you sure you want to delete this student?')) {
                                                                    deleteUser(row._id)
                                                                }
                                                            }}
                                                            title="Delete"
                                                        >
                                                            <FaTrash className="text-base" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {rows.length === 0 && (
                                            <tr>
                                                <td colSpan="8" className="px-6 py-16 text-center">
                                                    <div className="flex flex-col items-center gap-3">
                                                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                                            <FaUsers className="text-gray-400 text-2xl" />
                                                        </div>
                                                        <p className="text-gray-500 font-medium">No students found</p>
                                                        <p className="text-sm text-gray-400">Click "Add New Student" to get started</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table Footer */}
                        <div className="bg-gray-50/50 px-6 py-4 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                                <p className="text-sm text-gray-500">
                                    Showing <span className="font-medium text-gray-700">{rows.length}</span> students
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-400">Last updated: {new Date().toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Popup
                isOpen={isPopupOpen}
                popUpData={popUpData}
                type={popUpType}
                onClose={() => {
                    setIsPopupOpen(false)
                    getUsers();
                }}
                onSubmit={dataCards}
            />
        </>
    )
}

export default Dashboard;