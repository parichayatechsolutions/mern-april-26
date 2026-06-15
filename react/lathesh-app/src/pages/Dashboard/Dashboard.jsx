import { FaArrowRight } from "react-icons/fa6";
import { use, useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const headCards = ["FirstName", "SecondName", "E-mail"]
    const navigate = useNavigate()
    const phone = "Phone no"
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
            <div className="bg-white">
                <div className="bg-amber-50 ">
                    <div className=" w-auto h-12.5 flex justify-between px-1">
                        <h2 className="text-3xl bg-linear-to-r from-orange-700 to-purple-600 bg-clip-text text-transparent font-bold">DASHBOARD</h2>
                        <button className="bg-amber-600 px-4 py-1" onClick={() => { navigate("/login") }}>Logout</button>
                    </div>
                    <div className="px-4">
                        <h1 className="text-2xl bg-linear-to-r from-gray-700 to-gray-400 bg-clip-text text-transparent font-serif">Welcome To MySite.come</h1>
                    </div>
                    <div className="bg-white pt-4 px-4 flex justify-between">
                        <h1 className=" flex gap-3 items-center text-2xl bg-linear-to-r from-orange-600 to-green-400 bg-clip-text text-transparent font-serif">Click to Add Student Details
                            <span className="text-orange-400 flex justify-center items-center">
                                <FaArrowRight />
                            </span>
                        </h1>
                        <button onClick={() => {
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
                        }} className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 ">Add </button>
                        <Popup
                            isOpen={isPopupOpen}
                            popUpData={popUpData}
                            type={popUpType}
                            onClose={() => {
                                setIsPopupOpen(false)
                                getUsers();
                            }} onSubmit={dataCards} > </Popup>
                    </div>
                    <div className="flex justify-center">
                        <table className="w-[80%]  table-auto" >
                            <thead>
                                <tr>
                                    {
                                        headCards.map((head, index) => {
                                            return (
                                                <th key={index} className="border-2 border-solid">{head}</th>
                                            )
                                        })
                                    }
                                    <th  className="border-2 border-solid">{phone}</th>
                                    <th className="border-2 border-solid ">{dob}</th>
                                    <th className="border-2 border-solid ">{gender}</th>
                                    <th  className="border-2 border-solid ">{address}</th>
                                    <th colSpan={3} className="border-2 border-solid "></th>
                                    

                                </tr>
                            </thead>
                            <tbody className="table-auto">
                                {
                                    rows.map((row, index) => (
                                        <tr key={index}>
                                            <td className="border-2 border-solid p-2 text-center uppercase">{row.FirstName}</td>
                                            <td className="border-2 border-solid p-2 text-center uppercase">{row.SecondName}</td>
                                            <td className="border-2 border-solid p-2 text-center">{row.Email}</td>
                                            <td className="border-2 border-solid p-2 text-center">{row.Phone}</td>
                                            <td className="border-2 border-solid p-2 text-center">{row.DOB}</td>
                                            <td className="border-2 border-solid p-2 text-center">{row.Gender}</td>
                                            <td className="border-2 border-solid p-2 text-center">{row.Address}</td>
                                            <th className="border-2 border-solid p-2"><button className="cursor-pointer" onClick={() => ViewClick(row)}>View</button></th>
                                            <th className="border-2 border-solid p-2"><button className="cursor-pointer" onClick={() => {
                                                setPopUpData(row)
                                                setPopType("edit")
                                                setIsPopupOpen(true)
                                            }}>Edit</button></th>
                                            <th className="border-2 border-solid p-2"><button className="cursor-pointer" onClick={() => {
                                                deleteUser(row._id)
                                                setTimeout(() => {
                                                    getUsers()
                                                }, 1000)
                                            }}>Delete</button></th>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;