import "./Home.css"

const cc="CREATIVE CODER"
const intro="Hello! I'm"
const name="Lathesh"
const about1="I turn complex problem into"
const about2="beautiful solution"
const about3="through code,creativity, touch of magic✨"
const da= "DIGITAL ARTIST"
const yr1="2"
const yr2="nd"
const yr3="Year MCA"
const button1="See My Art 🎨"
const button2="Let's Chart 💬"
function Home() {

    return (
        <>
            <div className="flex flex-row pt-25 px-60">
                <div className="w-1/2 relative right-7">
                    <div className="absolute font-bold font-[cursive] border-2 border-solid border-black rounded-2xl shadow-[5px_5px_black] py-0.5 px-1.75 -rotate-5 transition-all delay-500 ease-in text-white -top-4 bg-amber-800"><strong>{cc}</strong></div>
                    <div className="relative font-bold font-[cursive] border-3 border-solid border-black rounded-2xl shadow-[8px_8px_5px_black] py-8 px-2.5 -rotate-1 transition-all delay-300 ease-in z-10 bg-amber-50 opacity-80 hover:bg-blue-200 hover:rotate-0">
                        <h1  className="font-bold text-5xl font-[cursive]">{intro}<br></br><span className=" text-blue-500">{name}</span></h1>
                        <p className="text-2xl font-[cursive] text-grey">{about1} <span>{about2}</span> {about3}</p>
                        <div className="flex flex-row gap-6.25 mt-3">
                            <button type="button"
                                id="btn1"><a href="#projects" className="border-3 border-solid border-black rounded-2xl no-underline font-bold px-2.5 hover:bg-amber-300">{button1}</a></button>
                            <button type="button"
                                id="btn2"> <a href="#contacts" className="border-3 border-solid border-black rounded-2xl no-underline font-bold px-2.5 hover:bg-gray-500">{button2}</a></button>
                        </div>
                    </div>
                    <div className="absolute font-bold font-[cursive] border-2 border-solid border-black rounded-2xl shadow-[5px_5px_black] py-0.5 px-1.75 -rotate-5 transition-all delay-300 ease-in-out text-white -bottom-4 -right-6 bg-amber-800"><strong>{da}</strong></div>
                </div>
                <div className="w-1/2 relative">
                    <div className="absolute py-10 px-35 top-8 bg-amber-50 rounded-3xl border-3 border-solid border-black rotate-5 shadow-[8px_8px_5px_black] transition-all delay-300 ease-in-out hover:bg-blue-200 hover:rotate-0">
                        <div className="flex bg-linear-30 from-blue-500 to-violet-300 border-3 border-solid border-black rounded-[50%] items-center justify-center h-45 w-45 ">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width={"85px"} height={"85px"} marginTop:{"23px"} viewBox="0 -64 640 640">
                        <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" />
                    </svg> */}
                        </div>
                    </div>
                    <div className="absolute -bottom-3 right-0 z-10 border-3 border-solid border-black rounded-3xl shadow-[8px_8px_black] rotate-1 transition-all delay-300 ease-in-out bg-gray-500 opacity-80 py-1.5 px-10 text-center hover:bg-blue-200 hover:rotate-0">
                        <p className="text-[18px] font-bold font-[cursive]">{yr1}<sup>{yr2}</sup> {yr3}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;