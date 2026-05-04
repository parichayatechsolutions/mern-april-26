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
                <div className="heading5">
                    <h3>{ex}</h3>
                    <p>{ex2}</p>
                </div>
                <div className="ex">
                    <div className="fourth">
                        <div className="time"></div>
                        <div className="f_t">
                            <div className="t_l">
                                <h3>{ex3}</h3>
                            </div>
                            <div className="t_r">
                                <p>{ex4}</p>
                            </div>
                        </div>
                        <div className="f_b">
                            <p>{ex5}</p>
                            <ul>
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