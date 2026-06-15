import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function Profile() {

    const location = useLocation();

    const [data, setData] = useState({
        FirstName: "",
        SecondName: "",
        Email: "",
        Phone: "",
        DOB: "",
        Gender: "",
        Address: ""
    });
    const first = "First-Name:"
    const second = "Second-Name:"
    const eadress = "Email:"
    const phn = "Phone-No:"
    const dob = "Date of Birth:"
    const gender = "Gender:"
    const address = "Address:"
    const [FirstName, setFirstName] = useState("")
    const [SecondName, setSecondName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [DOB, setDOB] = useState("")
    const [Gender, setGender] = useState("")
    const [Address, setAddress] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [profileData, setProfileData] = useState(null);

    const getUsersProfile = async (id) => {
        const response = await fetch('http://localhost:5000/users/' + id);
        const result = await response.json();
        console.log(result)
        setProfileData(result)
        return result;
    }
    useEffect(() => {
        console.log(location.search)
        if (location.search) {
            const profileData = getUsersProfile(location.search.slice(1))
            console.log(profileData)
        }
    }, [location])
    useEffect(()=>{
        if(profileData){
            setFirstName(profileData.FirstName),
            setSecondName(profileData.SecondName),
            setEmail(profileData.Email),
            setPhone(profileData.Phone),
            setDOB(profileData.DOB),
            setGender(profileData.Gender),
            setAddress(profileData.Address)
        }
        console.log(profileData);
    },[profileData])

     const updateUser = async (e) => {
        e.preventDefault();
        console.log(data)
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
        console.log(response);
        if (response.status==200){
            getUsersProfile(location.search.slice(1))
            setIsVisible(!isVisible)
        }
    }
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
    


    return (
        <>
            <div className="bg-purple-400 p-4 text-black">
                <div className="bg-white/70">
                    <div className=" w-auto h-fit flex flex-col justify-between p-4">
                        <h2 className=" text-3xl text-purple-700 font-bold">PROFILE PAGE</h2>
                    </div>
                </div>

                <div className="flex flex-col p-6">
                    <div className="bg-green-400 hover:bg-green-600 text-white px-4 border-black border rounded-[50%] h-30 w-30 flex"></div>
                     <div className="flex flex-col items-start" >
                        <div className="flex items-center text-3xl mb-1 font-bold uppercase">{profileData?.FirstName}  {profileData?.SecondName}</div>
                        <div className="flex  text-xl mb-1 font-bold">{first} {profileData?.FirstName}</div>
                        <div className="flex  text-xl mb-1 font-bold">{second} {profileData?.SecondName}</div>
                        <div className="flex  text-xl mb-1 font-bold ">{eadress} {profileData?.Email}</div>
                        <div className="flex  text-xl mb-1 font-bold ">{phn} {profileData?.Phone}</div>
                        <div className="flex  text-xl mb-1 font-bold ">{dob} {profileData?.DOB}</div>
                        <div className="flex  text-xl mb-1 font-bold ">{gender} {profileData?.Gender}</div>
                        <div className="flex  text-xl mb-1 font-bold ">{address} {profileData?.Address}</div>
                        <button type="button" className="bg-green-400 hover:bg-green-600 text-white h-fit w-fit p-2 flex mt-5" onClick={() => {
                            setData(profileData)
                            setIsVisible(!isVisible)
                        }}>EDIT PROFILE</button>
                    </div> 

                    <div className="flex flex-col">
                        {isVisible && (
                            <div className="flex flex-col">
                                <form className="grid grid-cols-2 gap-5 mt-5 space-y-4 w-full" onSubmit={updateUser} >
                                    <div><label className="mb-1 font-medium text-gray-700">{first}</label>
                                        <input type="text" value={FirstName} onChange={handleFirstName} placeholder="FirstName" className="w-full uppercase rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="FirstName" required /></div>
                                    <div><label className="mb-1 font-medium text-gray-700">{second}</label>
                                        <input type="text" value={SecondName} onChange={handleSecondName} placeholder="SecondName" className="w-full uppercase rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="SecondName" required /></div>
                                    <div><label className="mb-1 font-medium text-gray-700">{eadress}</label>
                                        <input type="email" value={Email} onChange={handleEmail} placeholder="Email" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="you@example.com" required /></div>
                                    <div><label className="mb-1 font-medium text-gray-700">{phn}</label>
                                        <input type="text" value={Phone} onChange={handlePhone} placeholder="Phone no." className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="+91 XXXXXXXXXX" required /></div>
                                    <div><label className="mb-1 font-medium text-gray-700">{dob}</label>
                                        <input type="date" value={DOB} onChange={handleDOB} placeholder="DOB" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" /></div>
                                    <div><label className="mb-1 font-medium text-gray-700">{gender}</label>
                                        <select type="text" value={Gender} onChange={handleGender} placeholder="Gender" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                                            <option>----</option>
                                            <option>MALE</option>
                                            <option>FEMALE</option>
                                        </select></div>
                                    <div className="col-span-2"><label className="mb-1 font-medium text-gray-700">{address}</label>
                                        <textarea type="text" rows={3} value={Address} onChange={handleAddress} placeholder="Address" className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" /></div>
                                    <div><button type="submit" className="w-full rounded-md bg-blue-600 py-2 font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        Submit </button></div>
                                </form>
                            </div>

                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile;