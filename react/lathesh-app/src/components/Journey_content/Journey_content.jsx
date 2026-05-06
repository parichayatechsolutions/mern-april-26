import "./Journey_content.css"

function Journey_content() {
    const role1="Creative Developer"
    const designation1="Tech Art Studio | Summer 2023"
    const about1="Where I learned that code can be poetry and pixels can dance. Built magical interfaces that made users smile."
    const number1="1"
    const role2="Innovation Lead"
    const designation2="Creative Coding Club | 2022-Present"
    const about2="Teaching others that coding is like painting with logic. Organized hackathons that felt more like art festivals."
    const number2="2"
    return (
        <>
            <div className="flex flex-row h-115 pt-25 px-90 relative">
                <div className="w-1/2 relative">
                    <div className="font-[cursive] border-2 border-solid border-black h-fit w-[84%] rounded-3xl absolute right-12.5 top-5 shadow-[6px_6px_black] rotate-3 transition-all delay-300 ease-in py-2.5 px-2.5 bg-blue-700 text-amber-100 hover:rotate-0">
                        <h3>{role1}</h3>
                        <h4>{designation1}</h4>
                        <p>{about1}</p>
                    </div>
                    <div className="w-fit rounded-[50%] absolute top-6 right-1.5 text-2xl bg-amber-800 text-white border-3 border-solid border-black py-1 px-2 ">{number1}</div>
                </div>
                <div className="border-2 border-solid rounded-3xl"></div>
                <div className="w-1/2 relative">
                    <div className="font-[cursive] border-2 border-solid h-fit w-[84%] rounded-3xl absolute bottom-5 left-12.5 shadow-[6px_6px_black] -rotate-3 transition-all delay-300 ease-in py-2.5 px-2.5 bg-gray-600 text-white hover:rotate-0">
                        <h3>{role2}</h3>
                        <h4>{role2}</h4>
                        <p>{about2}</p>
                    </div>
                    <div className="w-fit rounded-[50%] absolute border-3 border-solid border-black py-1 px-2.5 top-43 left-1.5 text-2xl bg-red-800 text-white">{number2}</div>
                </div>
            </div>
        </>
    )
}

export default Journey_content;