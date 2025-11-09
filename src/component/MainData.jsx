import React from "react";

const MainData = ({ data }) => {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Social Development Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {data.map((item) => (
          <div
            key={item._id}
            className="rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {item.description?.slice(0, 100)}...
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{item.eventType}</span>
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainData;
