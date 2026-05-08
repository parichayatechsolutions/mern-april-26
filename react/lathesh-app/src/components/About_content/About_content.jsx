import "./About_content.css"

function About_content() {
    const my_story = "My Story 📖"
    const about_my_story = "I'm a passionate web developer with a love for creating beautiful and functional websites. With a background in computer science and a keen eye for design, I strive to bring my clients' visions to life through innovative and user-friendly web solutions."
    const count1 = "1+"
    const project = "Projects"
    const count2 = "2"
    const art = "Art forms"
    const internship = "Internships"
    const infinity = "♾️"
    const creativity = "Creativity"
    const education = "Education 🎓"
    const course = "Master of Computer Applications (MCA) from UOM, 2026"
    const cgpa = "CGPA: 8.5"
    const mission = "Mission 🎯"
    const creative_tech = "Creative Technologist"
    const seeking = "Seeking Summer 2024 Internship"
    const about_code = "Where art meets code"
    const location = "Location 📍"
    const city = "BANGALORE"
    const ready_to = "Open to remote adventures"
    const speciality = "And creative collaborations"

    const aboutCards = [
        {
            count: "1",
            title: "Projects",
            boxColor: "bg-blue-300",
            rotate: "-rotate-1"
        },
        {
            count: "2",
            title: "Art Forms",
            boxColor: "bg-gray-400",
            rotate: "rotate-1"
        },
        {
            count: "2",
            title: "Internships",
            boxColor: "bg-pink-300",
            rotate: "-rotate-1"
        },
        {
            count: "♾️",
            title: "Creativity",
            boxColor: "bg-white",
            rotate: "rotate-1"
        }
    ]

    const detailCard = [
        {
            title: "Education 🎓",
            description: "Master of Computer Applications (MCA) from",
            subtitle1: "UOM, 2026",
            subtitle2: "CGPA: 8.5",
            boxColor:"bg-pink-300",
            rotate:"-rotate-1"

        },
        {
            title: "Mission 🎯",
            description: "Creative Technologist",
            subtitle1: "Seeking Summer 2024 Internship",
            subtitle2: "Where art meets code",
            rotate:"rotate-1",
            boxColor:"bg-gray-400",

        },
        {
            title: "Location 📍",
            description: "BANGALORE",
            subtitle1: "Open to remote adventures",
            subtitle2: "And creative collaborations",
            rotate:"-rotate-1",
            boxColor:"bg-blue-400",

        }

    ]

    return (
        <>
            <div className="flex flex-row pt-19 px-55">
                <div className="w-1/2 grid grid-cols-2 gap-3.5 pr-7.5">
                    <div className="text-center col-span-2 font-[cursive] p-2.5 text-[20px] border-3 border-solid border-black rounded-[15px] shadow-[10px_6px_2px_black] -rotate-1 transition-all delay-150 ease-auto hover:rotate-0 ">
                        <h2 className="text-white text-shadow-amber-950 text-left mb-2">{my_story}</h2>
                        <h4 className="text-amber-700">{about_my_story}</h4>
                    </div>
                    {
                        aboutCards.map((boxes, index) => {
                            return (
                                <div key={index} className={`{ text-center font-[cursive] p-2.5 text-[20px] border-3 border-solid border-black rounded-[15px] shadow-[10px_6px_2px_black] ${boxes.rotate} transition-all delay-150 ease-auto ${boxes.boxColor} hover:rotate-0 }`}>
                                    <b>{boxes.count}</b><br />{boxes.title}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-1/2 grid gap-5 grid-row-3 pl-8">
                    {
                        detailCard.map((detail, index) => {
                            return (
                                <div key={index} className={`font-[cursive] p-2.5 text-[20px] border-3 border-solid border-black rounded-[15px] shadow-[10px_6px_2px_black] ${detail.rotate} transition-all delay-150 ease-auto ${detail.boxColor} hover:rotate-0 `}>
                                    <div className="flex flex-row items-center">
                                        <div>
                                            {/* <img src="./education.jpg" alt="education" style="border-radius: 50%;height: 50px;" /> */}
                                        </div>
                                        <div>
                                            <h3>{detail.title}</h3>
                                        </div>
                                    </div>
                                    <p className="m-0"><b>{detail.description}<br />{detail.subtitle1}</b></p>
                                    <p className="m-0">{detail.subtitle2}</p>
                                </div>
                            )
                        })
                    }

                     {/* <div className=" font-[cursive] p-2.5 text-[20px] border-3 border-solid border-black rounded-[15px] shadow-[10px_6px_2px_black] rotate-1 transition-all delay-150 ease-auto bg-gray-400 hover:rotate-0">
                        <div className="flex flex-row items-center">
                            
                            <div>
                                <h3>{mission}</h3>
                            </div>
                        </div>
                        <p className="m-0"><b>{creative_tech}</b></p>
                        <p className="m-0">{seeking}<br />{about_code}</p>
                    </div>
                    <div className=" font-[cursive] p-2.5 text-[20px] border-3 border-solid border-black rounded-[15px] shadow-[10px_6px_2px_black] -rotate-1 transition-all delay-150 ease-auto bg-blue-300 hover:rotate-0">
                        <div className="flex flex-row items-center">
                            
                            <div>
                                <h3>{location}</h3>
                            </div>
                        </div>
                        <p className="m-0"><b>{city}</b></p>
                        <p className="m-0">{ready_to}<br />{speciality}</p>
                    </div>  */}
                </div>
            </div>
        </>
    )
}

export default About_content;