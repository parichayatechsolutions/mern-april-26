import { FaArrowRight, FaPlus, FaSignOutAlt, FaEye, FaEdit, FaTrash } from "react-icons/fa";
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
    const dataCards = (addrow) => {
        setRows([...rows, addrow]);
        setIsPopupOpen(false);
    }
    const getUsers = async () => {
        const response = await fetch('http://localhost:5000/users', {
            method: "GET"
        });
        const result = await response.json();
        console.log(result)
        setRows(result)
        return response;
    }
    useEffect(() => {
        const users = getUsers()
    }, [])

    const deleteUser = async (id) => {
        const response = await fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        getUsers();
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

    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                {/* Header Section */}
                <div className="bg-white shadow-md sticky top-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Dashboard
                            </h2>
                            <button
                                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-medium transition duration-200 transform hover:scale-105"
                                onClick={() => { navigate("/login") }}
                            >
                                <FaSignOutAlt className="text-sm" />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <h1 className="text-xl sm:text-2xl font-light">
                            Welcome To <span className="font-bold">MySite.com</span>
                        </h1>
                    </div>
                </div>

                {/* Main Content - Single Card */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Card Header - Add Button Section */}
                        <div className="border-b border-gray-200 bg-gray-200">
                            <div className="px-6 py-5">
                                <div className="flex flex-col  sm:flex-row justify-between items-center gap-4">
                                    <div className="flex items-center  gap-3">
                                        <h1 className="text-xl sm:text-2xl font-semibold text-slate-700">
                                            Manage Student Records
                                        </h1>
                                        <span className="text-slate-700 hidden sm:inline">
                                            <FaArrowRight />
                                        </span>
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
                                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
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
                                    <thead className="bg-gray-50">
                                        <tr>
                                            {headCards.map((head, index) => {
                                                return (
                                                    <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        {head}
                                                    </th>
                                                )
                                            })}
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{phone}</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{dob}</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{gender}</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{address}</th>
                                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {rows.map((row, index) => (
                                            <tr key={index} className="hover:bg-gray-50 transition duration-150">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 uppercase">
                                                    {row.FirstName}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 uppercase">
                                                    {row.SecondName}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {row.Email}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {row.Phone}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {row.DOB}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {row.Gender}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 max-w-xs truncate">
                                                    {row.Address}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex justify-end gap-2">
                                                        <button
                                                            className="text-blue-600 hover:text-blue-900 transition duration-150 p-1"
                                                            onClick={() => ViewClick(row)}
                                                            title="View"
                                                        >
                                                            <FaEye className="text-lg" />
                                                        </button>
                                                        <button
                                                            className="text-green-600 hover:text-green-900 transition duration-150 p-1"
                                                            onClick={() => {
                                                                setPopUpData(row)
                                                                setPopType("edit")
                                                                setIsPopupOpen(true)
                                                            }}
                                                            title="Edit"
                                                        >
                                                            <FaEdit className="text-lg" />
                                                        </button>
                                                        <button
                                                            className="text-red-600 hover:text-red-900 transition duration-150 p-1"
                                                            onClick={() => {
                                                                if (window.confirm('Are you sure you want to delete this student?')) {
                                                                    deleteUser(row._id)
                                                                    setTimeout(() => {
                                                                        getUsers()
                                                                    }, 500)
                                                                }
                                                            }}
                                                            title="Delete"
                                                        >
                                                            <FaTrash className="text-lg" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {rows.length === 0 && (
                                            <tr>
                                                <td colSpan="8" className="px-6 py-12 text-center text-gray-500">
                                                    No students found. Click "Add New Student" to add records.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
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