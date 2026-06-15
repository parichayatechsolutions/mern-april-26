import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Loginpage = () => {
    const navigate = useNavigate()
    const title = "Login"
    const password = "Update Password?"

    const [FormDetails, setFormDetails] = useState(null)

    const formDocs = async (details) => {
        details.preventDefault()
        console.log(details.target[0].value)
        console.log(details.target[1].value)
        console.log(details.target[2].value)
        const loginDetails = {
            FirstName: details.target[0].value,
            Email: details.target[1].value,
            Password: details.target[2].value
        }
        setFormDetails(loginDetails)

        const URL = "http://localhost:5000/login"
        console.log(FormDetails)
        const response = await fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginDetails),
            });
        const result = await response.json();
        console.log(result)
        if (result.islogin) {
            navigate("/Dashboard")
        }
    }

    useEffect(() => {
        console.log("Form Details :", FormDetails)
    }, [FormDetails])

    return (
        
        <>
            <div className=" bg-[url('C:\Users\HP\Documents\GitHub\mern-april-26\react\karthika-app\src\component1\flr1.jpg')] bg-cover ">
                <div className="max-w-screen max-h-full">
                    <div className="flex flex-col border-2 border-purple-500 items-center py-38">
                        <h1 className="text-6xl text-center mb-5">{title}</h1>

                        <form className="flex flex-col border-3 border-purple-500/20 rounded-xl backdrop-blur-sm shadow-xl/40 font-bold gap-3 px-10 py-5" onSubmit={formDocs}>
                            <label>Name:</label>
                            <input type="mail" className="border-2 rounded-lg opacity focus:border-purple-800 focus:outline-0 px-2 " placeholder="Enter your Name" />
                            <label>E-mail:</label>
                            <input type="mail" className="border-2 rounded-lg opacity focus:border-purple-800 focus:outline-0 px-2 " placeholder="Enter your E-mail" />
                            <label>Password:</label>
                            <input type="password" className="border-2 rounded-lg opacity focus:border-purple-800 focus:outline-0 px-2 " placeholder="Enter your Password" />
                            <button type="Submit" className=" border-purple-800 rounded-lg bg-purple-500  text-white text-lg p-2 cursor-pointer">{title}</button>
                            <div className="text-[12px] font-bold flex justify-end cursor-pointer" onClick={() => { navigate("/Password") }}> {password} </div>
                        </form>
                    </div >
                </div>
            </div >
        </>
    )
}

export default Loginpage;





