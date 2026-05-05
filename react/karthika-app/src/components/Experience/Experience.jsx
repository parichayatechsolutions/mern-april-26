import "./Experience.css"

function Experience() {
const heading=["Experience & Activities","My journey through internships, leadership roles, and community engagement."]
const data1=["Software Development Intern","Summer 2023","Tech Solutions Inc","Developed and maintained web applications using React and Node.js","Collaborated with a team of 5 developers in an Agile environment","Implemented RESTful APIs and integrated with MongoDB database","Improved application performance by 15% through code optimization"]
const data2=["Technical Club Head","2022 - Present","University Coding Club","Organized coding workshops and hackathons for 100+ students","Mentored junior students in programming and project development","Coordinated with faculty and industry professionals for guest lectures"]
const data3=["Volunteer Teacher","2021-2022","Code for Kids Initiative","Taught basic programming concepts to underprivileged children","Developed curriculum and learning materials for Scratch programming","Helped organize a coding competition with 50+ participants"]

    return (

        <>
            <section id="Experience">
                <div className="six">
                    <div className="Act">
                        <h1>{`${heading[0]}`}</h1>
                        <p>{`${heading[1]}`}</p>
                        <div className="line"></div>
                    </div>
                    <div className="data">
                        <div className="data1">
                            <h1 className="heading">{`${data1[0]}`}<span>{`${data1[1]}`}</span></h1>
                            <p>{`${data1[2]}`}</p>
                            <ul>
                                <li>{`${data1[3]}`}</li>
                                <li>{`${data1[4]}`}</li>
                                <li>{`${data1[5]}`}</li>
                                <li>{`${data1[6]}`}</li>
                            </ul>
                        </div>
                        <div className="data2">
                            <h1 className="heading">{`${data2[0]}`}<span>{`${data2[1]}`}</span></h1>
                            <p>{`${data2[2]}`}</p>
                            <ul>
                                <li>{`${data2[3]}`}</li>
                                <li>{`${data2[4]}`}</li>
                                <li>{`${data2[5]}`}</li>
                            </ul>
                        </div>
                         <div className="data3">
                            <h1 className="heading">{`${data3[0]}`}<span>{`${data3[1]}`}</span></h1>
                            <p>{`${data3[2]}`}</p>
                            <ul>
                                <li>{`${data3[3]}`}</li>
                                <li>{`${data3[4]}`}</li>
                                <li>{`${data3[5]}`}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Experience
