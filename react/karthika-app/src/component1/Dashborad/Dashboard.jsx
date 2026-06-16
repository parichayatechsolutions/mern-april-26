import { useLocation, useNavigate } from "react-router-dom";
import Popup from "../Popup/Popup";
import { useEffect, useState } from "react";
import {
    AiOutlineDashboard,
    AiOutlinePlus,
    AiOutlineLogout,
    AiOutlineEye,
    AiOutlineEdit,
    AiOutlineDelete,
    AiOutlineUser,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineCalendar,
    AiOutlineTeam,
    AiOutlineHome,
    AiOutlineLoading3Quarters
} from "react-icons/ai";

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    console.log(data);
    const [rows, setRows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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

    const getUsers = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:5000/users');
            const result = await response.json();
            console.log(result);
            setRows(result);
            return response;
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const heading = [
        { title: "First Name", icon: AiOutlineUser },
        { title: "Last Name", icon: AiOutlineUser },
        { title: "Email", icon: AiOutlineMail },
        { title: "Phone", icon: AiOutlinePhone },
        { title: "DOB", icon: AiOutlineCalendar },
        { title: "Gender", icon: AiOutlineTeam },
        { title: "Address", icon: AiOutlineHome },
    ];

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const addRow = (newRow) => {
        setRows([...rows, newRow]);
        setIsPopupOpen(false);
        getUsers();
    };

    const deleteUser = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                getUsers();
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
    };

    const ViewClick = (row) => {
        navigate(`/profile?${row._id}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-white/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-xl">
                                <AiOutlineDashboard className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Dashboard
                            </h1>
                        </div>
                        <button
                            onClick={() => { navigate("/login") }}
                            className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-red-500/30 hover:shadow-red-500/40"
                        >
                            <AiOutlineLogout />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Header with Add Button */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            Student Details
                            <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                {rows.length} Students
                            </span>
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">Manage all student records</p>
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
                                Address: "",
                            });
                            setPopType("add");
                            setIsPopupOpen(true);
                        }}
                        className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40"
                    >
                        <AiOutlinePlus className="text-lg" />
                        Add Student
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-indigo-100/50 border border-white/50 overflow-hidden">
                    {isLoading ? (
                        <div className="flex items-center justify-center py-20">
                            <AiOutlineLoading3Quarters className="animate-spin text-4xl text-indigo-500" />
                        </div>
                    ) : rows.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">📚</div>
                            <h3 className="text-xl font-semibold text-gray-700">No Students Found</h3>
                            <p className="text-gray-500 mt-2">Click "Add Student" to create your first record</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200">
                                        {heading.map((head, index) => (
                                            <th key={index} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    <head.icon className="text-indigo-500 text-sm" />
                                                    {head.title}
                                                </div>
                                            </th>
                                        ))}
                                        <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {rows?.map((row, index) => (
                                        <tr key={index} className="hover:bg-indigo-50/50 transition-colors duration-150">
                                            <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{row.FirstName}</td>
                                            <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{row.SecondName}</td>
                                            <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{row.Email}</td>
                                            <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{row.Phone}</td>
                                            <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{row.DOB}</td>
                                            <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.Gender === "Male" ? "bg-blue-100 text-blue-700" :
                                                        row.Gender === "Female" ? "bg-pink-100 text-pink-700" :
                                                            "bg-gray-100 text-gray-700"
                                                    }`}>
                                                    {row.Gender}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-gray-700 max-w-xs truncate">{row.Address}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        onClick={() => ViewClick(row)}
                                                        className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                                                        title="View"
                                                    >
                                                        <AiOutlineEye className="text-lg" />
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setPopUpData(row);
                                                            setPopType("edit");
                                                            setIsPopupOpen(true);
                                                        }}
                                                        className="p-1.5 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors"
                                                        title="Edit"
                                                    >
                                                        <AiOutlineEdit className="text-lg" />
                                                    </button>
                                                    <button
                                                        onClick={() => deleteUser(row._id)}
                                                        className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Delete"
                                                    >
                                                        <AiOutlineDelete className="text-lg" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="text-center mt-6">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        <span className="inline-block w-1 h-1 bg-green-400 rounded-full"></span>
                        All student data is securely stored
                    </p>
                </div>
            </div>

            {/* Popup */}
            <Popup
                isOpen={isPopupOpen}
                popUpData={popUpData}
                type={popUpType}
                onClose={() => {
                    setIsPopupOpen(false);
                    getUsers();
                }}
                onSubmit={addRow}
            />
        </div>
    );
};

export default Dashboard;