import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="sticky top-0 z-50 shadow-lg">
      <nav className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            
            <span className="text-white text-2xl font-extrabold tracking-wide drop-shadow">MyApp</span>
          </div>
          <div className="flex gap-2">
            <Link href="/" className="transition-colors duration-200 text-gray-100 hover:bg-white/20 hover:text-white px-4 py-2 rounded-lg font-medium">Home</Link>
            <Link href="/about" className="transition-colors duration-200 text-gray-100 hover:bg-white/20 hover:text-white px-4 py-2 rounded-lg font-medium">About Us</Link>
            <Link href="/services" className="transition-colors duration-200 text-gray-100 hover:bg-white/20 hover:text-white px-4 py-2 rounded-lg font-medium">Services</Link>
            <Link href="/contact" className="transition-colors duration-200 text-gray-100 hover:bg-white/20 hover:text-white px-4 py-2 rounded-lg font-medium">Contact</Link>
            <Link href="/profile" className="flex items-center transition-colors duration-200 text-gray-100 hover:bg-white/20 hover:text-white px-2 py-1 rounded-full font-medium">
              {/* <img src="/user.png" alt="Profile" className="h-8 w-8 rounded-full border-2 border-white shadow-sm object-cover" /> */}
            </Link>
            <Link href="/login" className="transition-colors duration-200 text-gray-100 hover:bg-white/20 hover:text-white px-4 py-2 rounded-lg font-medium">Login</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
