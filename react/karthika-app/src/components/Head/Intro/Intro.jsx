import "./Intro.css"

function Intro() {

    const IntroDetails = {
        year: "Year Computer Science Student",
        txt: "Hi, I'm",
        name: "Karthika K",
        work: "View My Work",
        job: "Seeking Jobs",
        info: "Get in touch",
        para: "Passionate about creating innovative software solutions and exploring the intersection of technology and human needs."
    }
    return (

        <>
            <div className="bg-black text-white pt-[140px] flex h-[420px] pl-4 pr-4">
                <div className="w-[60%] gap-4 ml-15">
                    <div className="flex gap-1.5 w-fit items-center p-1.25 rounded-xl bg-purple-200 text-black">

                        <h3 className="text-[15px] m-0">2<sup>nd</sup>{IntroDetails.year}</h3>
                    </div>
                    <div className="pt-4">
                        <h1 className="text-6xl">{IntroDetails.txt} <span className="text-6xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">{IntroDetails.name}</span> </h1>

                        <p className="text-[25px] text-gray-300 font-light">{IntroDetails.para}</p>
                    </div>
                    <div>
                        <nav className="flex gap-[15px] px-4 py-5">
                            <div className="flex flex-row gap-2.5 text-xl justify-center w-fit py-2 px-5.5  rounded-[10px] bg-gradient-to-r from-purple-500 to-pink-500">
                                <a classname="text-white no-underline" href="#">{IntroDetails.work}</a>
                            </div>
                            <div className="flex flex-row gap-2.5 border-4 rounded-[10px] py-2 px-5.5 bg-white text-xl justify-center w-fit">
                                <a className="text-black no-underline" href="#">{IntroDetails.info}</a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="relative w-[40%]">
                    {/* <img src="" alt="photo" class="pic"/> */}
                    <div className="absolute right-[5px] bottom-[10px] border-1 rounded-xl p-2 text-xl w-fit text-white ">{IntroDetails.job}</div>
                </div>
            </div></>
    )
}

export default Intro
