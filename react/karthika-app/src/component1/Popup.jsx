import { useEffect, useState } from "react";

const Popup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [info, setInfo] = useState('');

    const popupDetails = (details) => {
        details.preventDefault();
        console.log(details.target[0].value);
        console.log(details.target[1].value);
        setInfo({
            Name: details.target[0].value,
            Email: details.target[1].value
        })
    }
    useEffect(() => {
        console.log("Details:", info)
    }, [info])

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-blue-700/50">
            <div className="relative bg-white rounded-lg shadow-lg p-6 w-96">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">X</button>
                <h2 className="text-xl font-bold mb-4">Enter Details</h2>
                <form onSubmit={popupDetails} className="space-y-4">
                    <input type="text" placeholder="Name"
                        className="w-full border rounded px-3 py-2" />
                    <input type="email" placeholder="Email"
                        className="w-full border rounded px-3 py-2" />
                    <button type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" > Save  </button>
                </form>

            </div>
        </div>
    )
}

export default Popup;