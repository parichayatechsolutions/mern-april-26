import "./Creation_content.css"

function Creation_content() {
    const ai_vision = "Creative Vision AI"
    const about_ai = "An AI that turns imagination into digital art. Because why should humans have all the fun?"
    const ai_image = "🤖"
    const ai_art = "AI ART"
    const program1 = "PYTHON"
    const program2 = "ML"
    const program3 = "CREATIVE"
    const program4 = "REACT"
    const program5 = "FIREBASE"
    const program6 = "FUN"
    const program7 = "D3.JS"
    const program8 = "PYTHON"
    const program9 = "ART"
    const sp1 = "See Magic"
    const sp2 = "Play"
    const sp3 = "Explore"
    const sp4 = "Try It"
    const sp5 = "View"
    const sp6 = "Interact"
    const mobile_image = "📱"
    const mobile = "MOBILE"
    const doodle = "Doodle Task-Manager"
    const about_doodle = "Productivity app that feels like playing. Because boring tasks deserve fun solutions"
    const data_graph = "📈"
    const data_art = "DATA art"
    const visual_data = "Visual Data Stories"
    const about_visual_data = "Turning boring numbers into data visualizations that tell stories."

    const creationCard = [
        {
            image: "🤖",
            superscript: "AI ART",
            box1Color: "bg-linear-45 from-green-500 to-gray-400",
            title: "Creative Vision AI",
            description: "An AI that turns imagination into digital art. Because why should humans have all the fun?",
            titleMargin:"mb-0 ",
            progMargin:"mt-5",
            programingLang: [
                {
                    name: "PYTHON",
                    color: "bg-orange-500"
                }, {
                    name: "ML",
                    color: "bg-blue-400"
                },
                {
                    name: "CREATIVE",
                    color: "bg-pink-500"
                }],
            links: ["See Magic", "Play"]

        },
        {
            image: "📱",
            superscript: "MOBILE",
            box1Color: "bg-linear-45 from-blue-300 to-red-400",
            title: "Doodle Task-Manager",
            description: "Productivity app that feels like playing. Because boring tasks deserve fun solutions",
            titleMargin: "mb-0 ",
            progMargin: "mt-5",
            programingLang: [
                {
                    name: "PYTHON",
                    color: "bg-pink-500"
                }, {
                    name: "ML",
                    color: "bg-orange-400"
                },
                {
                    name: "CREATIVE",
                    color: "bg-blue-500"
                }],
            links: ["Explore", "Try It"]

        },
        {
            image: "📈",
            superscript: "DATA Art",
            box1Color: "bg-linear-45 from-pink-400 to-orange-300",
            title: "Visual Data Stories",
            description: "Turning boring numbers into data visualizations that tell stories.",
            titleMargin: "mb-2 ",
            progMargin: "mt-11",
            programingLang: [
                {
                    name: "PYTHON",
                    color: "bg-blue-500"
                }, {
                    name: "ML",
                    color: "bg-pink-400"
                },
                {
                    name: "CREATIVE",
                    color: "bg-orange-500"
                }],
            links: ["View", "Interact"]

        },

    ]
    return (
        <>
            <div className="flex place-self-center pt-18 px-55">
                <div className="grid grid-cols-3 gap-10 w-full h-fit">
                    {
                        creationCard.map((creation, index) => {
                            return (
                                <div key={index} className="font-[cursive] text-2xl border-4 border-solid border-black rounded-2xl shadow-[10px_6px_2px_black] flex flex-col bg-blue -rotate-1 transition-all delay-150 ease-in hover:rotate-0">
                                    <div className="text-center h-30 border-b-7 border-solid border-black relative bg-linear-45 from-green-500 to-gray-400">
                                        <h1 className="text-6xl">{creation.image}</h1>
                                        <div className="text-[16px] absolute top-1 right-1 border-3 border-solid border-black rounded-2xl p-1 bg-white">{creation.superscript}</div>
                                    </div>

                                    <h2 className={`px-8.5 font-bold ${creation.titleMargin} text-green-500`}>{creation.title}</h2>
                                    <h4 className="px-2.5 font-bold mb-0">{creation.description}</h4>
                                    <div className={`grid grid-cols-3 ${creation.progMargin}`}>
                                        {
                                            creation.programingLang.map((prog,index) => {
                                                return (
                                                    <div key={index} className={`text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold ${prog.color} text-[16px]`}>{prog.name}</div>

                                                )
                                            })
                                        }
                                        {/* <div className="text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold bg-pink-300 text-[16px]">{program1}</div>
                                        <div className="text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold bg-blue-200 text-[16px]">{program2}</div>
                                        <div className="text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold bg-orange-200 text-[16px]">{program3}</div> */}
                                    </div>
                                    <div className="underline mt-5 flex flex-row justify-around">
                                        {
                                            creation.links.map((link,index) => {
                                                return (
                                                    <div><a key={index} href="#home">{link}</a></div>

                                                )
                                            })
                                        }
                                        {/* <div><a href="#home">{sp1}</a></div>
                                        <div><a href="#home">{sp2}</a></div>  */}
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className="font-[cursive] text-2xl border-4 border-solid border-black rounded-2xl shadow-[10px_6px_2px_black] flex flex-col bg-blue -rotate-1 transition-all delay-150 ease-in hover:rotate-0">
                        <div className="text-center h-30 border-b-7 border-solid border-black relative bg-linear-45 from-green-500 to-gray-400">
                            <h1 className="text-6xl">{ai_image}</h1>
                            <div className="text-[16px] absolute top-1 right-1 border-3 border-solid border-black rounded-2xl p-1 bg-white">{ai_art}</div>
                        </div>

                        <h2 className="px-8.5 font-bold mb-0 text-green-500">{ai_vision}</h2>
                        <h4 className="px-2.5 font-bold mb-0">{about_ai}</h4>
                        <div className="grid grid-cols-3 mt-5">
                            <div className="text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold bg-pink-300 text-[16px]">{program1}</div>
                            <div className="text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold bg-blue-200 text-[16px]">{program2}</div>
                            <div className="text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold bg-orange-200 text-[16px]">{program3}</div>
                        </div>
                        <div className="underline mt-5 flex flex-row justify-around">
                            <div><a href="#home">{sp1}</a></div>
                            <div><a href="#home">{sp2}</a></div>
                        </div>
                    </div>
                    <div className="font-[cursive] text-2xl border-4 border-solid border-black rounded-2xl shadow-[10px_6px_2px_black] flex flex-col bg-blue rotate-1 transition-all delay-150 ease-in hover:rotate-0">
                        <div className="text-center h-30 border-b-7 border-solid border-black relative bg-linear-45 from-blue-300 to-red-400">
                            <h1 className="text-6xl">{mobile_image}</h1>
                            <div className="text-[16px] absolute top-1 right-1 border-3 border-solid border-black rounded-2xl p-1 bg-white">{mobile}</div>
                        </div>

                        <h2 className="px-8.5 font-bold mb-0 text-green-500">{doodle}</h2>
                        <h4 className="px-2.5 font-bold mb-0">{about_doodle}</h4>
                        <div className="grid grid-cols-3 mt-5">
                            <div className="text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold bg-blue-200 text-[16px]">{program4}</div>
                            <div className="text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold bg-orange-200 text-[16px]">{program5}</div>
                            <div className="text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold bg-pink-300 text-[16px]">{program6}</div>
                        </div>
                        <div className="underline mt-5 flex flex-row justify-around">
                            <div><a href="#home">{sp3}</a></div>
                            <div><a href="#home">{sp4}</a></div>
                        </div>
                    </div>
                    <div className="font-[cursive] text-2xl border-4 border-solid border-black rounded-2xl shadow-[10px_6px_2px_black] flex flex-col bg-blue -rotate-1 transition-all delay-150 ease-in hover:rotate-0">
                        <div className="text-center h-30 border-b-7 border-solid border-black relative bg-linear-45 from-pink-400 to-orange-300">
                            <h1 className="text-6xl">{data_graph}</h1>
                            <div className="text-[16px] absolute top-1 right-1 border-3 border-solid border-black rounded-2xl p-1 bg-white">{data_art}</div>
                        </div>
                        <h2 className="px-8.5 font-bold mb-2 text-green-500">{visual_data}</h2>
                        <h4 className="px-2.5 font-bold mt-0">{about_visual_data} </h4>
                        <div className="grid grid-cols-3 mt-11">
                            <div className="text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold bg-orange-200 text-[16px]">{program7}</div>
                            <div className="text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold bg-blue-200 text-[16px]">{program8}</div>
                            <div className="text-center border-2 border-solid rounded-2xl mx-2 px-1 font-bold bg-pink-300 text-[16px]">{program9}</div>
                        </div>
                        <div className="underline mt-5 flex flex-row justify-around">
                            <div><a href="#home">{sp5}</a></div>
                            <div><a href="#home">{sp6}</a></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}


export default Creation_content;