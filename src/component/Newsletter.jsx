import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-b from-[#081613] via-[#062520] to-[#04342c] py-16 px-4 text-center text-white">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Stay Connected with Our Social Initiatives
        </h2>
        <p className="text-lg text-gray-300">
          Subscribe to our newsletter and never miss an update on community
          cleanups, tree plantations, and other impactful events.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="input input-bordered w-full sm:w-2/3 text-black rounded-full px-4 py-3 focus:outline-none"
          />
          <button className="btn rounded-xl text-lg outline-0 border-0 shadow-none cursor-pointer bg-white text-[#112e29] hover:bg-[#ffc108] transition-all ease-in-out">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
