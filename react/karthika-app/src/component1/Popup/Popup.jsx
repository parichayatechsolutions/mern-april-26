import { useEffect, useState } from "react";

const Popup = ({ isOpen, onClose, onSubmit, type, popUpData }) => {
    if (!isOpen) return null;

    const [FirstName, setFirstName] = useState("")
    const [SecondName, setSecondName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [DOB, setDOB] = useState("")
    const [Gender, setGender] = useState("")
    const [Address, setAddress] = useState("")

    const [info, setInfo] = useState({
        FirstName: "",
        SecondName: "",
        Email: "",
        Phone: "",
        DOB: "",
        Gender: "",
        Address: "",
    });

    const popupDetails = async (details) => {
        details.preventDefault();
        console.log(details.target[0].value);
        console.log(details.target[1].value);
        console.log(details.target[2].value);
        console.log(details.target[3].value);
        console.log(details.target[4].value);
        console.log(details.target[5].value);
        console.log(details.target[6].value);
        const updateInfo = {
            FirstName: details.target[0].value,
            SecondName: details.target[1].value,
            Email: details.target[2].value,
            Phone: details.target[3].value,
            DOB: details.target[4].value,
            Gender: details.target[5].value,
            Address: details.target[6].value
        }
        setInfo(updateInfo);
        console.log(updateInfo);

        const URL = "http://localhost:5000/users"

        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateInfo),
        });
        console.log(response)
        onClose()
        // onSubmit(updateInfo);
    };

    const updateUser = async (e) => {

        e.preventDefault();
        console.log(info)
        const URL = `http://localhost:5000/users/${info._id}`
        // onSubmit(updateData);
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
        console.log("Details:", info)
    }, [info]);

    useEffect(() => {
        console.log(popUpData)
        setInfo(popUpData)
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

    const first = "FirstName"
    const second = "SecondName"
    const eadress = "Email Address"
    const phn = "Phone Number"
    const dob="DOB"
    const gender="Gender"
    const address="Address"

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-purple-500/10">
            <div className="relative bg-white rounded-lg shadow-lg p-6 w-96">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>X</button>
                <h2 className="text-xl font-bold mb-4">Enter Details</h2>
                <form onSubmit={type == 'add' ? popupDetails : updateUser} className="space-y-4">
                    <label className="mb-1 font-medium text-gray-700">{first}</label>
                    <input type="text" value={FirstName} onChange={handleFirstName} placeholder="FirstName" className="w-full border rounded px-3 py-2" />
                    <label className="mb-1 font-medium text-gray-700">{second}</label>
                    <input type="text" value={SecondName} onChange={handleSecondName} placeholder="SecondName" className="w-full border rounded px-3 py-2" />
                    <label className="mb-1 font-medium text-gray-700">{eadress}</label>
                    <input type="email" value={Email} onChange={handleEmail} placeholder="Email" className="w-full border rounded px-3 py-2" />
                    <label className="mb-1 font-medium text-gray-700">{phn}</label>
                    <input type="text" value={Phone} onChange={handlePhone} placeholder="Phone" className="w-full border rounded px-3 py-2" />
                     <label className="mb-1 font-medium text-gray-700">{dob}</label>
                    <input type="date" value={DOB} onChange={handleDOB} placeholder="DOB" className="w-full border rounded px-3 py-2" />
                     <label className="mb-1 font-medium text-gray-700">{gender}</label>
                    <select type="text" value={Gender} onChange={handleGender} placeholder="Gender" className="w-full border rounded px-3 py-2">
                    <option></option>
                    <option>Male</option>
                    <option>Female</option></select>
                     <label className="mb-1 font-medium text-gray-700">{address}</label>
                    <textarea type="text" value={Address} onChange={handleAddress} placeholder="Address" className="w-full border rounded px-3 py-2" />
                    <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700" > Save  </button>
                </form>

            </div>
        </div>
    )
}

export default Popup;