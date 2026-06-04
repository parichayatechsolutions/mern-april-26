import { useEffect, useState } from "react";

function Popup({ isOpen, onClose, onSubmit }) {
    const first = "FirstName"
    const second = "SecondName"
    const eadress = "Email Address"
    const phn = "Phone Number"
    const [data, setData] = useState({
        FirstName: "",
        SecondName: "",
        Email: "",
        Phone: "",
    });
    const handle = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        console.log(e.target[3].value);
        const updateData = {
            FirstName: e.target[0].value,
            SecondName: e.target[1].value,
            Email: e.target[2].value,
            Phone: e.target[3].value,
        }
        setData(updateData);
        const URL = "http://localhost:5000/users"
        // onSubmit(updateData);
        const response = await fetch(URL,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(updateData),
        });
        console.log(response)
        onClose()
    }
    useEffect(() => {
        console.log(data)
    }, [data])
    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000040] p-4" >
                <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                    <button className="absolute top-3 right-4 text-2xl font-semibold text-gray-500 hover:text-gray-700" onClick={onClose}>X</button>
                    <h2 className="mb-4 text-2xl font-bold text-gray-800">Add Details</h2>
                    <form onSubmit={handle} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium text-gray-700">{first}</label>
                            <input type="text" placeholder="FirstName" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="FirstName" required />
                            <label className="mb-1 font-medium text-gray-700">{second}</label>
                            <input type="text" placeholder="SecondName" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="SecondName" required />
                            <label className="mb-1 font-medium text-gray-700">{eadress}</label>
                            <input type="email" placeholder="Email" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="you@example.com" required />
                            <label className="mb-1 font-medium text-gray-700">{phn}</label>
                            <input type="text" placeholder="Phone no." className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="+91 XXXXXXXXXX" required />
                        </div>
                        <button type="submit" className="w-full rounded-md bg-blue-600 py-2 font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Submit </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Popup;