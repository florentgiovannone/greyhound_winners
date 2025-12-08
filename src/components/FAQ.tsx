import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string | JSX.Element;
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs: FAQItem[] = [
        {
            question: "Who can use greyhound winners in their business?",
            answer: "We can supply Greyhound Winners to any regulated betting or gaming operation worldwide."
        },
        {
            question: "It is legal to play Greyhound winners and has Greyhound Winners been certified for fair play?",
            answer: "Yes, Greyhound Winners has been certified by Gaming Labs International as a fair game, and meets the regulatory requirements associated with multiple legal and regulatory jurisdictions."
        },
        {
            question: "How can I get Greyhound Winners working for my business?",
            answer: (
                <div>
                    <p className="mb-2"><strong>For retail there are four options:</strong></p>
                    <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
                        <li>a simple stand-alone system consisting of a tablet with printer and scanner;</li>
                        <li>an iFrame into your point of sale bet management system;</li>
                        <li>a native integration through an API into your bet management system;</li>
                        <li>a fully integrated A Bet A omni-channel bet management system.</li>
                    </ul>
                    <p className="mb-2"><strong>For online there are three options:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>an iFrame into your online bet management system;</li>
                        <li>a native integration through an API into your online bet management system;</li>
                        <li>a fully integrated A Bet A omni-channel bet management system.</li>
                    </ul>
                </div>
            )
        },
        {
            question: "Are there various language version of the game available?",
            answer: (
                <div>
                    <p className="mb-2">Yes, you can have all the Greyhound Winners marketing materials available in any language.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>The audio commentary stream can be supplied in all major languages.</li>
                        <li>The stream introductory and results presentations can be modified for different languages.</li>
                    </ul>
                </div>
            )
        },
        {
            question: "Can I modify the game overround or RTP to alter the dividend margins according to local needs and regulations?",
            answer: "Yes, dividends can be customised according to operator betting limits, local custom, and jurisdictional requirements."
        },
        {
            question: "Can I have my own video stream, dividend table, and branding?",
            answer: "Yes, this can be supplied according to requirements."
        },
        {
            question: "How is the game stream delivered, and what internet bandwidth do I require for it?",
            answer: (
                <div>
                    <p className="mb-2">The video stream is delivered via a standard secure internet connection using ultra-low latency streaming technology, ensuring sub-second latency playback on any device or browser.</p>
                    <p>Regarding internet bandwidth, the stream is delivered in Standard Definition (SD). We recommend a stable connection with a dedicated download speed of approximately 3 Mbps per channel to accommodate peak bitrate usage.</p>
                </div>
            )
        },
        {
            question: "How do I get support for any daily operational issues?",
            answer: "A Bet A has one of the most well-regarded and responsive support operations in the industry. You can make contact by telephone, email, or your own slack channel. Specific SLAs can be entered into according to customer requirements."
        },
        {
            question: "How do I pay for Greyhound Winners?",
            answer: "Our general commercial terms are confidential, but we are open to doing business with customers in a flexible and mutually beneficial way, minimising commercial risk for customer operations."
        }
    ];

    return (
        <div className="bg-gradient-to-b from-gw-purple to-black min-h-screen py-16 px-4 md:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
                    Greyhound Winners <span className="text-gw-red">FAQs</span>
                </h1>
                <div className="mt-12 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/15"
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-white font-semibold text-lg pr-4">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-white flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index
                                        ? 'max-h-[1000px] opacity-100'
                                        : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <div className="px-6 pb-4 text-white/90 leading-relaxed">
                                    {typeof faq.answer === 'string' ? (
                                        <p>{faq.answer}</p>
                                    ) : (
                                        faq.answer
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

