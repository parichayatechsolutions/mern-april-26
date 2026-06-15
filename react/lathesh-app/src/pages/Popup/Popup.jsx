import { useEffect, useState } from "react";

function Popup({ isOpen, popUpData, onClose, onSubmit, type }) {
    const first = "FirstName"
    const second = "SecondName"
    const eadress = "Email Address"
    const phn = "Phone Number"
    const dob = "Date of Birth"
    const gender = "Gender"
    const address = "Address"
    const [FirstName, setFirstName] = useState("")
    const [SecondName, setSecondName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [DOB, setDOB] = useState("")
    const [Gender, setGender] = useState("")
    const [Address, setAddress] = useState("")

    const [data, setData] = useState({
        FirstName: "",
        SecondName: "",
        Email: "",
        Phone: "",
        DOB: "",
        Gender: "",
        Address: ""
    });
    const addUser = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        console.log(e.target[3].value);
        console.log(e.target[4].value);
        console.log(e.target[5].value);
        console.log(e.target[6].value);

        const updateData = {
            FirstName: e.target[0].value,
            SecondName: e.target[1].value,
            Email: e.target[2].value,
            Phone: e.target[3].value,
            DOB: e.target[4].value,
            Gender: e.target[5].value,
            Address: e.target[6].value
        }
        setData(updateData);
        const URL = "http://localhost:5000/users"
        // onSubmit(updateData);
        const response = await fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData),
            });
        console.log(response)
        onClose()
    }

    const updateUser = async (e) => {
        e.preventDefault();
        console.log(data)
        const URL = `http://localhost:5000/users/${data._id}`
        const response = await fetch(URL,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    FirstName: FirstName,
                    SecondName: SecondName,
                    Email: Email,
                    Phone: Phone,
                    DOB: DOB,
                    Gender: Gender,
                    Address: Address
                }),
            });
        console.log(response)
        onClose()
    }

    useEffect(() => {
        console.log(data)
        // if (isOpen) {
        // if (editId) {
        //     fetch(`http://localhost:5000/users/${editId}`)
        // }}
    }, [data])

    useEffect(() => {
        console.log(popUpData)
        setData(popUpData)
        setFirstName(popUpData.FirstName)
        setSecondName(popUpData.SecondName)
        setEmail(popUpData.Email)
        setPhone(popUpData.Phone)
        setDOB(popUpData.DOB)
        setGender(popUpData.Gender)
        setAddress(popUpData.Address)

    }, [popUpData])

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleSecondName = (event) => {
        setSecondName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleDOB = (event) => {
        setDOB(event.target.value);
    }
    const handleGender = (event) => {
        setGender(event.target.value);
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
    }

    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000040] p-4" >
                <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                    <button className="absolute top-3 right-4 text-2xl font-semibold text-gray-500 hover:text-gray-700" onClick={onClose}>X</button>
                    <h2 className="mb-4 text-2xl font-bold text-gray-800">Add Details</h2>
                    <form onSubmit={type == 'add' ? addUser : updateUser} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium text-gray-700">{first}</label>
                            <input type="text" value={FirstName} onChange={handleFirstName} placeholder="FirstName" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="FirstName" required />
                            <label className="mb-1 font-medium text-gray-700">{second}</label>
                            <input type="text" value={SecondName} onChange={handleSecondName} placeholder="SecondName" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="SecondName" required />
                            <label className="mb-1 font-medium text-gray-700">{eadress}</label>
                            <input type="email" value={Email} onChange={handleEmail} placeholder="Email" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="you@example.com" required />
                            <label className="mb-1 font-medium text-gray-700">{phn}</label>
                            <input type="text" value={Phone} onChange={handlePhone} placeholder="Phone no." className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="+91 XXXXXXXXXX" required />
                            <label className="mb-1 font-medium text-gray-700">{dob}</label>
                            <input type="date" value={DOB} onChange={handleDOB} placeholder="DOB" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                            <label className="mb-1 font-medium text-gray-700">{gender}</label>
                            <select type="text" value={Gender} onChange={handleGender} placeholder="Gender" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                                <option>----</option>
                                <option>MALE</option>
                                <option>FEMALE</option>
                            </select>
                            <label className="mb-1 font-medium text-gray-700">{address}</label>
                            <textarea type="text" rows={3} value={Address} onChange={handleAddress} placeholder="Address" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
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