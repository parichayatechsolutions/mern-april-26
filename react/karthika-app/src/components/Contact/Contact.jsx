import "./Contact.css"

function Contact() {
    const heading = ["Let's Connect", "I'm currently looking for internship opportunities for Summer 2024. Feel free to", "reach out if you have any questions or would like to connect!"]
    const head = "Get In Touch"
    const details = [
        {
            title: "E-mail",
            desc: "karthikakrishnan2004@gmail.com",
        },
        {
            title: "Phone",
            desc: "7349149104",
        },
        {
            title: "Location",
            desc: "Banglore, India"
        }
    ]
    const follow = "Follow Me"
    const form = ["Your Name", "Your E-mail", "Subject", "Your Message", "Send Message"]

    return (
        <>
            <section id="Contact">
                <div className="flex flex-col px-4 pt-[32px] pb-[100px]">
                    <div className="flex flex-col text-center">
                        <h1 className="text-[36px]">{`${heading[0]}`}</h1>
                        <p className="text-xl text-gray-400 pb-2">{`${heading[1]}`}<br />{`${heading[2]}`}</p>
                        <div className="rounded-xs w-[96px] h-1 place-self-center bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    </div>
                    <div className="flex flex-row w-full pt-[35px] gap-[48px]">
                        <div className="flex flex-col w-[50%]">
                            <div className="flex flex-col rounded-2xl h-[400px] bg-black text-white ml-[30px] gap-y-4 p-6 ">
                                <div className="flex flex-col gap-[15px]">
                                    <h1 className="text-[32px]">{head}</h1>
                                    {
                                        details.map((info, index) => {
                                            return (<div key={index}>
                                                <p>{info.title}</p>
                                                <h4>{info.desc}</h4>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="conn2">
                                    <h1 className="text-[32px]">{follow}</h1>
                                    <div className="flex items-center gap-1">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className="bg-white px-4 rounded-[10px]">
                                <div className="flex w-full justify-center items-center gap-[95px] pb-[20px] ">
                                    <div className="flex flex-col w-[50%] gap-2">
                                        <label>{`${form[0]}`}</label>
                                        <input type="text" className="p-3 border-3 rounded-lg  border-gray-400 focus:border-purple-700 focus:outline-0" placeholder="Enter your Name" />
                                    </div>
                                    <div className="flex flex-col w-[50%] gap-2">
                                        <label className="mb-1 font-medium">{`${form[1]}`}</label>
                                        <input type="text" className="p-3 border-3 rounded-lg  border-gray-400 focus:border-purple-700 focus:outline-0 " placeholder="Enter your E-mail" />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full gap-2 pb-[20px]">
                                    <label className="mb-1 font-medium">{`${form[2]}`}</label>
                                    <input type="text" className="p-3 border-3 rounded-lg border-gray-400 focus:border-purple-700 focus:outline-0" placeholder="Enter your Subject" />
                                </div>
                                <div className="flex flex-col w-full gap-2 pb-[20px]">
                                    <label className="mb-1 font-medium">{`${form[3]}`}</label>
                                    <input type="text" className="h-[100px] p-3 w-full border-3 rounded-lg  border-gray-400  focus:border-purple-700 focus:outline-0 " placeholder="Enter your Message" />
                                </div>
                                <button type="Submit" className="w-full p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[12px] cursor-pointer">{`${form[4]}`}<span></span></button>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}

export default Contact