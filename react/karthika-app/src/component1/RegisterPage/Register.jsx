import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Password from "../Password"

const Register = () => {
    const navigate = useNavigate()
    const title = "Create Account"
    const login = "Login->"
    const [RegDetails, setRegDetails] = useState(null)

    const regDocs = (regdetails) => {
        regdetails.preventDefault()
        console.log(regdetails.target[0].value)
        console.log(regdetails.target[1].value)
        console.log(regdetails.target[2].value)
        console.log(regdetails.target[3].value)
        console.log(regdetails.target[4].value)
        console.log(regdetails.target[5].value)

        setRegDetails({
            FirstName: regdetails.target[0].value,
            SecondName: regdetails.target[1].value,
            Email: regdetails.target[2].value,
            Phone: regdetails.target[3].value,
            Password: regdetails.target[4].value,
            ConfirmPassword: regdetails.target[5].value


        })
    }

    useEffect(() => {
        if (RegDetails) {
            console.log(RegDetails);

            const passwordMatch = (RegDetails.Password == RegDetails.ConfirmPassword) ? alert("Password matched! \nUser registered Successfully") : alert("Password not matched");
        }
    }, [RegDetails])


    useEffect(() => {
        console.log("Form Details :", RegDetails)
    }, [RegDetails])


    return (
        <>
                <div className=" bg-[url('C:\Users\HP\Documents\GitHub\mern-april-26\react\karthika-app\src\component1\brownbear.jpg')] bg-cover ">
                    <div className="max-w-screen h-full">
                        <div className="flex flex-col w-[45.5%] items-center bg-white/30 backdrop-invert backdrop-opacity-10 py-15">
                            <h1 className="text-6xl text-center mb-5">{title}</h1>
                            <form className="flex flex-col gap-3 px-5" onSubmit={regDocs}>
                                <label>First Name:</label>
                                <input type="text" className=" border-1 rounded-lg opacity focus:border-blue-800 focus:outline-0" placeholder="Enter your First Name" />
                                <label>Second Name:</label>
                                <input type="text" className=" border-1 rounded-lg opacity focus:border-blue-800 focus:outline-0" placeholder="Enter your Second Name" />
                                <label>E-mail:</label>
                                <input type="mail" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0" placeholder="Enter your E-mail" />
                                <label>Phone Number:</label>
                                <input type="number" className=" border-1 rounded-lg opacity focus:border-blue-800 focus:outline-0" placeholder="Enter your Phone number" />
                                <label>Password:</label>
                                <input type="password" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0" placeholder="Enter your Password" />
                                <label>Confirm Password:</label>
                                <input type="password" className=" border-1 rounded-lg  focus:border-blue-800 focus:outline-0" placeholder="Re-enter your Password" />
                                <button type="Submit" className=" border-blue-800 rounded-lg bg-blue-500  text-white text-lg p-0.5 cursor-pointer">{title}</button>
                                <div className="text-[12px] font-bold flex justify-end" onClick={() => { navigate("/Login") }}> {login} </div>
                            </form>

                        </div >
                    </div>
                </div >
        </>
    )
}

export default Register;