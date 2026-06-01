import { useLocation, useNavigate } from "react-router-dom";
import Popup from "../Popup";
import { useState } from "react";

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    console.log(data);

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
    ]
    const ph = "Phone"

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            <div className="bg-blue-500 p-4 text-black">
                <div className="bg-white/70">
                    <div className=" w-auto h-fit flex justify-between p-4">
                        <h2 className=" text-3xl text-blue-700 font-bold">DASHBOARD</h2>
                        <button className="bg-amber-600 px-4" onClick={() => { navigate("/login") }}>Logout</button>
                    </div>
                </div>
                <div className="p-4 flex justify-between">
                    <h1 className="flex items-center text-3xl mb-1 font-bold">Student Details</h1>
                    
                    <div className="p-6">
                        <button  onClick={() => setIsPopupOpen(true)} className="bg-white/70 flex items-center text-blue-700 font-bold px-4 py-2 rounded hover:text-blue-900" >  Add Details </button>
                        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}> </Popup>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;