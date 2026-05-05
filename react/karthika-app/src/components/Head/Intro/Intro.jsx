import "./Intro.css"

function Intro(){
const year= "Year Computer Science Student"
const txt="Hi, I'm"
const name="Karthika K"
const work="View My Work"
const job="Seeking Jobs"
const info="Get in touch"
const para="Passionate about creating innovative software solutions and exploring the intersection of technology and human needs."
    return(

        <>
        <div className="two">
            <div className="l1">
                <div className="info">
                    
                    <h3 className="stud">2<sup>nd</sup>{year}</h3>
                </div>
                <div className="n">
                    <h1>{txt} <span>{name}</span> </h1>

                    <p>{para}</p>
                </div>
                <div>
                    <nav className="navi1">
                        <div className="work">
                            
                            <a href="#">{work}</a>
                        </div>
                        <div className="work2">
                           
                            <a href="#">{info}</a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="r1">
                {/* <img src="" alt="photo" class="pic"/> */}
                <div className="job">{job}</div>
            </div>
        </div></>
    )
}

export default Intro
   