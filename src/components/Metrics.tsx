export default function Metrics() {
    return (
        <div className="justify-center items-center py-20 lg:px-40 bg-gradient-to-b from-gw-red to-gw-purple">
            <div className="mb-16">
                <h1 className="text-4xl lg:text-5xl text-white text-center font-bold mb-4">Why choose Greyhound Winners?</h1>
            </div>
            <div className="flex flex-grow px-4 items-end gap-2 lg:gap-4 max-w-6xl mx-auto">
                <div className="flex flex-col bg-gradient-to-t from-gw-purple to-black rounded-t-3xl pt-8 px-4 lg:px-6 opacity-80 hover:opacity-100 min-w-32 h-52 w-1/3 lg:pb-20 lg:h-80 shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-white/20">
                    <h2 className="text-xl lg:text-2xl text-white font-semibold mb-3">2. Proven Results</h2>
                    <div className="lg:pt-5">
                        <p className="text-xs text-white/90 lg:text-base leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="flex flex-col bg-gradient-to-t from-gw-purple to-black rounded-t-3xl pt-8 px-4 lg:px-6 min-w-32 h-64 w-1/3 lg:pb-20 lg:h-96 shadow-2xl transform hover:scale-105 transition-all duration-300 border-t-4 border-white/30 relative z-10">
                    <h2 className="text-xl lg:text-2xl text-white font-semibold mb-3">1. Proven Results</h2>
                    <div className="lg:pt-5">
                        <p className="text-xs text-white/90 lg:text-base leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-grey-neutral text-gw-purple px-3 py-1 rounded-full text-xs font-bold">FEATURED</div>
                </div>
                <div className="flex flex-col bg-gradient-to-t from-gw-purple to-black rounded-t-3xl pt-8 px-4 lg:px-6 opacity-80 hover:opacity-100 min-w-32 h-52 w-1/3 lg:pb-20 lg:h-80 shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-white/20">
                    <h2 className="text-xl lg:text-2xl text-white font-semibold mb-3">3. Proven Results</h2>
                    <div className="lg:pt-5">
                        <p className="text-xs text-white/90 lg:text-base leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}