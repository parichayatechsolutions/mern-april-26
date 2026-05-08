import "./Home.css"


function Home() {
    const para1 = "Passionate about creating innovative solutions through clean code, modern technologies, and creative problem-solving."
    const seek = "Seeking Internship"
    const view = "View Projects"
    const le = "Lets Connect"
    const no = "2"
    const sup = "nd"
    const year = "Year Computer Science Student"
    const build = "Building The"
    const span = "Future"
    const w = "With Code"

    return (

        < >
            <section id="Home">
                <div className="flex py-20 px-0 w-4/5 justify-between">
                    <div className="w-3/4">
                        <div className="s1 rounded-3xl bg-white text-blue-900 w-fit text-center text-xl flex items-center gap-4 py-0 px-5 shadow-lg ml-3.5 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                            <p>{no}<sup>{sup}</sup>{year}</p>
                        </div>
                        <div className="s2 flex text-6xl font-bold pt-9 pl-5">
                            <p>{build}<span className=" pl-2 bg-linear-to-r from-indigo-400 to-purple-800 bg-clip-text text-transparent">{span}</span><br></br>{w}</p>
                        </div>
                        <div className="s3 text-2xl text-gray-400 flex pt-5 pl-5">
                            <p>{para1}</p>
                        </div>
                        <div className="buttons flex gap-5 pl-5">
                            <a href="# View projects" className="btn1 flex items-center gap-2 bg-linear-to-r from-indigo-400 to-purple-800 no-underline text-white py-2 px-5 rounded-2xl text-xl font-medium mt-3.5 w-fit transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z"
                                        fill="#ffffff" />
                                    <path
                                        d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z"
                                        fill="#ffffff" />
                                    <path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z"
                                        fill="#ffffff" />
                                </svg></span>
                                <p>{view}</p>
                            </a>
                            <a href="#contact" className="btn2 flex items-center gap-2 bg-white no-underline text-black py-2 px-5 rounded-2xl text-xl font-medium mt-3.5 w-fit box-border shadow-lg/15 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px"
                                    viewBox="0 0 32 32" version="1.1">
                                    <title>paper-plane</title>
                                    <path
                                        d="M0 14.016l9.216 6.912 18.784-16.928-14.592 20.064 10.592 7.936 8-32zM8 32l6.016-4-6.016-4v8z" />
                                </svg></span>
                                <p>{le}</p>
                            </a>
                        </div>
                    </div>
                    <div className="second_r w-1/3 relative">
                        <div className="second_img rounded-2xl p-1.5 w-80 ml-5 border-purple-100">
                            <img src="./photo.png"></img>
                        </div>
                            <p className="absolute bg-white p-5 rounded-2xl bottom-0.5 text-xl shadow-lg/15 w-fit transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">{seek}</p>
                    </div>
                </div>
        </section >
    </>
    )
}

export default Home



