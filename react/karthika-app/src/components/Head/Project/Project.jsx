import "./Project.css"

function Project() {
    const heading = "Featured Projects"
    const para = ["A selection of my recent work showcasing different technical skills", "and problem-solving approaches."]
    const proj = "View All Projects"

    
    const projectCards = [
        {
            category: "AI/ML",
            title: "Smart Atendance System",
            description: "A facial recognition-based attendance system using Python and OpenCV that automates classroom attendance tracking.",
            skills: ["Python", "Open CV", "Machine Learning"],
            footerDesc: "Source Code",
            colorClass: "bg-gradient-to-r from-purple-400 to-purple-700",
            boxColor: "bg-purple-200 text-purple-700",
            sourceColor:"text-purple-700"
        },
        {
            category: "Mobile",
            title: "Task Management App",
            description: "A cross-platform mobile application for task management with cloud synchronization and team collaboration features.",
            skills: ["React Native", "Firebase", "Javascript"],
            footerDesc: "Source Code",
            colorClass: "bg-gradient-to-r from-blue-400 to-blue-700",
            boxColor: "bg-blue-200 text-blue-700",
            sourceColor:"text-blue-700"
        },
        {
            category: "Data Science",
            title: "Stock Price Predictor",
            description: "A machine learning model to predict stock prices using historical data and sentiment analysis from financial news.",
            skills: ["Python", "Tensorflow", "Pandas"],
            footerDesc: "Source Code",
            colorClass: "bg-gradient-to-r from-green-400 to-green-700",
            boxColor: "bg-green-200 text-green-700",
            sourceColor:"text-green-700"
        },
        {
            category: "E-commerce",
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.",
            skills: ["React", "Node.js", "MongoDB"],
            footerDesc: "Source Code",
            colorClass: "bg-gradient-to-r from-orange-400 to-orange-700",
            boxColor: "bg-orange-200 text-orange-700",
            sourceColor:"text-orange-700"
        }
    ]

    return (

        <>
            <section id="Project">
                <div className="flex flex-col mt-10 px-4 pt-[40px] bg-gray-100">
                    <div className="text-center mb-[64px]">
                        <h1 className="text-[36px]">{heading}</h1>
                        <p className="text-xl text-gray-500 pb-2">{`${para[0]}`} <br />{`${para[1]}`} </p>
                        <div className="rounded-xs w-[96px] h-1 place-self-center bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-x-[30px] gap-y-[30px] pl-4 pr-4">
                        {
                            projectCards.map((project, index) => {
                                console.log(project)
                                return (
                                    <div key={index} className="flex flex-col flex-wrap hover:shadow-[0px_5px_2px_gray]">
                                        <div className={`relative h-[200px]  ${project.colorClass} rounded-t-xl`}>
                                            <div className={`absolute top-[15px] right-[15px] border-2 rounded-3xl bg-white p-2 ${project.sourceColor}`}>{project.category}
                                            </div>
                                        </div>
                                        <div className="flex flex-col  h-[200px] p-6 bg-white rounded-b-xl">
                                            <div>
                                                <h1 className="text-xl/[28px] mb-2">{project.title}</h1>
                                                <p className="mb-4 text-gray-500">{project.description}</p>
                                            </div>
                                            <div className="flex flex-row gap-2.5">
                                                {
                                                    project.skills.map((skill, index) => {
                                                        return <div key={index} className={`w-fit rounded-2xl p-[5px] ${project.boxColor}`}>{`${skill}`}</div>
                                                    })
                                                }
                                            </div>
                                            <div>
                                                <div className={`flex items-center gap-2.5 ${project.sourceColor}`}>
                                                    <h3 className="p-1 text-lg">{project.footerDesc}</h3>
                                                </div>
                                                <div></div>

                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }

                    </div>
                    <div className="text-purple-700 text-xl text-center p-5">
                        <h3>{proj}</h3>
                    </div>


                </div>
            </section >

        </>
    )
}

export default Project