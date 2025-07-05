import React from 'react'
import Link from 'next/link'

function Hero() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Welcome to{' '}
                        <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                            MyApp
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Transform your ideas into reality with our cutting-edge web and mobile solutions. 
                        We create innovative digital experiences that drive results.
                    </p>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                        {[
                            {
                                title: "Fast & Reliable",
                                desc: "Lightning-fast performance with 99.9% uptime guarantee",
                                gradient: "from-indigo-400 to-purple-500",
                                iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
                            },
                            {
                                title: "Secure & Safe",
                                desc: "Enterprise-grade security to protect your data",
                                gradient: "from-purple-400 to-pink-500",
                                iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                            },
                            {
                                title: "User Friendly",
                                desc: "Intuitive design that delights your users",
                                gradient: "from-pink-400 to-indigo-500",
                                iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                                    </svg>
                                </div>
                                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                                <p className="text-white/80 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link 
                            href="/services" 
                            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Explore Services
                        </Link>
                        <Link 
                            href="/contact" 
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70">
                        {["500+ Happy Clients", "24/7 Support", "99.9% Uptime"].map((text, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    )
}

export default Hero
