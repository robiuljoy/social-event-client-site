import React from "react";

const Newsletter = () => {
  return (
    <div className="py-16 px-4 text-center text-white bg-linear-to-r from-[#05332b] via-[#112e29] to-[#05332b] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#ffc108]/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ffc108]/20 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-2xl mx-auto space-y-6">
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
