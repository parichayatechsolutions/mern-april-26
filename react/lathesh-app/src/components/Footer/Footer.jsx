import "./Footer.css"

function Footer() {
    const footer="Made with 💖 and a whole lot of creativity"
    const last_line="© 2026 Lathesh. Keep creating! 🎨"
    return (
        <>
            <footer>
                <div className="text-center pt-19 px-90">
                    <p className="font-[cursive] text-2xl text-gray-600">{footer}</p>
                    <p className="text-gray-800">{last_line}</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;