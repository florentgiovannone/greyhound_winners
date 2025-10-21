export default function Form() {
    return (
        <div className="bg-gradient-to-b from-gw-purple to-black py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Contact Information Section */}
                    <div className="lg:col-span-4">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8 capitalize">Get in Touch</h1>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gw-red p-3 rounded-full">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Phone</p>
                                        <p className="text-white/70">+44 1420 549988</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gw-red p-3 rounded-full">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">General Inquiries</p>
                                        <p className="text-white/70">info@greyhoundwinners.com</p>
                                    </div>
                                </div>

                                {/* Sales Email */}
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gw-red p-3 rounded-full">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Sales</p>
                                        <p className="text-white/70">sales@greyhoundwinners.com</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-gw-red p-3 rounded-full">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Address</p>
                                        <div className="text-white/70 text-sm leading-relaxed">
                                            <p>Technology House</p>
                                            <p>Station Road</p>
                                            <p>Alton, Hampshire</p>
                                            <p>GU34 2PZ</p>
                                            <p>United Kingdom</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:col-span-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">First Name *</label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            name="firstName"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gw-red focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">Last Name *</label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            name="lastName"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gw-red focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email Address *</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gw-red focus:border-transparent transition-all duration-300"
                                            placeholder="your.email@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">Phone Number</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gw-red focus:border-transparent transition-all duration-300"
                                            placeholder="+44 1234 567890"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">Company Name *</label>
                                        <input
                                            id="company"
                                            type="text"
                                            name="company"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gw-red focus:border-transparent transition-all duration-300"
                                            placeholder="Your company name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="inquiry" className="block text-sm font-semibold text-white mb-2">Inquiry Type *</label>
                                        <select
                                            id="inquiry"
                                            name="inquiry"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gw-red focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-gw-purple text-white">Select an option</option>
                                            <option value="general" className="bg-gw-purple text-white">General Inquiry</option>
                                            <option value="sales" className="bg-gw-purple text-white">Sales</option>
                                            <option value="product" className="bg-gw-purple text-white">Product Information</option>
                                            <option value="service" className="bg-gw-purple text-white">Service Inquiry</option>
                                            <option value="partnership" className="bg-gw-purple text-white">Partnership</option>
                                            <option value="pricing" className="bg-gw-purple text-white">Pricing</option>
                                            <option value="support" className="bg-gw-purple text-white">Technical Support</option>
                                            <option value="other" className="bg-gw-purple text-white">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gw-red focus:border-transparent transition-all duration-300 resize-vertical"
                                        placeholder="Tell us about your project, requirements, or how we can help you..."
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <p className="text-white/60 text-sm">* Required fields</p>
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-gw-red to-red-tint-60 hover:from-red-tint-60 hover:to-gw-red text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gw-red/50"
                                    >
                                        <span className="flex items-center space-x-2">
                                            <span>Send Message</span>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
