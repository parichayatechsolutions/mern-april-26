import { useLocation, useNavigate } from "react-router-dom";
import Popup from "../Popup/Popup";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    console.log(data);
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

    const getUsers = async () => {
        const response = await fetch('http://localhost:5000/users');
        const result = await response.json();
        console.log(result)
        setRows(result)
        return response;
    }
    useEffect(() => {
        const users = getUsers()
    }, [])

    const heading = [
        {
            title: "First Name"
        },
        {
            title: "Second Name"
        },
        {
            title: "Email"
        },
        {
            title: "Phone"
        },
        {
            title: "DOB"
        },
        {
            title: "Gender"
        },
        {
            title: "Address"
        },
    ]

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const addRow = (newRow) => {
        setRows([...rows, newRow]);
        setIsPopupOpen(false);
    };

    const deleteUser = async (id) => {
        const response = await fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    const editUser = async (id) => {
        const response = await fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        getUsers();
    }

    const ViewClick = (row) => {
        navigate(`/profile?${row._id}`);
    };



    return (
        <>
            <div className="bg-purple-400 p-4 text-black">
                <div className="bg-white/70">
                    <div className=" w-auto h-fit flex justify-between p-4">
                        <h2 className=" text-3xl text-purple-700 font-bold">DASHBOARD</h2>
                        <button className="bg-green-400 hover:bg-green-600 text-white px-4" onClick={() => { navigate("/login") }}>Logout</button>
                    </div>
                </div>
                <div className="p-4 flex flex-col ">
                    <div className="flex justify-between items-center">
                        <h1 className="flex items-center text-3xl mb-1 font-bold">Student Details</h1>
                        <div className="p-6">
                            <button onClick={() => {
                                setPopUpData({
                                    FirstName: "",
                                    SecondName: "",
                                    Email: "",
                                    Phone: "",
                                    DOB: "",
                                    Gender: "",
                                    Address: "",
                                })
                                setPopType("add")
                                setIsPopupOpen(true)
                            }} className="bg-white/70 flex items-center text-purple-700 font-bold px-4 py-2 rounded hover:text-purple-900" >  Add Details </button>
                            <Popup
                                isOpen={isPopupOpen}
                                popUpData={popUpData}
                                type={popUpType}
                                onClose={() => {
                                    setIsPopupOpen(false)
                                    getUsers();
                                }} onSubmit={addRow}> </Popup>
                        </div>
                    </div>
                    <table className="border w-full border-gray-600 p-2 mt-2 table-auto">
                        <thead >
                            <tr>
                                {
                                    heading.map((head, index) => {
                                        return (
                                            <th key={index} className="text-2xl text-black border  border-gray-600 p-2">{head.title} </th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody className="border w-full border-gray-600 p-2 text-center table-auto">
                            {
                                rows?.map((row, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-600 p-2">{row.FirstName}</td>
                                        <td className="border border-gray-600 p-2">{row.SecondName}</td>
                                        <td className="border border-gray-600 p-2">{row.Email}</td>
                                        <td className="border border-gray-600 p-2">{row.Phone}</td>
                                        <td className="border border-gray-600 p-2">{row.DOB}</td>
                                        <td className="border border-gray-600 p-2">{row.Gender}</td>
                                        <td className="border border-gray-600 p-2">{row.Address}</td>
                                        <td className="border border-gray-600 p-2 cursor-pointer">
                                            <button onClick={() => ViewClick(row)}>View</button>
                                        </td>
                                        <td className="border border-gray-600 p-2 cursor-pointer"><button onClick={() => {
                                            setPopUpData(row)
                                            setPopType("edit")
                                            setIsPopupOpen(true)

                                        }}>Edit</button></td>
                                        <td className="border border-gray-600 p-2 cursor-pointer"><button onClick={() => {
                                            deleteUser(row._id)
                                            setTimeout(() => {
                                                getUsers()
                                            }, 1000)
                                        }}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}

export default Dashboard;