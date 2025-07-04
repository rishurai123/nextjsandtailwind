import React from 'react'

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <div className="relative z-10 w-full max-w-md p-8 bg-white/90 rounded-2xl shadow-2xl flex flex-col items-center">
                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-3xl font-extrabold text-indigo-700 mb-1 drop-shadow">Login</h1>
                    <p className="text-gray-500 text-center text-sm">Welcome back! Please enter your details to sign in.</p>
                </div>
                <form className="w-full flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Email" required />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                        <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Password" required />
                    </div>
                    <div className="flex justify-between items-center text-xs mt-1">
                        <a className="text-indigo-500 hover:underline cursor-pointer">Forgot password?</a>
                    </div>
                    <button type="submit" className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg shadow transition-colors">Login</button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <a href="/register" className="text-indigo-600 hover:underline font-semibold">Sign Up</a>
                </div>
            </div>
        </div>
    )
}

export default Login