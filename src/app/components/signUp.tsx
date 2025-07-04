import React from 'react'
import Link from 'next/link'

function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full max-w-md p-8 bg-white/90 rounded-2xl shadow-2xl flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-2 drop-shadow">Create Account</h1>
        <p className="text-gray-500 text-center text-sm mb-6">Sign up to get started! Please fill in the details below.</p>
        <form className="w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Email" required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Password" required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Confirm Password" required />
          </div>
          <button type="submit" className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg shadow transition-colors">Sign Up</button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-indigo-600 hover:underline font-semibold">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp