import "./Journey_content.css"

function Journey_content() {
    const role1 = "Creative Developer"
    const designation1 = "Tech Art Studio | Summer 2023"
    const about1 = "Where I learned that code can be poetry and pixels can dance. Built magical interfaces that made users smile."
    const number1 = "1"
    const role2 = "Innovation Lead"
    const designation2 = "Creative Coding Club | 2022-Present"
    const about2 = "Teaching others that coding is like painting with logic. Organized hackathons that felt more like art festivals."
    const number2 = "2"

    const journeyCard = [
        {
            role: "Creative Developer",
            title: "Tech Art Studio | Summer 2023",
            description: "Where I learned that code can be poetry and pixels can dance. Built magical interfaces that made users smile.",
            position1: "right-12.5 top-5",
            number: "1",
            position2: "top-6 right-1.5",
            boxColor: "bg-blue-700",
            contentColor: "text-amber-100"
        },
        {
            role: "Innovation Lead",
            title: "Creative Coding Club | 2022-Present",
            description: "Teaching others that coding is like painting with logic. Organized hackathons that felt more like art festivals.",
            position1: "bottom-5 left-12.5",
            number: "2",
            position2: "top-48 left-1.5",
            boxColor: "bg-gray-600",
            contentColor: "text-white"
        }
    ]
    return (
        <>
            <div className="flex flex-row h-115 pt-25 px-90 relative">
                {
                    journeyCard.map((journey,index) => {
                        return (
                            <div key={index} className="w-1/2 relative">
                                <div className={`font-[cursive] border-2 border-solid border-black h-fit w-[84%] rounded-3xl absolute ${journey.position1} shadow-[6px_6px_black] rotate-3 transition-all delay-300 ease-in py-2.5 px-2.5 ${journey.boxColor} ${journey.contentColor} hover:rotate-0 `}>
                                    <h3 className="underline">{journey.role}</h3>
                                    <h4 className="mt-1">{journey.title}</h4>
                                    <p>{journey.description}</p>
                                </div>
                                <div className={`w-fit rounded-[50%] absolute ${journey.position2} text-2xl bg-amber-800 text-white border-3 border-solid border-black py-1 px-2 `}>{journey.number}</div>
                            </div>

                        )
                    })
                }
                <div className="border-2 border-solid rounded-3xl absolute w-0.5 h-[80%] left-0 right-0 m-auto"></div>

                {/* <div className="w-1/2 relative">
                    <div className={`font-[cursive] border-2 border-solid border-black h-fit w-[84%] rounded-3xl absolute ${journey.position1} shadow-[6px_6px_black] rotate-3 transition-all delay-300 ease-in py-2.5 px-2.5 ${journey.boxColor} ${journey.contentColor} hover:rotate-0 `}>
                        <h3 className="underline">{journey.role}</h3>
                        <h4 className="mt-1">{journey.title}</h4>
                        <p>{journey.description}</p>
                    </div>
                    <div className={`w-fit rounded-[50%] absolute ${journey.position2} text-2xl bg-amber-800 text-white border-3 border-solid border-black py-1 px-2 `}>{journey.number}</div>
                </div> */}
                {/* <div className="border-2 border-solid rounded-3xl"></div> */}
                {/* <div className="w-1/2 relative">
                    <div className="font-[cursive] border-2 border-solid h-fit w-[84%] rounded-3xl absolute bottom-5 left-12.5 shadow-[6px_6px_black] -rotate-3 transition-all delay-300 ease-in py-2.5 px-2.5 bg-gray-600 text-white hover:rotate-0">
                        <h3 className="underline">{role2}</h3>
                        <h4 className="mt-1">{designation2}</h4>
                        <p>{about2}</p>
                    </div>
                    <div className="w-fit rounded-[50%] absolute border-3 border-solid border-black py-1 px-2.5 top-48 left-1.5 text-2xl bg-red-800 text-white">{number2}</div>
                </div> */}
            </div>
        </>
    )
}

export default Journey_content;