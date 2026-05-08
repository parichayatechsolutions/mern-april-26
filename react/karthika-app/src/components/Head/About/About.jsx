import "./About.css"

function About() {
    const about = "About Me"
    const info = "QUICKINFO"

    const details = [
        {
            title: "E-mail",
            desc: "karthikakrishnan2004@gmail.com",
        },
        {
            title: "Phone",
            desc: "7349149104",
        },
        {
            title: "Location",
            desc: "Banglore, India"
        },
        {
            title: "Availability",
            desc: "Summer 2026 Internship",
        },
    ]

    const paragraph = [
        {
            para1: "I'm a passionate 2rd-year Computer Science student with a strong interest in web devleopment, app development and creating innovative solutions. I enjoy tackling complex problems and turning ideas into functional applications.",
            para2: "Through my coursework and personal projects, I've developed a solid foundation in programming, data structures, and software engineering principles.I'm currently seeking internship opportunities to apply my skills in a professional environment and contribute to meaningful projects."
        }
    ]
    const aboutMeCards = [
        {
            cardTite: "Education",
            subtitle1: "Master Of Computer Science",
            subtitle2: "Mysore University | 2024-2026",
            subtitle3: "CGPA: 8.4/10"
        }, {
            cardTite: "Career Goal",
            subtitle1: "Seeking Summer 2024 Internship",
            subtitle2: "Software Development & Web development",
            subtitle3: ""
        }
    ]
    return (
        <>
            <section id="About">
                <div className="mt-10 pl-4 pr-4">
                    <div className="flex flex-col p-2.5 text-2xl text-center mb-[-25px]">
                        <h1 className="text-[36px]">{about}</h1>
                        <div className="rounded-xs w-[96px] h-1 place-self-center bg-gradient-to-r from-purple-500 to-pink-500">
                        </div>
                    </div>
                    <div className="flex justify-between pt-[45px]">
                        <div className="flex flex-col w-[60%]">
                            {
                                paragraph.map((info, index) => {
                                    return (
                                        <p className="text-[20px]/[28px]  mb-6 m-0 ">{info.para1}<br /><br /> <br />{info.para2}</p>
                                    )
                                })
                            }
                            <div className="grid grid-cols-2 gap-10 w-full ">
                                {aboutMeCards.map((card, index) => {
                                    console.log(card)
                                    return (
                                        <div key={index} className="border rounded-xl h-[125px] p-2.5 bg-gray-100 backdrop-opacity-10 text-gray-200">
                                            <div className="flex flex-col text-black gap-3">
                                                <h3><b>{card.cardTite}</b></h3>

                                                <p> {card.subtitle1}<br />
                                                    {card.subtitle2}<br />
                                                    {card.subtitle3}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col w-[40%] h-[300px] text-white p-5 gap-y-1">
                            <div className="bg-black p-[30px] border-4 rounded-2xl">
                                <h3><b>{info}</b></h3>
                                {
                                    details.map((information, index) => {
                                        return (
                                            <div key={index} className="flex gap-[5px] items-center">

                                                <div className="flex flex-col">
                                                    <p>{information.title}</p>
                                                    <h4>{information.desc}</h4>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}


export default About
