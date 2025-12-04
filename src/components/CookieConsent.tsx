import { useState, useEffect } from 'react';

declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
        dataLayer: unknown[];
    }
}

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);

        // Update Google Consent Mode to allow analytics
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);

        // Consent remains denied (default state)
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-gw-purple to-gw-red rounded-xl shadow-2xl border border-white/10 backdrop-blur-sm">
                <div className="p-5 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                        {/* Cookie Icon */}
                        <div className="hidden md:flex items-center justify-center w-12 h-12 bg-white/10 rounded-full flex-shrink-0">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.68-.05-1.01-.63.41-1.37.66-2.17.66-2.21 0-4-1.79-4-4 0-.8.24-1.54.66-2.17C16.68 2.02 16.34 2 16 2h-4zm-1.5 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                            </svg>
                        </div>

                        {/* Text Content */}
                        <div className="flex-1">
                            <h3 className="text-white font-semibold text-lg mb-1">
                                We value your privacy
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                                We use cookies to enhance your browsing experience and analyze our traffic.
                                By clicking "Accept", you consent to our use of cookies for analytics purposes.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                            <button
                                onClick={handleDecline}
                                className="px-5 py-2.5 text-sm font-medium text-white/90 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-5 py-2.5 text-sm font-medium text-gw-purple bg-white hover:bg-gray-100 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation styles */}
            <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default CookieConsent;
