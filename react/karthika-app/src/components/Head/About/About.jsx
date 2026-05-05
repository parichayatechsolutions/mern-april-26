import "./About.css"

function About() {
    const about = "About Me"
    const edu = "Education"
    const info = "QUICKINFO"
    const cs = "Master Of Computer Science"
    const uni = "Mysore University | 2024-2026"
    const cgpa = "CGPA: 8.4/10"
    const goal = "Career Goal"
    const internship = "Seeking Summer 2024 Internship"
    const software = " Software Development & Web development"
    const l1 = "Location"
    const l2 = "Banglore, India"
    const para1 = "I'm a passionate 2rd-year Computer Science student with a strong interest in web devleopment, app development and creating innovative solutions. I enjoy tackling complex problems and turning ideas into functional applications."
    const para2 = "Through my coursework and personal projects, I've developed a solid foundation in programming, data structures, and software engineering principles.I'm currently seeking internship opportunities to apply my skills in a professional environment and contribute to meaningful projects."
    const e1 = "E-mail"
    const e2="karthikakrishnan2004@gmail.com"
    const ph1="Phone"
    const ph2="7349149104"
    const ava1="Availability"
    const ava2="Summer 2026 Internship"
    return (
        <>
            <section id="About">
                <div className="three">
                    <div className="abt">
                        <h1>{about}</h1>
                    </div>
                    <div className="line">

                    </div>
                    <div className="t">
                        <div className="txt">
                            <p className="pt">{para1}</p>
                            <br />
                            <br />
                            <br />
                            <p>{para2}
                            </p>
                            <div className="t1">
                                <div className="txt1">
                                    <div className="edu">
                                        <h3><b>{edu}</b></h3>
                                    </div>
                                    <p> {cs}<br />
                                        {uni}<br />
                                        {cgpa}
                                    </p>
                                </div>
                                <div className="txt2">
                                    <div className="goal">

                                        <h3><b>{goal}</b></h3>
                                    </div>
                                    <p>{internship}<br />
                                        {software}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <div className="details-div">
                                <h3><b>{info}</b></h3>
                                <div className="loc">

                                    <div className="l">
                                        <p>{l1}</p>
                                        <h4>{l2}</h4>
                                    </div>
                                </div>
                                <div className="mail">
                                    <div className="e">
                                        <p>{e1}</p>
                                        <h4>{e2}</h4>
                                    </div>
                                </div>
                                <div className="phn">
                                    <div className="p1">
                                        <p>{ph1}</p>
                                        <h4>{ph2}</h4>
                                    </div>
                                </div>
                                <div className="available">
                                    
                                    <div className="ava">
                                        <p>{ava1}</p>
                                        <h4>{ava2}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}


export default About
