import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Login/Login";


const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    console.log(data);

    return (
        <><div className="bg-white">
            <div className="bg-amber-50">
                <div className=" w-auto h-12.5 flex justify-between">
                    <h2 className="text-3xl bg-linear-to-r from-orange-700 to-purple-600 bg-clip-text text-transparent font-bold">DASHBOARD</h2>
                    <button className="bg-amber-600 px-4" onClick={() => { navigate("/login") }}>Logout</button>
                </div>
                <h1 className="text-2xl bg-linear-to-r from-gray-700 to-gray-400 bg-clip-text text-transparent font-serif">Welcome To MySite.come</h1>
            </div>
            <div className="mt-10">
                <h1 className="text-3xl font-bold">Your Details Are:</h1>
                <h2 className="text-2xl">Name: <span className="text-2xl text-red-400">{location.state?.FormDetails.name}</span> </h2>
                <h2 className="text-2xl">E-mail: <span className="text-2xl text-red-400">{location.state?.FormDetails.Email}</span></h2>
                <h2 className="text-2xl">Password: <span className="text-2xl text-red-400 line-through decoration-double">{location.state?.FormDetails.Password}</span> </h2>

            </div>
        </div>
        </>
    )
}

export default Dashboard;