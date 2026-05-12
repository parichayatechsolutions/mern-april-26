import "./About.css"


function About() {
    const ab = "About Me"
    const para2 = "Passionate engineer with a focus on creating efficient, scalable solutions."
    const my = "My Journey"
    const para3 = "I'm a passionate 3rd-year Computer Engineering student who loves creating digital solutions that make a difference. My approach combines technical expertise with creative thinking to build applications that are both powerful and user-friendly."
    const para4 = "Through my coursework and personal projects, I've developed a solid foundation in programming, data structures, and software engineering principles. I'm currently seeking internship opportunities to apply my skills in a professional environment and contribute to meaningful projects."
    const per1 = "2"
    const per2 = "Projects"
    const per3 = "6+"
    const per4 = "Languages"
    const per5 = "1"
    const per6 = "Internship"
    const per7 = "4"
    const per8 = "Certifications"
    const ed = "Education"
    const ed1 = "Master of Computer Applications"
    const ed2 = "Mysore University | 2024-2026"
    const ed3 = "CGPA: 8.3/10"
    const ca1 = "Career Focus"
    const ca2 = "Software Development & AI"
    const ca3 = "Seeking Internship and job"
    const lo = "Location"
    const lo1 = "Vasantha Nagara,"
    const lo2 = "Mysuru 570028"

    const scoreCard = [
        {
            no1: "2",
            desc: "Projects"
        },
        {
            no1: "6+",
            desc: "Languages"
        },
        {
            no1: "1",
            desc: "Internship"
        },
        {
            no1: "4+",
            desc: "Certification"
        }

    ]

    const detailsCard = [
        {
            heading1: "Education",
            subt1: "Master of Computer Applications",
            subt2: "Mysore University | 2024-2026",
            subt3: "CGPA: 8.3/10"

        },
        {
            heading1: "Career Focus",
            subt1: "Software Development & AI",
            subt2: "Seeking Internship and job",
            subt3: ""
        },
        {
            heading1: "Location",
            subt1: "Vasantha Nagara",
            subt2: "Mysuru 570028",
            subt3: ""
        }
    ]

    return (
        < >

            <section id="About">
                <div className="about_sec ml-auto mr-auto max-w-7xl">
                    <div className="heading1 font-bold text-4xl leading-10 mb-4 text-center ">
                        <h3> {ab} </h3>
                    </div>
                    <div className="para text-gray-600 text-xl ml-auto mr-auto max-w-2xl leading-7 text-center">
                        <p>{para2}</p>
                    </div>
                    <div className="third grid grid-cols-3 gap-9 box-border border-solid border-gray-300 pt-5">
                        <div className="heading2 grid col-span-2 box-border border-solid border-gray-300 ">
                            <div className="t_mid p-9 rounded-2xl bg-white box-border border-solid border-gray-300 shadow-lg/15 h-fit transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                                <h3 className="font-bold text-black text-2xl leading-8">{my}</h3>
                                <p className="text-gray-600 mb-6 grid text-xl pt-2.5">{para3}<br></br></p>
                                <p className="text-gray-600 mb-6 grid text-xl pt-2.5">{para4}</p>
                                <div className=" grid-cols-4 grid gap-6 pt-5 ">
                                    {
                                        scoreCard.map((card, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className="font-bold text-3xl leading-9 mb-2 bg-linear-to-r from-indigo-400 to-purple-800 text-center bg-clip-text text-transparent" >
                                                        {card.no1}
                                                    </div>
                                                    <div className="text-gray-600 text-sm leading-5 text-center">
                                                        {card.desc}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="th_r max-w-sm m-auto flex flex-col gap-6 w-full ">
                                <div className="edu bg-white p-6 rounded-2xl box-border border-solid border-gray-300 shadow-lg/15 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                                    {
                                        detailsCard.map((detail, index) => {
                                            return (
                                                <div key={index}>
                                                    <h3 className=" mt-5 text-xl text-black font-semibold">{detail.heading1}</h3>
                                                    <p className="text-lg text-gray-600 ">{detail.subt1}<br></br></p>
                                                    <p className="text-lg text-gray-600">{detail.subt2}<br></br></p>
                                                    <p className="text-lg text-gray-600">{detail.subt3}</p>
                                                </div>

                                            )
                                        })

                                    }

                                </div>
                        </div>
                        {/* <div className="car bg-white p-6 rounded-2xl box-border border-solid border-gray-300 shadow-lg/15">
                        <div className="car_s">
                            <span className=" w-14 h-14 flex items-center justify-center rounded-2xl text-white bg-linear-to-r from-pink-400 to-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="20px" height="20px"
                                viewBox="0 0 24 24" role="img">
                                <path
                                    d="M12 24C5.342 24 0 18.582 0 12 0 5.342 5.342 0 12 0s12 5.342 12 12c0 6.582-5.342 12-12 12zm0-21.986c-5.497 0-9.987 4.489-9.987 9.986 0 5.498 4.49 9.988 9.987 9.988 5.498 0 9.987-4.49 9.987-9.988 0-5.497-4.489-9.986-9.987-9.986zm5.885 11.148H9.213c-.384 0-.695-.309-.698-.691v-1.012c0-.387.311-.697.698-.697h8.748c.387 0 .697.311.697.697v1.006c-.077.387-.387.697-.773.697zm-2.246-3.871H6.891c-.383.002-.697-.307-.698-.691V7.59c0-.311.31-.621.697-.621h8.748c.31 0 .62.311.62.619v1.006c.001.386-.31.697-.619.697zm-8.748 5.418h8.748c.388 0 .696.311.696.697v1.006c.002.383-.309.695-.691.697H6.891c-.388-.076-.697-.387-.697-.773V15.33c-.001-.31.309-.621.697-.621z" />
                            </svg></span>
                        </div>
                        <h3 className=" mt-5 text-xl text-black font-semibold">{ca1}</h3>
                        <p className="text-lg text-gray-600">{ca2}<br></br></p>
                        <p className="text-lg text-gray-600">{ca3}<br></br></p>
                    </div>
                    <div className="loc bg-white p-6 rounded-2xl box-border border-solid border-gray-300 shadow-lg/15">
                        <div className="loc_s">
                            <span className=" w-14 h-14 flex items-center justify-center rounded-2xl text-white bg-linear-to-r from-indigo-400 to-purple-800"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.0" id="Layer_1" width="20px" height="20px" viewBox="0 0 64 64"
                                enableBackground="new 0 0 64 64" xmlSpace="preserve">
                                <g>
                                    <path fill="#ffffff"
                                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64   s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39   h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z" />
                                    <path fill="#ffffff"
                                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32   c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" />
                                    <path fill="#ffffff"
                                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36   c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z" />
                                </g>
                            </svg></span>
                        </div>
                        <h3 className="text-xl text-black font-semibold">{lo}</h3>
                        <p className="text-lg text-gray-600">{lo1}<br></br></p>
                        <p className="text-lg text-gray-600">{lo2}<br></br></p>
                    </div> */}
                    </div>
                </div>

            </section >
        </>
    )
}

export default About 