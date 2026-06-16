import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Password from "../PasswordPage/Password"

const Register = () => {
    const navigate = useNavigate()
    const title = "Create Account"
    const login = "Login->"
    const [FirstName, setFirstName] = useState("")
    const [SecondName, setSecondName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const [RegDetails, setRegDetails] = useState(null)
    const [data, setData] = useState({
        FirstName: "",
        SecondName: "",
        Email: "",
        Phone: "",
        Password: "",
        ConfirmPassword: "",
    }
    );

    const regDocs = async (regdetails) => {
        regdetails.preventDefault()
        console.log(regdetails.target[0].value)
        console.log(regdetails.target[1].value)
        console.log(regdetails.target[2].value)
        console.log(regdetails.target[3].value)
        console.log(regdetails.target[4].value)
        console.log(regdetails.target[5].value)
        const UpDateDetails = {
            FirstName: regdetails.target[0].value,
            SecondName: regdetails.target[1].value,
            Email: regdetails.target[2].value,
            Phone: regdetails.target[3].value,
            Password: regdetails.target[4].value,
            ConfirmPassword: regdetails.target[5].value
        }
        setRegDetails(UpDateDetails)


        const URL = "http://localhost:5000/register"
        const response = await fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(UpDateDetails),
            });
        console.log(response);

        regdetails.target.reset();

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
            <div className=" bg-purple-200">
                <div className="max-w-screen h-full">
                    <div className="flex flex-col border-2 border-purple-500 items-center py-15">
                        <h1 className="text-6xl text-center mb-5">{title}</h1>
                        <form className="flex flex-col border-3 border-purple-500/20 rounded-xl backdrop-invert backdrop-opacity-20 shadow-xl/40 font-bold gap-3 px-10 py-5" onSubmit={regDocs}>
                            <label>First Name:</label>
                            <input type="text" className=" border-2 rounded-lg opacity focus:border-purple-800 focus:outline-0 px-2 " placeholder="Enter your First Name" />
                            <label>Second Name:</label>
                            <input type="text" className=" border-2 rounded-lg opacity focus:border-purple-800 focus:outline-0 px-2" placeholder="Enter your Second Name" />
                            <label>E-mail:</label>
                            <input type="mail" className="border-2 rounded-lg opacity focus:border-purple-800 focus:outline-0 px-2 " placeholder="Enter your E-mail" />
                            <label>Phone Number:</label>
                            <input type="text" className="border-2 rounded-lg opacity focus:border-purple-800 focus:outline-0 px-2 " placeholder="Enter your Phone number" />
                            <label>Password:</label>
                            <input type="password" className="border-2 rounded-lg opacity focus:border-purple-800 focus:outline-0 px-2 " placeholder="Enter your Password" />
                            <label>Confirm Password:</label>
                            <input type="password" className="border-2 rounded-lg opacity focus:border-purple-800 focus:outline-0 px-2 " placeholder="Re-enter your Password" />
                            <button type="Submit" className=" border-purple-800 rounded-lg bg-purple-500  text-white text-lg p-2 cursor-pointer">{title}</button>
                            <div className="text-[12px] font-bold flex justify-end cursor-pointer" onClick={() => { navigate("/Login") }}> {login} </div>
                        </form>

                    </div >
                </div>
            </div >
        </>
    )
}

export default Register;