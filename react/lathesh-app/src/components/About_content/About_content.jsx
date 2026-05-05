import "./About_content.css"

function About_content() {
    const my_story= "My Story 📖"
    const about_my_story="I'm a passionate web developer with a love for creating beautiful and functional websites. With a background in computer science and a keen eye for design, I strive to bring my clients' visions to life through innovative and user-friendly web solutions."
    const count1="1+"
    const project="Projects"
    const count2="2"
    const art="Art forms"
    const internship="Internships"
    const infinity="♾️"
    const creativity="Creativity"
    const education="Education 🎓"
    const course="Master of Computer Applications (MCA) from UOM, 2026"
    const cgpa="CGPA: 8.5"
    const mission="Mission 🎯"
    const creative_tech="Creative Technologist"
    const seeking="Seeking Summer 2024 Internship"
    const about_code="Where art meets code"
    const location="Location 📍"
    const city="BANGALORE"
    const ready_to="Open to remote adventures"
    const speciality="And creative collaborations"

    return (
        <>
            <div className="row4">
                <div className="r4l">
                    <div className="iteml item1">
                        <h2>{my_story}</h2>
                        <h4>{about_my_story}</h4>
                    </div>
                    <div className="iteml item2">
                        <b>{count1}</b><br />{project}
                    </div>
                    <div className="iteml item3">
                        <b>{count2}</b><br />{art}
                    </div>
                    <div className="iteml item4">
                        <b>{count2}</b><br />{internship}
                    </div>
                    <div className="iteml item5">
                        <b>{infinity}</b><br />{creativity}
                    </div>
                </div>
                <div className="r4r">
                    <div className="itemr item6">
                        <div className="i3">
                            <div>
                                {/* <img src="./education.jpg" alt="education" style="border-radius: 50%;height: 50px;" /> */}
                            </div>
                            <div>
                                <h3>{education}</h3>
                            </div>
                        </div>
                        <p><b>{course}</b></p>
                        <p>{cgpa}</p>
                    </div>
                    <div className="itemr item7">
                        <div className="i3">
                            <div>
                                {/* <img src="./mission.jpg" alt="mission" style="border-radius: 50%;height: 50px;width:55px;" /> */}
                            </div>
                            <div>
                                <h3>{mission}</h3>
                            </div>
                        </div>
                        <p><b>{creative_tech}</b></p>
                        <p>{seeking}<br />{about_code}</p>
                    </div>
                    <div className="itemr item8">
                        <div className="i3">
                            <div>
                                {/* <img src="./location.jpg" alt="location" style="border-radius: 50%;height: 50px;" /> */}
                            </div>
                            <div>
                                <h3>{location}</h3>
                            </div>
                        </div>
                        <p><b>{city}</b></p>
                        <p>{ready_to}<br />{speciality}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About_content;