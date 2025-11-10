import React from "react";

const MainData = ({ data }) => {
  return (
    <div className="py-12 bg-gradient-to-b from-[#081613] to-[#052c25]">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Our Social Development Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-16 md:w-11/12 md:mx-auto">
        {data.map((item) => (
          <div
            key={item._id}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
          >
            <div className="absolute top-4 left-4 bg-linear-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-md">
              {item.eventType}
            </div>

            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />

            <div className="bg-[#1E1A29] p-6 rounded-b-2xl relative z-0">
              <h3 className="text-2xl font-bold text-white mb-2 hover:text-purple-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="flex flex-col gap-2 text-gray-200 text-sm">
                <span>
                  <span className="font-semibold text-white">Location:</span>{" "}
                  {item.location}
                </span>
                <span>
                  <span className="font-semibold text-white">Event Date:</span>{" "}
                  {new Date(item.eventDate).toLocaleDateString()}
                </span>
                <span>
                  <span className="font-semibold text-white">Created By:</span>{" "}
                  {item.createdBy?.name || item.createdBy}
                </span>
              </div>

              <button className="mt-4 w-full py-2 rounded-lg bg-linear-to-r from-green-400 via-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform duration-300">
                View Event
              </button>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-[#081613] to-transparent"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainData;
