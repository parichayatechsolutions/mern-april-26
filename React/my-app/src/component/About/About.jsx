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

    
    return(
        < >

        <section id="about">
            <div className="about_sec">
                <div className="heading1">
                    <h3> {ab} </h3>
                    <p>{para2}</p>
                </div>
                <div className="third">
                    <div className="heading2">
                        <div className="t_mid">
                            <h3>{my}</h3>
                            <p>{para3}<br></br></p>
                            <p>{para4}</p>
                            <div className="per">
                                <div className="per_1">
                                    <div className="p tw">{per1}</div>
                                    <div className="c tw">{per2}</div>
                                </div>
                                <div className="per_2">
                                    <div className="p la">{per3}</div>
                                    <div className="c la">{per4}</div>
                                </div>
                                <div className="per_3">
                                    <div className="p in">{per5}</div>
                                    <div className="c in">{per6}</div>
                                </div>
                                <div className="per_4">
                                    <div className="p cer">{per7}</div>
                                    <div className="c cer">{per8}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="th_r">
                        <div className="edu">
                            <div className="edu_s">
                                {/* <span><svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="30px" height="30px"
                                        viewBox="0 0 32 32">
                                        <path
                                            d="M 16 4.875 L 15.53125 5.125 L 2.03125 12.125 L 0.3125 13 L 2 13.84375 L 2 22.28125 C 1.402344 22.628906 1 23.261719 1 24 C 1 25.105469 1.894531 26 3 26 C 4.105469 26 5 25.105469 5 24 C 5 23.261719 4.597656 22.628906 4 22.28125 L 4 14.875 L 6 15.90625 L 6 21 C 6 21.441406 6.203125 21.839844 6.4375 22.09375 C 6.671875 22.347656 6.957031 22.5 7.25 22.65625 C 7.839844 22.964844 8.539063 23.183594 9.40625 23.375 C 11.140625 23.761719 13.453125 24 16 24 C 18.546875 24 20.859375 23.761719 22.59375 23.375 C 23.460938 23.183594 24.160156 22.964844 24.75 22.65625 C 25.042969 22.5 25.328125 22.347656 25.5625 22.09375 C 25.796875 21.839844 26 21.441406 26 21 L 26 15.90625 L 29.96875 13.875 L 31.6875 13 L 29.96875 12.125 L 16.46875 5.125 Z M 16 7.125 L 27.3125 13 L 25.53125 13.90625 C 25.304688 13.667969 25.03125 13.492188 24.75 13.34375 C 24.164063 13.035156 23.460938 12.816406 22.59375 12.625 C 20.863281 12.238281 18.558594 12 16 12 C 13.441406 12 11.136719 12.238281 9.40625 12.625 C 8.539063 12.816406 7.835938 13.035156 7.25 13.34375 C 6.96875 13.492188 6.695313 13.667969 6.46875 13.90625 L 4.6875 13 Z M 16 14 C 18.441406 14 20.636719 14.222656 22.15625 14.5625 C 22.914063 14.730469 23.523438 14.925781 23.84375 15.09375 C 23.945313 15.148438 23.960938 15.1875 24 15.21875 L 24 19.03125 C 23.582031 18.878906 23.125 18.742188 22.59375 18.625 C 20.859375 18.238281 18.546875 18 16 18 C 13.453125 18 11.140625 18.238281 9.40625 18.625 C 8.875 18.742188 8.417969 18.878906 8 19.03125 L 8 15.21875 C 8.039063 15.1875 8.054688 15.148438 8.15625 15.09375 C 8.476563 14.925781 9.085938 14.730469 9.84375 14.5625 C 11.363281 14.222656 13.558594 14 16 14 Z M 16 20 C 18.425781 20 20.632813 20.222656 22.15625 20.5625 C 22.789063 20.703125 23.1875 20.851563 23.53125 21 C 23.1875 21.148438 22.789063 21.296875 22.15625 21.4375 C 20.632813 21.777344 18.425781 22 16 22 C 13.574219 22 11.367188 21.777344 9.84375 21.4375 C 9.210938 21.296875 8.8125 21.148438 8.46875 21 C 8.8125 20.851563 9.210938 20.703125 9.84375 20.5625 C 11.367188 20.222656 13.574219 20 16 20 Z" />
                                    </svg></span> */}
                            </div>
                            <h3>{ed}</h3>
                            <p>{ed1}<br></br></p>
                            <p>{ed2}<br></br></p>
                            <p>{ed3}</p>
                        </div>
                        <div className="car">
                            <div className="car_s">
                                {/* <span><svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="20px" height="20px"
                                        viewBox="0 0 24 24" role="img">
                                        <path
                                            d="M12 24C5.342 24 0 18.582 0 12 0 5.342 5.342 0 12 0s12 5.342 12 12c0 6.582-5.342 12-12 12zm0-21.986c-5.497 0-9.987 4.489-9.987 9.986 0 5.498 4.49 9.988 9.987 9.988 5.498 0 9.987-4.49 9.987-9.988 0-5.497-4.489-9.986-9.987-9.986zm5.885 11.148H9.213c-.384 0-.695-.309-.698-.691v-1.012c0-.387.311-.697.698-.697h8.748c.387 0 .697.311.697.697v1.006c-.077.387-.387.697-.773.697zm-2.246-3.871H6.891c-.383.002-.697-.307-.698-.691V7.59c0-.311.31-.621.697-.621h8.748c.31 0 .62.311.62.619v1.006c.001.386-.31.697-.619.697zm-8.748 5.418h8.748c.388 0 .696.311.696.697v1.006c.002.383-.309.695-.691.697H6.891c-.388-.076-.697-.387-.697-.773V15.33c-.001-.31.309-.621.697-.621z" />
                                    </svg></span> */}
                            </div>
                            <h3>{ca1}</h3>
                            <p>{ca2}<br></br></p>
                            <p>{ca3}<br></br></p>
                        </div>
                        <div className="loc">
                            <div className="loc_s">
                                {/* <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.0" id="Layer_1" width="20px" height="20px" viewBox="0 0 64 64"
                                        enable-background="new 0 0 64 64" xml:space="preserve">
                                        <g>
                                            <path fill="#ffffff"
                                                d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64   s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39   h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z" />
                                            <path fill="#ffffff"
                                                d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32   c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" />
                                            <path fill="#ffffff"
                                                d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36   c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z" />
                                        </g>
                                    </svg></span> */}
                            </div>
                            <h3>{lo}</h3>
                            <p>{lo1}<br></br></p>
                            <p>{lo2}<br></br></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About