import "./Contact.css"

function Contact() {
const heading=["Let's Connect","I'm currently looking for internship opportunities for Summer 2024. Feel free to", "reach out if you have any questions or would like to connect!"]
const head="Get In Touch"
const details=["E-mail","karthikakrishnan2004@gmail.com","Phone","7349149104","Location","Banglore, India","Follow Me"]
const form=["Your Name","Your E-mail","Subject","Your Message","Send Message"]

    return (
        <>
            <section id="Contact">
                <div className="seven">
                    <div className="seven1">
                        <h1>{`${heading[0]}`}</h1>
                        <p>{`${heading[1]}`}<br />{`${heading[2]}`}</p>
                        <div className="line"></div>
                    </div>
                    <div className="both">
                        <div className="connect">
                            <div className="details1">
                                <div className="conn1">
                                    <h1>{head}</h1>
                                    <div className="mail">
                                       
                                        <div className="e">
                                            <p>{`${details[0]}`}</p>
                                            <h4>{`${details[1]}`}</h4>
                                        </div>
                                    </div>
                                    <div className="phn">
                                       
                                        <div className="p1">
                                            <p>{`${details[2]}`}</p>
                                            <h4>{`${details[3]}`}</h4>
                                        </div>
                                    </div>
                                    <div className="loc">
                                      
                                        <div className="l">
                                            <p>{`${details[4]}`}</p>
                                            <h4>{`${details[5]}`}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="conn2">
                                    <h1>{`${details[6]}`}</h1>
                                    <div className="items">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="form">
                                <div className="your-name">
                                    <div className="nam">
                                        <label>{`${form[0]}`}</label>
                                        <input type="text" placeholder="Enter your Name" />
                                    </div>
                                    <div className="nam">
                                        <label>{`${form[1]}`}</label>
                                        <input type="text" placeholder="Enter your E-mail" />
                                    </div>
                                </div>
                                <div className="nam2">
                                    <label>{`${form[2]}`}</label>
                                    <input type="text" placeholder="Enter your Subject" />
                                </div>
                                <div className="nam1">
                                    <label>{`${form[3]}`}</label>
                                    <input type="text" placeholder="Enter your Message" />
                                </div>
                                <button type="Submit">{`${form[4]}`}<span></span></button>
                            </div>
                        </div>
                    </div>
                </div>
        </section >  
          </>
    )
}

export default Contact