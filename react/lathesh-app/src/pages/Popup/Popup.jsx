import { useEffect, useState } from "react";

function Popup({ isOpen, onClose }) {



    const [email, setEmail] = useState('');
    const handle = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        setEmail({
            Email: e.target[0].value
        })
    }
    useEffect(() => {
        console.log(email)
    }, [email])
    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000040] p-4" onClick={(e) => e.stopPropagation()} >
                <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                    <button className="absolute top-3 right-4 text-2xl font-semibold text-gray-500 hover:text-gray-700" onClick={onClose}>X</button>
                    <h2 className="mb-4 text-2xl font-bold text-gray-800">Add Details</h2>
                    <form onSubmit={handle} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium text-gray-700">Email Address</label>
                            <input type="email" placeholder="Email" id="email" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="you@example.com" required />
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