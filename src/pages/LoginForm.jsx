import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2E2A3A]">
      <div className="flex w-[850px] bg-[#1E1A29] rounded-2xl overflow-hidden shadow-lg">
        {/* Left Panel */}
        <div className="w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
            alt="Desert"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          <div className="absolute top-6 left-6">
            <h1 className="text-white text-2xl font-bold tracking-wide">AMU</h1>
          </div>

          <div className="absolute bottom-10 left-6 text-white">
            <h2 className="text-lg font-medium">Capturing Moments,</h2>
            <p className="text-sm opacity-90">Creating Memories</p>
          </div>

          <button className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-1.5 rounded-lg transition">
            Back to website →
          </button>
        </div>

        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Log in to your account
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Don’t have an account?{" "}
            <a href="#" className="text-purple-400 hover:underline">
              Sign up
            </a>
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="bg-[#2B2636] border border-[#3D3750] rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-[#2B2636] border border-[#3D3750] rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-200 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-purple-500" />
                Remember me
              </label>
              <a href="#" className="text-purple-400 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-md py-2 mt-2 transition"
            >
              Log in
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-600" />
              <span className="px-2 text-gray-400 text-sm">or</span>
              <hr className="flex-grow border-gray-600" />
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-[#2B2636] hover:bg-[#3D3750] text-white py-2 rounded-md transition"
            >
              <FcGoogle size={22} /> Log in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
