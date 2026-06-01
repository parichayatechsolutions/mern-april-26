import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
    const Heading = "CREATE ACCOUNT"
    const site = "To MySite.com"
    const submit = "SUBMIT🚀"
    const login = "Login->"
    const [RegDetails, setRegDetails] = useState(null)
    const registerValues = (regdetails) => {
        regdetails.preventDefault()
        console.log(regdetails.target[0].value)
        console.log(regdetails.target[1].value)
        console.log(regdetails.target[2].value)
        console.log(regdetails.target[3].value)
        setRegDetails({
            name: regdetails.target[0].value,
            Email: regdetails.target[1].value,
            Password: regdetails.target[2].value,
            ConfirmPassword: regdetails.target[3].value
        })
    }
    useEffect(() => {
        if (RegDetails) {
            console.log(RegDetails);

            const passwordMatch = (RegDetails.Password == RegDetails.ConfirmPassword) ? alert("Password matched! \nUser registered Successfully") : alert("Password not matched");
        }
    }, [RegDetails])

    useEffect(() => {
        console.log("RegDetail are", RegDetails)
    }, [RegDetails])

    return (
        <>
            
                <div className="min-h-screen bg-blue-300  ">
                    <div className="flex flex-col">
                        <div className=" flex flex-col text-center font-bold py-2 mb-4">
                            <h1 className="mb-2 sm:mb-4 lg:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-shadow-[2px_3px_yellow] font-[cursive]">{Heading}</h1>
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-[cursive]">{site}</h1>
                        </div>
                        <div className="px-10 sm:px-50 xl:px-100 lg:px-70">
                        <form className="grid grid-cols-1 gap-3 border-2 border-solid rounded-2xl shadow-[0px_7px_7px_white] px-2.5 py-2.5  " onSubmit={registerValues}>
                            <div className="flex flex-col xl:flex-row gap-3">
                            <label>First Name:</label>  <input type="text" placeholder="Your first-name" className=" font-[cursive] bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 xl:py-3 xl:px-1 text-[16px] hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" />
                            <label>Second Name:</label> <input type="text" placeholder="Your second-name" className=" font-[cursive] bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 xl:py-3 xl:px-1 text-[16px] hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" /></div>
                            <label>E-mail:</label> <input type="email" placeholder="Your email" className=" font-[cursive] bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" />
                            <label>Phone No.:</label>  <input type="text" placeholder="Your Phone Number" className=" font-[cursive] bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" />
                            <label>Password:</label>  <input type="password" placeholder="Your Password" className=" font-[cursive] bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" />
                            <label>ConfirmPassword:</label>  <input type="password" placeholder="Re-enter Password" className=" font-[cursive] bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" />
                            <div className="flex justify-end font-bold">
                                <button className="text-base bg-white border border-solid border-black rounded-2xl py-1 px-10 hover:bg-red-400 hover:shadow-[2px_2px_1px_black]" onClick={() => { navigate("/Login") }}>{login}</button>

                            </div>
                            <button type="submit" className="text-2xl py-2 px-9 bg-amber-400 h-15 border-3 border-solid borderr-black rounded-4xl"><strong>{submit}</strong></button>
                        </form>
                        </div>
                    </div>
                </div>
           
        </>
    )
}

export default Registration;