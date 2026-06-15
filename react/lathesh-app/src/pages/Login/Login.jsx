import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const submit = "SIGN IN🚀"
    const Login = "LOGIN"
    const forgot = "Update Password?"
    const site = "To MySite.com"
    const [FormDetails, setFormDetails] = useState(null)
    const [visible, setVisible] = useState(false)

    const formValues = async (details) => {
        details.preventDefault()
        console.log(details.target[0].value)
        console.log(details.target[1].value)
        console.log(details.target[2].value)
        const formdata = {
            FirstName: details.target[0].value,
            Email: details.target[1].value,
            Password: details.target[2].value
        }
        setFormDetails(formdata)
        const URL = "http://localhost:5000/Login"
        console.log(FormDetails)
        const response = await fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formdata),
            });
        const result = await response.json();
        console.log(result)

        if (result.islogin) {
            navigate("/Dashboard")
        }
        else {
            setVisible(!visible);
            setTimeout(()=>setVisible(visible),8000);
        }

    }

    useEffect(() => {
        console.log(FormDetails);
    }, [FormDetails])

    useEffect(() => {
        console.log("FormDetail are", FormDetails)
    }, [FormDetails])


    return (
        <>
            <div className="bg-blue-300 min-h-screen">
                <div className="flex flex-col ">
                    <div className="text-4xl text-center font-bold py-2 mb-4">
                        <h1 className="mb-10 text-5xl text-shadow-[2px_3px_yellow] font-[cursive]">{Login}</h1>
                        <h1 className="text-3xl font-[cursive]">{site}</h1>
                    </div>

                    <form className="flex flex-col gap-5 mx-150 border-2 border-solid rounded-2xl shadow-[0px_7px_7px_white] px-2.5 py-2.5 " onSubmit={formValues}>
                        <label>Name:</label> <input type="text" placeholder="Your name" className=" font-[cursive] bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" />
                        <label>E-mail:</label> <input type="email" placeholder="Your email" className=" font-[cursive] bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" />
                        <label>Password:</label>  <input type="password" placeholder="Your Password" className=" font-[cursive] bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" />
                        <div className="flex flex-col justify-between font-bold">
                            {visible && (<div className="flex justify-end text-sm">"Incorrect Password!"</div>)}
                            <div className="flex justify-end">
                                <button type="button" className=" w-fit text-sm bg-white border border-solid border-black rounded-2xl py-1 px-1 hover:bg-red-400 hover:shadow-[2px_2px_1px_black]" onClick={() => { navigate("/UpdatePassword") }}>{forgot}</button>
                            </div>
                        </div>
                        <button type="submit" className="text-2xl py-2 px-9 bg-amber-400 h-15 border-3 border-solid borderr-black rounded-4xl"><strong>{submit}</strong></button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Login;