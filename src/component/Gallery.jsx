import React from "react";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";

const Gallery = () => {
  const photos = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
  ];

  return (
    <div className="bg-[#052c25] py-10 overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-8">
        Event Gallery
      </h2>

      <div className="flex gap-6 animate-marquee">
        {photos.concat(photos).map((src, index) => (
          <div key={index} className="shrink-0">
            <img
              src={src}
              alt={`event-${index}`}
              className="w-72 h-48 object-cover rounded-xl shadow-lg border-2 border-[#ffc108]"
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            width: calc(200%);
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
