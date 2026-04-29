import "./Hero.css"



function Hero() {

    return (
        <>
            <div className="row2">
        <div className="r2l">
          <div className="sticker1"><strong>CREATIVE CODER</strong></div>
          <div className="content">
            <h1>Hello! I'm<br></br><span>Lathesh</span></h1>
            <p>"I turn complex problem into <span >beautiful solution</span> through code,
              creativity, touch of magic✨"</p>
            <div className="seelet">
              <button type="button"
                id="btn1"><a href="#projects" className="see">See My Art 🎨</a></button>
              <button type="button" 
                id="btn2"> <a href="#contacts" className="let">Let's Chart 💬</a></button>
            </div>
          </div>
          <div className="sticker2"><strong>DIGITAL ARTIST</strong></div>
        </div>
        <div className="r2r">
          <div className="lap">
            <div className="circle">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width={"85px"} height={"85px"} marginTop:{"23px"} viewBox="0 -64 640 640">
                        <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" />
                    </svg> */}
            </div>
          </div>
          <div className="yr">
            <p>2<sup>nd</sup> Year MCA</p>
          </div>
        </div>
      </div>
        </>
    )
}

export default Hero;