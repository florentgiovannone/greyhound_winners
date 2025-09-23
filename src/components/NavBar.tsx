import Logo from "../Assets/Images/Greyhound-Winners-White.png"

export default function NavBar() {
    return (
        <nav className="sticky top-0 z-50 px-4 py-2 backdrop-blur-[20px]">
            <div className="container mx-auto flex items-center justify-center h-24">
                <img src={Logo} alt="Greyhound Winners" className="h-12 object-contain m-4 rounded p-2" />
            </div>
        </nav>
    )
}