import Logo from "../Assets/Images/Greyhound-Winners-White.png"
import Greyhound from "../Assets/Videos/Greyhound.mp4"
import GreyhoundGif from "../Assets/Videos/GreyhoundGif.gif"
export default function Hero() {
    return (
        <div className="flex flex-row h-auto" >
            <div className="h-auto bg-gw-red w-2/4 flex flex-col justify-center items-center px-8">
                <img src={Logo} alt="Greyhound Winners" className="mb-6" />
                <h2 className="text-2xl text-white leading-relaxed text-center">Boost your betting game portfolio with a new revenue-driving game</h2>
            </div>
            <div className="h-auto bg-gw-red flex justify-center items-center w-2/4 p-8">
                <video className="w-full h-96 object-cover rounded-lg" autoPlay loop muted playsInline>
                    <source
                        src={Greyhound}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}