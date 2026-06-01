import { FaArrowRight } from "react-icons/fa6";
import { use, useState } from "react";
import Popup from "../Popup/Popup";


const Dashboard = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

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
                        <button onClick={() => setIsPopupOpen(true)} className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 ">Add </button>
                        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}> </Popup>
                    </div>
                </div>
            </div>







        </>
    )
}

export default Dashboard;