import "./Experience.css"


function Experience() {

    const ex = " Experience "
    const ex2 = "My professional journey and contributions."
    const ex3 = "Software Development Intern"
    const ex4 = "April 2025"
    const ex5 = "Parichaya Tech Solutions"
    const ex6 = "Developed web applications using React and Node.js"
    const ex7 = "Collaborated in Agile team environment"
    const ex8 = "Implemented RESTful APIs and database integration"


    return (

        <>

            <section id="experience">
                <div className="heading5 max-w-7xl ml-auto mr-auto text-center mt-28 pb-4">
                    <h3 className="text-black font-bold text-4xl leading-10 mr-auto ml-auto mb-4">{ex}</h3>
                    <p className="text-gray-600 text-xl leading-7">{ex2}</p>
                </div>
                <div className="ex p-6 rounded-2xl bg-white shadow-2xl/15 box-border border-solid border-gray-300 ml-80 w-2/4">
                    <div className="fourth relative mb-7">
                        <div className="time relative right-20 top-2.5 w-4 h-4 rounded-full bg-indigo-400 border-4 border-solid border-indigo-400"></div>
                        <div className="f_t flex justify-between">
                            <div className="t_l text-2xl font-semibold p-3.5">
                                <h3>{ex3}</h3>
                            </div>
                            <div className="t_r text-lg text-indigo-400 p-3.5">
                                <p>{ex4}</p>
                            </div>
                        </div>
                        <div className="f_b">
                            <p className="text-lg text-indigo-400">{ex5}</p>
                            <ul className=" text-lg list-disc pl-7">
                                <li>{ex6}</li>
                                <li>{ex7}</li>
                                <li>{ex8}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience