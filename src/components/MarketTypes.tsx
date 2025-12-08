
import One from "../Assets/Images/One.png"
import Two from "../Assets/Images/Two.png"
import Three from "../Assets/Images/Three.png"
import Four from "../Assets/Images/Four.png"
import Five from "../Assets/Images/Five.png"
import Six from "../Assets/Images/Six.png"

export default function MarketTypes() {
    const marketTypes = [
        {
            id: 1,
            name: "Super Match Game",
            description: (
                <>
                    Players pick a trap number (1–6) for each of the six races and try to build the longest winning sequence they can. Every consecutive correct call increases the payout, with even two in a row returning a win. Hit all six for the maximum return.
                    <br /><br />
                    <strong>Player Appeal:</strong> simple race-by-race choices, escalating excitement, and strong player engagement across the full sequence.
                </>
            )
        },
        {
            id: 2,
            name: "Catch-A-Match",
            description: (
                <>
                    Catch-A-Match challenges players to spot patterns in the winning trap numbers over the six-race run. From triples and quads to ladders, mixed formations and full sequences, players win when their chosen pattern appears.
                    <br /><br />
                    <strong>Player Appeal:</strong> highly visual, number-driven, and full of unique formations that keep players watching for emerging trends.
                </>
            )
        },
        {
            id: 3,
            name: "Trap Numbers Winning Most",
            description: (
                <>
                    Players predict what will deliver the most wins across the six races: High (5–6), Low (1–2), Odd/Even, or a specific Top Trap. If their selection ends the sequence with the highest number of wins, they win.
                    <br /><br />
                    <strong>Player Appeal:</strong> clear groupings, flexible betting options, and a race-long contest that keeps every result meaningful.
                </>
            )
        },
        {
            id: 4,
            name: "Winning Traps Total",
            description: (
                <>
                    Players predict the total sum of the winning trap numbers across all six races. They can choose a specific total, a range, or whether the final figure will be odd or even. If the final tally matches their prediction, they win.
                    <br /><br />
                    <strong>Player Appeal:</strong> straightforward totals betting, constant involvement, and strong appeal for number-focused players.
                </>
            )
        },
        {
            id: 5,
            name: "Play Your Dogs Right",
            description: (
                <>
                    Players predict whether each race will be won by a High (5–6), Middle (3–4), or Low (1–2) trap and try to build the longest unbroken sequence of correct calls. The longer the run, the bigger the potential payout.
                    <br /><br />
                    <strong>Player Appeal:</strong> fast decisions, pattern-spotting fun, and rolling momentum across each race.
                </>
            )
        },
        {
            id: 6,
            name: "Parlays & Multi Bets",
            description: (
                <>
                    Traditional Betting offers classic greyhound wagering, allowing players to place Singles or build accumulator-style Parlays and Multi Bets across the six races. Returns are calculated using the dividend for each winning selection.
                    <br /><br />
                    <strong>Player Appeal:</strong> familiar formats, full flexibility, and strong appeal for regular bettors looking for bigger combination wins.
                </>
            )
        }
    ];

    return (
        <div className="bg-white py-16 px-4 md:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-2xl font-bold text-gw-purple mb-12 lg:text-4xl text-center">
                    6 DIFFERENT <span className="text-gw-red">MARKET TYPES</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {marketTypes.map((market) => (
                        <div
                            key={market.id}
                            className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 hover:border-gw-purple/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={market.id === 1 ? One : market.id === 2 ? Two : market.id === 3 ? Three : market.id === 4 ? Four : market.id === 5 ? Five : Six}
                                    alt={`Market ${market.id}`}
                                    className="w-10 h-10 mr-3 flex-shrink-0"
                                />
                                <h2 className="text-xl font-bold text-gw-purple">
                                    {market.name}
                                </h2>
                            </div>
                            <p className="text-gw-purple/80 leading-relaxed text-sm">
                                {market.description}
                            </p>
                        </div>
                    ))}
                </div>
                <h1 className="text-2xl font-bold text-gw-purple mt-24 mb-12 lg:text-4xl text-center">
                    Watch our <span className="text-gw-red">'Explainer' video</span>
                </h1>
                <div className="flex justify-center">
                    <video src="https://old.abeta.co.uk/resources/GW_video.mp4" controls className="w-full max-w-2xl rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    )
}