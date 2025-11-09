import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import heroImg1 from "../assets/HeroImg1.png";
import heroImg2 from "../assets/HeroImg2.jpg";
import heroImg3 from "../assets/HeroImg3.jpg";

const Banner = () => {
  const slides = [heroImg1, heroImg3, heroImg2];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      className="w-full"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Together We Make a Difference
                </h1>
                <p className="mb-5 md:text-xl">
                  "Be a part of our mission to make communities better! Register
                  now to join upcoming social work events."
                </p>
                <button className="px-15 py-4 rounded-xl text-lg font-semibold cursor-pointer bg-white text-[#112e29] hover:bg-[#ffc108] transition-all ease-in-out">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
