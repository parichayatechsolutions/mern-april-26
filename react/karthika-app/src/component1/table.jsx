import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const submit = "SUBMIT🚀"
    const Backto = "Back to Login"
    const navigate = useNavigate()
    const [NewFormDetail, setNewFormDetail] = useState(null)
    const newFormValue = async (psw) => {
        psw.preventDefault()
        console.log(psw.target[0].value),
            console.log(psw.target[1].value),
            console.log(psw.target[2].value)
        const updatePassword = {
            FirstName: psw.target[0].value,
            oldpassword: psw.target[1].value,
            newpassword: psw.target[2].value
        }
        setNewFormDetail(updatePassword)
        const URL = "http://localhost:5000/updatepassword"
        const response = await fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatePassword),
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

    const updateUser = async (id, newpassword) => {
        console.log(NewFormDetail)
       

    }

    useEffect(() => {
        console.log("Current password details", NewFormDetail)
    }, [NewFormDetail])

    return (
        <>
            <div className="bg-blue-300 min-h-screen py-20">
                <form className="flex flex-col flex-wrap h-fit gap-5 mx-150 border-2 border-solid rounded-2xl shadow-[0px_7px_7px_white] px-2.5 py-2.5 " onSubmit={newFormValue}>
                    <label>FirstName:</label> <input type="text" placeholder="Your FirstName" className=" font-[cursive] bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" />
                    <label>Old Password:</label>  <input type="password" placeholder="Old Password" className=" font-[cursive] bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" />
                    <label>New Password:</label>  <input type="password" placeholder="New Password" className=" font-[cursive] bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" />
                    <button type="submit" className="text-2xl py-2 px-9 bg-amber-400 h-15 border-3 border-solid borderr-black rounded-4xl"><strong>{submit}</strong></button>
                    <button type="button" className="text-2xl bg-white border-2 border-solid border-black rounded-2xl py-2 px-9 hover:bg-blue-200 hover:shadow-[3px_3px_1px_black]" onClick={() => { navigate("/login") }}>{Backto}</button>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword;