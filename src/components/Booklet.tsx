import { useRef, useState, forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

// Generate page URLs from Cloudinary PDF (using page parameter)
const generatePageUrls = (totalPages: number) => {
    const baseUrl = "https://res.cloudinary.com/ded4jhx7i/image/upload";
    const pdfPath = "docs/GW-Booklet-v1.5_espbry";

    return Array.from({ length: totalPages }, (_, i) =>
        `${baseUrl}/pg_${i + 1},w_800,h_1100,c_fill,f_jpg,q_90/${pdfPath}.jpg`
    );
};

const pageUrls = generatePageUrls(14);

interface PageProps {
    number: number;
    image: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>(({ number, image }, ref) => {
    return (
        <div ref={ref} className="page bg-white shadow-lg">
            <div className="relative w-full h-full overflow-hidden">
                <img
                    src={image}
                    alt={`Page ${number}`}
                    className="w-full h-full object-cover"
                    loading="lazy"

                />
                {/* Page number */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs">
                    {number}
                </div>
                {/* Page edge effect */}
                {/* <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-gray-200 to-transparent pointer-events-none"></div> */}
            </div>
        </div>
    );
});

Page.displayName = 'Page';

export default function Booklet() {
    const bookRef = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 14;

    const nextPage = () => {
        bookRef.current?.pageFlip()?.flipNext();
    };

    const prevPage = () => {
        bookRef.current?.pageFlip()?.flipPrev();
    };

    const onFlip = (e: any) => {
        setCurrentPage(e.data);
    };

    return (
        <div className="w-full min-h-[calc(100vh-80px)] bg-gradient-to-b from-gw-purple to-black relative flex flex-col items-center py-6 px-4 overflow-hidden">
            {/* Return button */}
            <a
                href="/"
                className="absolute top-4 right-4 bg-white border-[5px] border-gw-red text-gw-red hover:bg-gw-red hover:text-white font-bold py-2 px-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gw-red/50 flex items-center space-x-2 z-20"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                </svg>
                <span>Return</span>
            </a>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                How To Play Guide
            </h1>

            {/* Book container with 3D perspective */}
            <div
                className="relative flex-1 flex items-center justify-center w-full"
                style={{ perspective: '2500px' }}
            >
                
                {/* Book shadow underneath */}
                <div
                    className="absolute w-[420px] h-[580px] md:w-[500px] md:h-[680px] bg-black/40 rounded-lg blur-xl"
                    style={{ transform: 'translateY(20px)' }}
                ></div>
                {/* The Flipbook */}
                <HTMLFlipBook
                    ref={bookRef}
                    width={400}
                    height={550}
                    size="stretch"
                    minWidth={280}
                    maxWidth={500}
                    minHeight={380}
                    maxHeight={680}
                    maxShadowOpacity={0.6}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={onFlip}
                    className="book-shadow"
                    style={{}}
                    startPage={0}
                    drawShadow={true}
                    flippingTime={1000}
                    usePortrait={true}
                    startZIndex={0}
                    autoSize={true}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={30}
                    showPageCorners={true}
                    disableFlipByClick={false}
                >
                    {pageUrls.map((url, index) => (
                        <Page key={index} number={index + 1} image={url} />
                    ))}
                </HTMLFlipBook>
            </div>
            {/* Navigation controls */}
            <div className="flex items-center gap-4 md:gap-6 mt-4">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className="bg-white border-[4px] border-gw-red text-gw-red hover:bg-gw-red hover:text-white disabled:opacity-40 disabled:cursor-not-allowed font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center space-x-1 md:space-x-2 text-sm md:text-base"
                >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                    </svg>
                    <span>Previous</span>
                </button>

                <span className="text-white font-bold text-sm md:text-lg min-w-[100px] text-center">
                    Page {currentPage + 1} / {totalPages}
                </span>

                <button
                    onClick={nextPage}
                    disabled={currentPage >= totalPages - 1}
                    className="bg-white border-[4px] border-gw-red text-gw-red hover:bg-gw-red hover:text-white disabled:opacity-40 disabled:cursor-not-allowed font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center space-x-1 md:space-x-2 text-sm md:text-base"
                >
                    <span>Next</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>

            {/* Hint text */}
            <p className="text-white/50 text-xs md:text-sm mt-3 text-center">
                Click page corners or drag to flip • Use buttons to navigate
            </p>

            {/* Custom styles for book effect */}
            <style>{`
                .book-shadow {
                    box-shadow: 
                        0 0 20px rgba(0,0,0,0.3),
                        0 20px 40px rgba(0,0,0,0.4),
                        inset 0 0 3px rgba(255,255,255,0.1);
                    border-radius: 0 8px 8px 0;
                }
                .page {
                    background: linear-gradient(to right, #f5f5f0 0%, #fff 10%, #fff 90%, #f0f0eb 100%);
                }
                .stf__wrapper {
                    box-shadow: 0 0 40px rgba(0,0,0,0.5);
                }
            `}</style>
        </div>
    );
}

