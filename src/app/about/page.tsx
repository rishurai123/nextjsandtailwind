import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We are passionate about creating innovative solutions that make a difference in people's lives.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide cutting-edge technology solutions that empower businesses and individuals 
                to achieve their goals. We believe in innovation, quality, and customer satisfaction 
                as the foundation of everything we do.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push boundaries to create solutions that are ahead of their time.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
                <p className="text-gray-600">
                  Every product we deliver meets the highest standards of excellence and reliability.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Passion</h3>
                <p className="text-gray-600">
                  We are passionate about what we do and it shows in every project we undertake.
                </p>
              </div>
            </div>

            {/* Team Section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Team</h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                Meet the talented individuals who make our vision a reality. Our team combines 
                expertise, creativity, and dedication to deliver exceptional results.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    JD
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
                  <p className="text-indigo-600 font-medium mb-3">CEO & Founder</p>
                  <p className="text-gray-600 text-sm">
                    Visionary leader with 10+ years of experience in technology and business development.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    JS
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
                  <p className="text-purple-600 font-medium mb-3">CTO</p>
                  <p className="text-gray-600 text-sm">
                    Technical expert specializing in scalable architecture and innovative solutions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    MJ
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Mike Johnson</h3>
                  <p className="text-pink-600 font-medium mb-3">Lead Developer</p>
                  <p className="text-gray-600 text-sm">
                    Full-stack developer passionate about creating user-friendly applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-lg opacity-90 mb-6">
                Let&apos;s discuss how we can help bring your ideas to life.
              </p>
              <a 
                href="/contact" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 