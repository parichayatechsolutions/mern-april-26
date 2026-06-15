import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Profile() {

    const navigate = useNavigate();
    const location = useLocation();

    
    const [visible, setVisble] = useState(false)
    const [profile, setProfile] = useState(null)

    const [FirstName, setFirstName] = useState("")
    const [SecondName, setSecondName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [DOB, setDOB] = useState("")
    const [Gender, setGender] = useState("")
    const [Address, setAddress] = useState("")

    const [editData, setEditData] = useState({
        FirstName: "",
        SecondName: "",
        Email: "",
        Phone: "",
        DOB: "",
        Gender: "",
        Address: "",
    });
    const getUserProfile = async (id) => {
        const response = await fetch('http://localhost:5000/users/' + id);
        const result = await response.json();
        console.log(result)
        setProfile(result)

        return result;
    }
    useEffect(() => {
        console.log(location.search)
        if (location.search) {
            const profileData = getUserProfile(location.search.slice(1))
            console.log(profileData)
        }
    }, [location])

    useEffect(() => {
        if (profile) {
            console.log(profile)
            setFirstName(profile.FirstName)
            setSecondName(profile.SecondName)
            setAddress(profile.Address)
            setDOB(profile.DOB)
            setEmail(profile.Email)
            setPhone(profile.Phone)
            setGender(profile.Gender)
        }
    }, [profile]);

    const first = "FirstName"
    const second = "SecondName"
    const eadress = "Email Address"
    const phn = "Phone Number"
    const dob = "DOB"
    const gender = "Gender"
    const address = "Address"

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

    const updateUser = async (e) => {

        e.preventDefault();
        console.log(editData)
        const URL = `http://localhost:5000/users/${location.search.slice(1)}`
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
        if(response.status == 200){
            getUserProfile(location.search.slice(1))
            setVisble(!visible)
        }
    }


    return (
        <>
            <div className="bg-purple-200 p-4 text-black">
                <div className="bg-white/70">
                    <div className=" w-auto h-fit flex flex-col justify-between p-4">
                        <h2 className=" text-3xl text-purple-700 font-bold">PROFILE PAGE</h2>
                    </div>
                </div>
                <div className="flex flex-col p-6">
                    <div className="bg-green-400 hover:bg-green-600 text-white px-4 border-black border rounded-[50%] h-40 w-40 flex"></div>
                    <div className="flex justify-between pt-2">
                        <div className="flex flex-col ">
                            <h1 className="text-xl mb-1 font-bold mt-2">FirstName: {profile?.FirstName}</h1>
                            <h1 className="text-xl mb-1 font-bold mt-2">SecondName: {profile?.SecondName}</h1>
                            <h1 className="text-xl mb-1 font-bold mt-2">Email: {profile?.Email}</h1>
                            <h1 className="text-xl mb-1 font-bold mt-2">Phone: {profile?.Phone}</h1>
                            <h1 className="text-xl mb-1 font-bold mt-2">DOB: {profile?.DOB}</h1>
                            <h1 className="text-xl mb-1 font-bold mt-2">Gender: {profile?.Gender}</h1>
                            <h1 className="text-xl mb-1 font-bold mt-2">Address: {profile?.Address}</h1>
                        </div>
                        <button type="button" className="bg-green-400 hover:bg-green-600 text-white h-fit w-fit p-2 flex"
                            onClick={() => {
                                setVisble(!visible)
                                setEditData(profile)
                            }}>EDIT</button>
                    </div>
                </div>
                <div className="px-6">
                    {visible && (
                        <div className="flex flex-col">
                            <form className="grid grid-cols-2 grid-rows-3 gap-3 w-full space-y-4" onSubmit={updateUser}>
                                <div>
                                    <label className="mb-1 font-medium text-gray-700">{first}</label>
                                    <input type="text" value={FirstName} onChange={handleFirstName} placeholder="FirstName" className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="mb-1 font-medium text-gray-700">{second}</label>
                                    <input type="text" value={SecondName} onChange={handleSecondName} placeholder="SecondName" className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="mb-1 font-medium text-gray-700">{eadress}</label>
                                    <input type="email" value={Email} onChange={handleEmail} placeholder="Email" className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="mb-1 font-medium text-gray-700">{phn}</label>
                                    <input type="text" value={Phone} onChange={handlePhone} placeholder="Phone" className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="mb-1 font-medium text-gray-700">{dob}</label>
                                    <input type="date" value={DOB} onChange={handleDOB} placeholder="DOB" className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="mb-1 font-medium text-gray-700">{gender}</label>
                                    <select type="text" value={Gender} onChange={handleGender} placeholder="Gender" className="w-full border rounded px-3 py-2">
                                        <option></option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="mb-1 font-medium text-gray-700">{address}</label>
                                    <textarea type="text" rows={3} value={Address} onChange={handleAddress} placeholder="Address" className="w-full border rounded px-3 py-2" />
                                </div>

                                <div className="flex justify-end gap-3 p-2">
                                    <button type="button" className=" bg-green-400 hover:bg-green-600 text-white h-fit w-fit p-2" onClick={() => { navigate("/Dashboard") }}>BACK</button>
                                    <button type="button" className=" bg-green-400 hover:bg-green-600 text-white h-fit w-fit p-2" onClick={() => { setVisble(!visible) }}>CANCEL</button>
                                    <button type="submit" className=" bg-green-400 hover:bg-green-600 text-white h-fit w-fit p-2" >SAVE</button>

                                </div>
                            </form>
                        </div>

                    )}
                </div>
                <div className="flex justify-end">

                </div>

            </div >
        </>
    )
}

export default Profile;