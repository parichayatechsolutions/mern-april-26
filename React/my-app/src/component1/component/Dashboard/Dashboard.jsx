import { useLocation, useNavigate } from "react-router-dom";
// import Popup from "../Popup/Popup";
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

import { PiSignOut, PiPlus, PiStudent, PiEye, PiPencil, PiTrash } from "react-icons/pi";

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
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setIsLoading(false);
        }
        return response;
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
            {/* Header */}
            <div className="bg-white/5 backdrop-blur-lg border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-white/10">
                                <AiOutlineDashboard className="w-6 h-6 text-indigo-400" />
                            </div>
                            <h1 className="text-2xl font-bold text-white tracking-tight">
                                Dashboard
                            </h1>
                        </div>
                        <button 
                            onClick={() => { navigate("/login") }} 
                            className="flex items-center gap-2 px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-medium rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-200"
                        >
                            <PiSignOut className="text-lg" />
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
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <PiStudent className="text-indigo-400" />
                            Student Details
                            <span className="text-sm font-normal text-indigo-300/70 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                {rows.length} Students
                            </span>
                        </h2>
                        <p className="text-indigo-300/50 text-sm mt-1">Manage all student records</p>
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
                        className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:-translate-y-0.5"
                    >
                        <PiPlus className="text-lg" />
                        Add Student
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                    {isLoading ? (
                        <div className="flex items-center justify-center py-20">
                            <AiOutlineLoading3Quarters className="animate-spin text-4xl text-indigo-400" />
                        </div>
                    ) : rows.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">📚</div>
                            <h3 className="text-xl font-semibold text-white">No Students Found</h3>
                            <p className="text-indigo-300/50 mt-2">Click "Add Student" to create your first record</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-white/5 border-b border-white/10">
                                        {heading.map((head, index) => (
                                            <th key={index} className="px-4 py-3 text-left text-xs font-semibold text-indigo-300/70 uppercase tracking-wider whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    <head.icon className="text-indigo-400 text-sm" />
                                                    {head.title}
                                                </div>
                                            </th>
                                        ))}
                                        <th className="px-4 py-3 text-center text-xs font-semibold text-indigo-300/70 uppercase tracking-wider whitespace-nowrap">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {rows?.map((row, index) => (
                                        <tr key={index} className="hover:bg-white/5 transition-colors duration-150">
                                            <td className="px-4 py-3 text-sm text-white/80 whitespace-nowrap">{row.FirstName}</td>
                                            <td className="px-4 py-3 text-sm text-white/80 whitespace-nowrap">{row.SecondName}</td>
                                            <td className="px-4 py-3 text-sm text-white/80 whitespace-nowrap">{row.Email}</td>
                                            <td className="px-4 py-3 text-sm text-white/80 whitespace-nowrap">{row.Phone}</td>
                                            <td className="px-4 py-3 text-sm text-white/80 whitespace-nowrap">{row.DOB}</td>
                                            <td className="px-4 py-3 text-sm text-white/80 whitespace-nowrap">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    row.Gender === "Male" ? "bg-blue-500/20 text-blue-300 border border-blue-500/20" :
                                                    row.Gender === "Female" ? "bg-pink-500/20 text-pink-300 border border-pink-500/20" :
                                                    "bg-gray-500/20 text-gray-300 border border-gray-500/20"
                                                }`}>
                                                    {row.Gender}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-white/80 max-w-xs truncate">{row.Address}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button 
                                                        onClick={() => ViewClick(row)} 
                                                        className="p-1.5 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors"
                                                        title="View"
                                                    >
                                                        <PiEye className="text-lg" />
                                                    </button>
                                                    <button 
                                                        onClick={() => {
                                                            setPopUpData(row);
                                                            setPopType("edit");
                                                            setIsPopupOpen(true);
                                                        }} 
                                                        className="p-1.5 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-colors"
                                                        title="Edit"
                                                    >
                                                        <PiPencil className="text-lg" />
                                                    </button>
                                                    <button 
                                                        onClick={() => deleteUser(row._id)} 
                                                        className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                                                        title="Delete"
                                                    >
                                                        <PiTrash className="text-lg" />
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
                    <p className="text-xs text-indigo-300/30 flex items-center justify-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                        All student data is securely stored
                    </p>
                </div>
            </div>

            {/* Popup */}
            {/* <Popup
                isOpen={isPopupOpen}
                popUpData={popUpData}
                type={popUpType}
                onClose={() => {
                    setIsPopupOpen(false);
                    getUsers();
                }} 
                onSubmit={addRow}
            /> */}
        </div>
    );
};

export default Dashboard;