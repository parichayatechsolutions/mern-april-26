import "./Skill.css"

function Skill() {
    const heading = ["Technical Skills", "A comprehensive overview of my technical competencies and areas of", "expertise."]
    const head = "Programing Languages"
    const head1 = "Technologies and Tools"
    const gridBox = ["React", "Node.js", "MongoDB", "Docker", "Git", "Firebase"]
    const head2 = "Area Of Interests"
    const areaOfInterest = [
        {
            title: "Machine Learning",
            boxColor: " bg-purple-200 text-purple-700"
        },
        {
            title: " Web Development",
            boxColor: " bg-blue-200 text-blue-700"
        },
        {
            title: "Mobile Apps",
            boxColor: " bg-green-200 text-green-700"
        },
        {
            title: "Data Structure",
            boxColor: " bg-orange-200 text-orange-700"
        }
    ]

    const skillsKnown = [
        {
            title: "Python",
            percent: "70%",
            lineColor: "bg-purple-700",
            width: "w-[70%]"
        },
        {
            title: "Java",
            percent: "70%",
            lineColor: "bg-blue-700",
            width: "w-[70%]"
        },
        {
            title: "Javascript",
            percent: "80%",
            lineColor: "bg-green-700",
            width: "w-[80%]"
        },
        {
            title: "C/C++",
            percent: "80%",
            lineColor: "bg-orange-700",
            width: "w-[80%]"
        }
    ]
    return (

        <>
            <section id="Skill">
                <div className="mt-[40px] pl-4 pr-4">
                    <div className="text-center mb-[64px]">
                        <h1 className="text-[36px]">{`${heading[0]}`}</h1>
                        <p className="text-xl text-gray-400 pb-2">{`${heading[1]}`} <br />{`${heading[2]}`}</p>
                        <div className="rounded-xs w-[96px] h-1  place-self-center bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    </div>
                    <div className="flex flex-row w-full pl-4 pr-4">

                        <div className="flex flex-col w-[50%]">
                            <h1 className="text-xl">{head}</h1>
                            {
                                skillsKnown.map((skill, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="flex">
                                                <div className="flex w-full items-center justify-between text-[16px] p-2.5">
                                                    <div className="flex gap-2">
                                                        <div className={`h-2.5 w-2.5 rounded-[50%] ${skill.lineColor} place-self-center`}></div>
                                                        <span>{skill.title}</span>
                                                    </div>
                                                </div>
                                                <div className="place-self-center">{skill.percent}</div>
                                            </div>
                                            <div className="relative w-full h-2.5 rounded-xl bg-gray-200">
                                                <div className={`flex absolute ${skill.width} h-2.5 rounded-xl ${skill.lineColor}`}></div>
                                            </div>
                                        </div>

                                    )

                                })
                            }
                        </div>

                        <div className="w-[50%] pl-4 pr-4">

                            <div className="flex flex-col">
                                <h1 className="text-xl ml-[30px]">{head1}</h1>
                                <div className="grid grid-cols-2 grid-rows-3 gap-4 p-4 mb-[32px]">
                                    {
                                        gridBox.map((grid, index) => {
                                            return (
                                                <div key={index} className="flex gap-2.5 bg-gray-100 items-center rounded-[8px] p-4">
                                                    <span>{grid}</span>
                                                </div>
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </div>
                            <h1 className="text-xl ml-[30px]">{head2}</h1>
                            <div className="grid gap-5 grid-cols-3 grid-rows-2 p-4">
                                {
                                    areaOfInterest.map((interest,index)=> {
                                        return (
                                            <div key={index} className={`rounded-lg w-fit ${interest.boxColor} text-[18px] p-3.5`}>
                                                {interest.title}
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}

export default Skill