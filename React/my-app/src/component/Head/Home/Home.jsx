import "./Home.css"


function Home() {
    const para1 = "Passionate about creating innovative solutions through clean code, modern technologies, and creative problem-solving."
    const seek = "Seeking Internship"
    const view = "View Projects"
    const le = "Lets Connect"
    return (

        < >
            <section id="home">
                <div className="second">
                    <div className="second_l">
                        <div className="s1">
                            {/* <span>
                                <p>2<sup>nd</sup> Year Computer Science Student</p>
                            </span> */}
                        </div>
                        <div className="s2">
                            <p>Building The <span>Future</span> With Code</p>
                        </div>
                        <div className="s3">
                            <p>{para1}</p>
                        </div>
                        <div className="buttons">
                            <a href="# View projects" className="btn1">
                               {/* <span><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z"
                                        fill="#ffffff" />
                                    <path
                                        d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z"
                                        fill="#ffffff" />
                                    <path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z"
                                        fill="#ffffff" />
                                </svg></span>*/}
                                <p>{view}</p>
                            </a>
                            <a href="#contact" className="btn2">
                                {/* <span><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px"
                                    viewBox="0 0 32 32" version="1.1">
                                    <title>paper-plane</title>
                                    <path
                                        d="M0 14.016l9.216 6.912 18.784-16.928-14.592 20.064 10.592 7.936 8-32zM8 32l6.016-4-6.016-4v8z" />
                                </svg></span> */}
                                <p>{le}</p>
                            </a>
                        </div>
                    </div>
                    <div className="second_r">
                        <img src="./photo.png"></img>
                            <p>{seek}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home



