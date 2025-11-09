import React from "react";

const MainData = ({ data }) => {
  return (
    <div className="py-12 bg-[#edeff0]">
      <h2 className="text-3xl font-bold text-[#112e29] text-center mb-8">
        Our Social Development Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {data.map((item) => (
          <div
            key={item._id}
            className="rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300 overflow-hidden p-5"
          >
            <div className="flex justify-items-start mb-5 gap-3">
              <div className="rounded-full h-3  w-3  bg-red-400"></div>
              <div className="rounded-full h-3  w-3  bg-orange-300"></div>
              <div className="rounded-full h-3  w-3  bg-green-500"></div>
            </div>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-65 object-cover rounded-2xl"
            />
            <div className="p-5">
              <h3 className="font-semibold text-xl mb-2 text-[#112e29]">
                {item.title}
              </h3>
              <p className="text-[#112e29] text-sm mb-4">
                {item.description?.slice(0, 100)}...
              </p>
              <div className="flex flex-col gap-1 text-sm text-[#112e29] mb-3">
                <span>
                  <span className="font-semibold text-[#112e29]">
                    Event Type:
                  </span>{" "}
                  {item.eventType}
                </span>
                <span>
                  <span className="font-semibold text-[#112e29]">
                    Location:
                  </span>{" "}
                  {item.location}
                </span>
                <span>
                  <span className="font-semibold text-[#112e29]">
                    Event Date:
                  </span>{" "}
                  {new Date(item.eventDate).toLocaleDateString()}
                </span>
                <span>
                  <span className="font-semibold text-[#112e29]">
                    Created By:
                  </span>{" "}
                  {item.createdBy?.name}
                </span>
                <span>
                  <span className="font-semibold text-[#112e29]">
                    Created At:
                  </span>{" "}
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainData;
