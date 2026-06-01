import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Loginpage = () => {
    const navigate = useNavigate()
    const title = "Login"
    const password = "Forgot Password?"
    const creds = [
        {
            name: "Anil",
            email: "anil@gmail.com",
            password: "abc123"
        }, {
            name: "Lathesh",
            email: "lathi@gmail.com",
            password: "lathi19"
        },
        {
            name: "Karthika",
            email: "ktka@gmail.com",
            password: "ktka17"

        },
        {
            name: "Mahalakshmi",
            email: "lakshmi@gmail.com",
            password: "lakki10"

        }]
    const [FormDetails, setFormDetails] = useState(null)

    const formDocs = (details) => {
        details.preventDefault()

        console.log(details.target[0].value)
        console.log(details.target[1].value)
        console.log(details.target[2].value)
        setFormDetails({
            Name: details.target[0].value,
            Email: details.target[1].value,
            Password: details.target[2].value

        })
    }


    useEffect(() => {
        if (FormDetails) {
            console.log(FormDetails);
            console.log(creds);

            const matcheduser = creds.find(
                (user) =>
                    user.name === FormDetails.Name &&
                    user.email === FormDetails.Email &&
                    user.password === FormDetails.Password
            );
            if (matcheduser) {
                alert("Valid credentials")
                navigate('/dashboard', {
                    state: {
                        FormDetails
                    }
                })
            }
            else {
                alert("Invalid credentials")
            }

        }

    }, [FormDetails])

    useEffect(() => {
        console.log("FormDetail are", FormDetails)
    }, [FormDetails])

    useEffect(() => {
        console.log("Form Details :", FormDetails)
    }, [FormDetails])

    return (
        <>
            <div className="bg-blue-500 min-h-screen py-10  px-10 md:px-40 sm:px-70 lg:px-90 xl:px-130">
                <div className="flex flex-col  bg-white/30 backdrop-invert backdrop-opacity-10 py-20 ">
                    <h1 className="text-6xl text-center mb-5">{title}</h1>
                    <form className="flex flex-col gap-3 px-5" onSubmit={formDocs}>
                        <label>Name:</label>
                        <input type="mail" className=" border-1 rounded-lg opacity focus:border-blue-800 focus:outline-0" placeholder="Enter your Name" />
                        <label>E-mail:</label>
                        <input type="mail" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0" placeholder="Enter your E-mail" />
                        <label>Password:</label>
                        <input type="password" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0" placeholder="Enter your Password" />
                        <button type="Submit" className=" border-blue-800 rounded-lg bg-blue-500  text-white text-lg p-0.5 cursor-pointer">{title}</button>
                        <div className="text-[12px] font-bold flex justify-end" onClick={() => { navigate("/Password") }}> {password} </div>
                    </form>
                </div >
            </div >
        </>
    )
}

export default Loginpage;





