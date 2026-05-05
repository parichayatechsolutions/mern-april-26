import "./Row12.css"

function Row12() {
    const row12="SEND MESSAGE 🚀"
    const location="Find Me Here 📍"
    const mail="lathesh@gmail.com"
    const collab="For magical collaboration"
    const phn="1234567890"
    const chat="Let's Chat For Creativity"
    const city="Bangalore"
    const ebility="But My Ideas Are Global"
    const my_creativity="FOLLOW FOR CRATIVITY 🌈"
    return (
        <>
            <div className="row12">
                <div className="rw12l">
                    <form className="form">
                        <input type="text" placeholder="Your name" className="w" />
                        <input type="email" placeholder="Your email" className="w" />
                        <input type="text" placeholder="What is your big idea...." className="w" />
                        <textarea placeholder="Tell Me About your vision..." rows="5" className="w"></textarea>
                        <button type="submit" className="w1 anm"><strong>{row12}</strong></button>
                    </form>
                </div>
                <div className="rw12r">
                    <div className="r12-1">
                        <h3>Find Me Here 📍</h3>
                        <div className="mail">
                            <div className="mail1">
                                <img src="./mail.jpg" alt="mail" height="50px" width="50px" className="i12" />
                                <p><strong>{mail}</strong><br />{collab}</p>
                            </div>

                            <div className="mail1">
                                <img src="./call2.jpg" alt="call" height="50px" width="50px" className="i12" />
                                <p><strong>{phn}</strong><br />{chat}</p>
                            </div>
                            <div className="mail1">
                                <img src="./location.jpg" alt="location" height="50px" width="50px" className="i12"/>
                                <p><strong>{city}</strong><br />{ebility}</p>
                            </div>
                        </div>
                    </div>
                    <div className="r12-2">
                        <h3>{my_creativity}</h3>
                        <div className="mail2">
                            <div>
                                <img src="./linkedin.svg" alt="linkedin" height="40px" width="40px"className="i12"/>
                            </div>
                            <div>
                                <img src="./github.jpg" alt="github" height="40px" width="40px" className="i12"/>
                            </div>
                            <div>
                                <img src="./basketball.jpg" alt="ball" height="40px" width="40px" className="i12"/>
                            </div>
                            <div>
                                <img src="./twitter.jpg" alt="twitter" height="40px" width="40px" className="i12" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Row12;