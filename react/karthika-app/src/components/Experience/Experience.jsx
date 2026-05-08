import "./Experience.css"

function Experience() {
    const heading = ["Experience & Activities", "My journey through internships, leadership roles, and community engagement."]
    const data = [
        {
            heading: "Software Development Intern",
            leftHead: "Summer 2023",
            desc: "Tech Solutions Inc",
            list1: "Developed and maintained web applications using React and Node.js",
            list2: "Collaborated with a team of 5 developers in an Agile environment",
            list3: "Implemented RESTful APIs and integrated with MongoDB database",
            list4: "Improved application performance by 15% through code optimization"
        },
        {
            heading: "Software Development Intern",
            leftHead: "Summer 2023",
            desc: "Tech Solutions Inc",
            list1: "Developed and maintained web applications using React and Node.js",
            list2: "Collaborated with a team of 5 developers in an Agile environment",
            list3: "Implemented RESTful APIs and integrated with MongoDB database",
            list4: "Improved application performance by 15% through code optimization"
        },
        {
            heading: "Software Development Intern",
            leftHead: "Summer 2023",
            desc: "Tech Solutions Inc",
            list1: "Developed and maintained web applications using React and Node.js",
            list2: "Collaborated with a team of 5 developers in an Agile environment",
            list3: "Implemented RESTful APIs and integrated with MongoDB database",
            list4: "Improved application performance by 15% through code optimization"
        }
    ]

    return (

        <>
            <section id="Experience">
                <div className="mt-[40px] px-4 pt-[32px] pb-[100px] bg-gray-100">
                    <div className="text-center mb-[64px]">
                        <h1 className="text-[36px]">{`${heading[0]}`}</h1>
                        <p className="text-xl text-gray-400 pb-2">{`${heading[1]}`}</p>
                        <div className="rounded-xs w-[96px] h-1 place-self-center bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        {
                            data.map((info, index) => {
                                return (
                                    <div key={index} className="rounded-xl bg-white w-[70%] p-4 items-center shadow-md/30">
                                        <h1 className="flex items-center justify-between text-2xl pl-5 pb-2">{info.heading}<span className="text-purple-600 text-lg">{info.leftHead}</span></h1>
                                        <p className="text-xl pl-5 pb-2">{info.desc}</p>
                                        <ul className="leading-7 list-disc px-10">
                                            <li>{info.list1}</li>
                                            <li>{info.list2}</li>
                                            <li>{info.list3}</li>
                                            <li>{info.list4}</li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default Experience
