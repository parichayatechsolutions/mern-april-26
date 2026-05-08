import "./Form.css"

function Form() {
    const row12="SEND MESSAGE 🚀"
    const location="Find Me Here 📍"
    const mail="lathesh@gmail.com"
    const collab="For magical collaboration"
    const phn="1234567890"
    const chat="Let's Chat For Creativity"
    const city="Bangalore"
    const ebility="But My Ideas Are Global"
    const my_creativity="FOLLOW FOR CRATIVITY 🌈"

    const 
    return (
        <>
            <div className="grid grid-cols-2 h-fit pt-25 px-90 gap-x-12.5">
                <div className="rw12l">
                    <form className="flex flex-col gap-5">
                        <input type="text" placeholder="Your name" className="w-full font-[cursive] h-fit bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] transition-all delay-300 ease-in shadow-[4px_4px_0px_black]" />
                        <input type="email" placeholder="Your email" className="w-full font-[cursive] h-fit bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] transition-all delay-300 ease-in shadow-[4px_4px_0px_black]" />
                        <input type="text" placeholder="What is your big idea...." className="w-full font-[cursive] h-fit bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] transition-all delay-300 ease-in shadow-[4px_4px_0px_black]" />
                        <textarea placeholder="Tell Me About your vision..." rows="5" className="w-full font-[cursive] h-fit bg-white border-2 border-solid border-black rounded-2xl py-4.5 px-5 text-[16px] transition-all delay-300 ease-in shadow-[4px_4px_0px_black]"></textarea>
                        <button type="submit" className="text-2xl py-4 px-9 w-full h-18 border-3 border-solid borderr-black rounded-4xl"><strong>{row12}</strong></button>
                    </form>
                </div>
                <div className="grid grid-rows-2 gap-5 h-fit ">
                    <div className="bg-yellow-200 font-[cursive] border-2 border-solid border-black h-fit rounded-3xl shadow-[6px_6px_black] -rotate-1 transition-all delay-300 ease-in-out py-6 px-8 hover:rotate-0 ">
                        <h3 className="mb-1.5 font-bold pl-5">Find Me Here 📍</h3>
                        <div className="py-3 px-1.5">
                            <div className="flex items-center gap-4 -my-4 mx-2.5">
                                <img src="./mail.jpg" alt="mail" height="50px" width="50px" className="border-2 border-solid border-black rounded-[50%] " />
                                <p className="mb-5"><strong>{mail}</strong><br />{collab}</p>
                            </div>

                            <div className="flex items-center gap-4 -my-4 mx-2.5">
                                <img src="./call2.jpg" alt="call" height="50px" width="50px" className="border-2 border-solid border-black rounded-[50%] " />
                                <p className="mb-5"><strong>{phn}</strong><br />{chat}</p>
                            </div>
                            <div className="flex items-center gap-4 -my-4 mx-2.5">
                                <img src="./location.jpg" alt="location" height="50px" width="50px" className="border-2 border-solid border-black rounded-[50%] "/>
                                <p className="mb-5"><strong>{city}</strong><br />{ebility}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-400 font-[cursive] border-2 border-solid border-black h-fit rounded-3xl shadow-[6px_6px_black] rotate-1 transition-all delay-300 ease-in-out py-7 px-8 hover:rotate-0">
                        <h3 className="font-bold font-[cursive] mt-0">{my_creativity}</h3>
                        <div className="flex justify-start gap-10 mt-2">
                            <div>
                                <img src="./linkedin.svg" alt="linkedin" height="40px" width="40px"className="border-2 border-solid border-black rounded-[50%] "/>
                            </div>
                            <div>
                                <img src="./github.jpg" alt="github" height="40px" width="40px" className="border-2 border-solid border-black rounded-[50%] "/>
                            </div>
                            <div>
                                <img src="./basketball.jpg" alt="ball" height="40px" width="40px" className="border-2 border-solid border-black rounded-[50%] "/>
                            </div>
                            <div>
                                <img src="./twitter.jpg" alt="twitter" height="40px" width="40px" className="border-2 border-solid border-black rounded-[50%] " />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Form;