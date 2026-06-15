import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Password() {

    const navigate = useNavigate()
    const title = "Update Password"
    const password = "Update Password"
    const backPage = "Back"
    const [FirstName, setFirstName] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [passDetails, setpassDetails] = useState(null)

    const passDocs = async (passdetails) => {
        passdetails.preventDefault()
        console.log(passdetails.target[0].value)
        console.log(passdetails.target[1].value)
        console.log(passdetails.target[2].value)
        const updatePass = {
            FirstName: passdetails.target[0].value,
            oldpassword: passdetails.target[1].value,
            newpassword: passdetails.target[2].value
        }
        setpassDetails(updatePass)
        const URL = "http://localhost:5000/updatepassword"
        const response = await fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatePass),
            });
        const result = await response.json();
        console.log(result)


        if (result.isUpdate) {
            alert("Password Updated")
        }
        else {
            alert("Incorrect password")
        }
    }

    useEffect(() => {
        console.log("Current password details", passDetails);
    }, [passDetails])

    return (
        <>
            <div className=" bg-[url('C:\Users\HP\Documents\GitHub\mern-april-26\react\karthika-app\src\component1\flr1.jpg')] bg-cover ">
                <div className="max-w-screen max-h-full">
                    <div className="flex flex-col border-2 border-purple-500 items-center py-36">
                        <h1 className="text-5xl text-center mb-5">{password}</h1>
                        <form className="flex flex-col border-3 border-purple-500/20 rounded-xl backdrop-blur-sm shadow-xl/40 font-bold gap-3 px-10 py-5" onSubmit={passDocs}>
                            <label>FirstName:</label>
                            <input type="text" className="border-2 rounded-lg opacity focus:border-purple-800 focus:outline-0 px-2 " placeholder="Enter your E-mail" />
                            <label>Old Password:</label>
                            <input type="password" className="border-2 rounded-lg opacity focus:border-purple-800 focus:outline-0 px-2 " placeholder="Enter your Password" />
                            <label>New Password:</label>
                            <input type="password" className="border-2 rounded-lg opacity focus:border-purple-800 focus:outline-0 px-2 " placeholder="Enter your Password" />
                            <button type="Submit" className=" border-purple-800 rounded-lg bg-purple-500  text-white text-lg p-2 cursor-pointer">{title}</button>
                            <button type="button" className=" border-purple-800 rounded-lg bg-purple-500  text-white text-lg p-2 cursor-pointer" onClick={() => { navigate("/login") }}>{backPage}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Password;
