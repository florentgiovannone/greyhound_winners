export default function Integrations() {
    return (
        <div className="justify-center items-center py-20 lg:px-40 bg-gradient-to-b from-gw-purple to-gw-red">
            <div className="mb-16">
                <h1 className="text-4xl lg:text-5xl text-white text-center font-bold mb-4">Integrations</h1>
            </div>
            <div className="hidden px-4 lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                    <div className="grid grid-cols-3">
                        <div className="bg-white/20 border-r border-white/30 h-auto w-full flex items-center justify-center text-white p-6 font-bold text-lg backdrop-blur-sm">
                            <p>Integration Type</p>
                        </div>
                        <div className="bg-gradient-to-r from-gw-red to-red-tint-60 border-r border-white/30 h-auto w-full flex items-center justify-center text-white p-6 font-bold text-lg shadow-lg">
                            <p>Native</p>
                        </div>
                        <div className="bg-gradient-to-r from-gw-purple to-black h-auto w-full flex items-center justify-center text-white p-6 font-bold text-lg shadow-lg">
                            <p>IFrame</p>
                        </div>
                        <div className="bg-white/15 border-r border-t border-white/30 h-auto w-full flex items-center justify-center text-white p-4 font-semibold">
                            <p>Advantages</p>
                        </div>
                        <div className="bg-white/5 border-r border-t border-white/30 h-auto w-full flex items-center justify-center text-white p-6 hover:bg-white/10 transition-colors duration-300">
                            <p className="leading-relaxed text-sm">Operator defines customer UI and UX placing the video stream and betting data coherently within their own platform.</p>
                        </div>
                        <div className="bg-white/5 border-t border-white/30 h-auto w-full flex items-center justify-center text-white p-6 hover:bg-white/10 transition-colors duration-300">
                            <p className="leading-relaxed text-sm">Potentially simpler and quicker option, requires less work from the operator development team</p>
                        </div>
                        <div className="bg-white/15 border-r border-t border-white/30 h-auto w-full flex items-center justify-center text-white p-4 font-semibold">
                            <p>Cautions</p>
                        </div>
                        <div className="bg-white/5 border-r border-t border-white/30 h-auto w-full flex items-center justify-center text-white p-6 hover:bg-white/10 transition-colors duration-300">
                            <p className="leading-relaxed text-sm">Requires the operator to either have their own bet management system and be able to develop the code, using the Greyhound Winners API or that their 3rd party platform provider will be able to commit development resources on the operator's behalf to completing the integration, and the operator thus has no direct control over the implementation timescale.</p>
                        </div>
                        <div className="bg-white/5 border-t border-white/30 h-auto w-full flex items-center justify-center text-white p-6 hover:bg-white/10 transition-colors duration-300">
                            <p className="leading-relaxed text-sm">Requires the operator to have their own bet management system and be able to develop the code, using the Greyhound Winners API. See below if the operator uses a 3rd party bet management platform.</p>
                        </div>
                        <div className="bg-white/15 border-r border-t border-white/30 h-auto w-full flex items-center justify-center text-white p-4 font-semibold">
                            <p>Disadvantages</p>
                        </div>
                        <div className="bg-white/5 border-r border-t border-white/30 h-auto w-full flex flex-col justify-between text-white p-6 hover:bg-white/10 transition-colors duration-300">
                            <p className="leading-relaxed text-sm text-center">None, provided that the development team that built the bet management platform has transferred the development skill-set to the current development team.</p>
                            <div className="flex justify-center mt-4">
                                <button className="bg-gradient-to-r from-gw-red to-red-tint-60 hover:from-red-tint-60 hover:to-gw-red text-white font-semibold py-2 px-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gw-red/50">
                                    <span className="flex items-center space-x-2">
                                        <span>Learn More - Native</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="bg-white/5 border-t border-white/30 h-auto w-full flex flex-col justify-between text-white p-6 hover:bg-white/10 transition-colors duration-300">
                            <p className="leading-relaxed text-sm text-center">The operator has limited design input into the UI and UX. The operator's development team needs to work with the Greyhound Winners development team to create messaging endpoints between the two systems to facilitate wallet and transaction functionality.</p>
                            <div className="flex justify-center mt-4">
                                <button className="bg-gradient-to-r from-gw-purple to-black hover:from-black hover:to-gw-purple text-white font-semibold py-2 px-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gw-purple/50">
                                    <span className="flex items-center space-x-2">
                                        <span>Learn More - IFrame</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-10"></div>
                <div className=" bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                    <div className="grid grid-cols-2">
                        <div className="bg-white/20 border-r border-white/30 h-auto w-full flex items-center justify-center text-white p-6 font-bold text-lg backdrop-blur-sm">
                            <p>Integration Type</p>
                        </div>
                        <div className="bg-gradient-to-r from-gw-red to-red-tint-60 border-r border-white/30 h-auto w-full flex items-center justify-center text-white p-6 font-bold text-lg shadow-lg">
                            <p>Standalone</p>
                        </div>
                        <div className="bg-white/5 border-t border-white/30 h-auto w-full flex flex-col justify-between text-white p-6 hover:bg-white/10 transition-colors duration-300 col-span-2">
                            <p className="leading-relaxed text-sm text-center">A standalone integration is the most straightforward method of going live with Greyhound
                                Winners. A Bet A will supply a standalone interface, whether this is an online website, mobile
                                or retail system for the operator to accept and pay out bets on Greyhound Winners. </p>
                            <div className="flex justify-center mt-4">
                                <button className="bg-gradient-to-r from-gw-purple to-black hover:from-black hover:to-gw-purple text-white font-semibold py-2 px-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gw-purple/50">
                                    <span className="flex items-center space-x-2">
                                        <span>Learn More - Standalone</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="block px-4 lg:hidden space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20">
                    <div className="bg-gradient-to-r from-gw-red to-red-tint-60 p-4 text-center">
                        <h3 className="text-white font-bold text-lg">Native Integration</h3>
                    </div>
                    <div className="grid grid-cols-1 divide-y divide-white/20">
                        <div className="p-4">
                            <h4 className="font-semibold mb-2 text-green-400">Advantages</h4>
                            <p className="text-white/90 text-sm leading-relaxed">Operator defines customer UI and UX placing the video stream and betting data coherently within their own platform.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold mb-2 text-grey-neutral">Cautions</h4>
                            <p className="text-white/90 text-sm leading-relaxed">Requires the operator to either have their own bet management system and be able to develop the code, using the Greyhound Winners API or that their 3rd party platform provider will be able to commit development resources on the operator's behalf to completing the integration, and the operator thus has no direct control over the implementation timescale.</p>
                        </div>
                        <div className="p-4 flex flex-col justify-between min-h-[200px]">
                            <div>
                                <h4 className="font-semibold mb-2 text-red-400 text-center">Disadvantages</h4>
                                <p className="text-white/90 text-sm leading-relaxed text-center">None, provided that the development team that built the bet management platform has transferred the development skill-set to the current development team.</p>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button className="bg-gradient-to-r from-gw-red to-red-tint-60 hover:from-red-tint-60 hover:to-gw-red text-white font-semibold py-2 px-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gw-red/50">
                                    <span className="flex items-center space-x-2">
                                        <span>Learn More - Native</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20">
                    <div className="bg-gradient-to-r from-gw-purple to-black p-4 text-center">
                        <h3 className="text-white font-bold text-lg">IFrame Integration</h3>
                    </div>
                    <div className="grid grid-cols-1 divide-y divide-white/20">
                        <div className="p-4">
                            <h4 className="font-semibold mb-2 text-green-400">Advantages</h4>
                            <p className="text-white/90 text-sm leading-relaxed">Potentially simpler and quicker option, requires less work from the operator development team.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold mb-2 text-grey-neutral">Cautions</h4>
                            <p className="text-white/90 text-sm leading-relaxed">Requires the operator to have their own bet management system and be able to develop the code, using the Greyhound Winners API. See below if the operator uses a 3rd party bet management platform.</p>
                        </div>
                        <div className="p-4 flex flex-col justify-between min-h-[200px]">
                            <div>
                                <h4 className="font-semibold mb-2 text-red-400 text-center">Disadvantages</h4>
                                <p className="text-white/90 text-sm leading-relaxed text-center">The operator has limited design input into the UI and UX. The operator's development team needs to work with the Greyhound Winners development team to create messaging endpoints between the two systems to facilitate wallet and transaction functionality.</p>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button className="bg-gradient-to-r from-gw-purple to-black hover:from-black hover:to-gw-purple text-white font-semibold py-2 px-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gw-purple/50">
                                    <span className="flex items-center space-x-2">
                                        <span>Learn More - IFrame</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                    <div className="grid grid-cols-2">
                        <div className="bg-white/20 border-r border-white/30 h-auto w-full flex items-center justify-center text-white p-6 font-bold text-lg backdrop-blur-sm">
                            <p>Integration Type</p>
                        </div>
                        <div className="bg-gradient-to-r from-gw-red to-red-tint-60 border-r border-white/30 h-auto w-full flex items-center justify-center text-white p-6 font-bold text-lg shadow-lg">
                            <p>Standalone</p>
                        </div>
                        <div className="bg-white/5 border-t border-white/30 h-auto w-full flex flex-col justify-between text-white p-6 hover:bg-white/10 transition-colors duration-300 col-span-2">
                            <p className="leading-relaxed text-sm text-center">A standalone integration is the most straightforward method of going live with Greyhound
                                Winners. A Bet A will supply a standalone interface, whether this is an online website, mobile
                                or retail system for the operator to accept and pay out bets on Greyhound Winners. </p>
                            <div className="flex justify-center mt-4">
                                <button className="bg-gradient-to-r from-gw-purple to-black hover:from-black hover:to-gw-purple text-white font-semibold py-2 px-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gw-purple/50">
                                    <span className="flex items-center space-x-2">
                                        <span>Learn More - Standalone</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}