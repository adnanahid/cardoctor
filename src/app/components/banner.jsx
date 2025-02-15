"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Import banner images
import banner1 from "../../../public/assets/images/banner/1.jpg";
import banner2 from "../../../public/assets/images/banner/2.jpg";
import banner3 from "../../../public/assets/images/banner/3.jpg";
import banner4 from "../../../public/assets/images/banner/4.jpg";


// Array of banners with relevant text
const banners = [
  { image: banner1, text: "Premium Car Servicing - Fast & Reliable" },
  { image: banner2, text: "Expert Repairs & Maintenance Services" },
  { image: banner3, text: "Drive Smoothly with Our Engine Tune-ups" },
  { image: banner4, text: "Oil Change & Brake Check - Book Now!" },
];

export default function App() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper h-[600px]"
    >
      {banners.map((banner, index) => (
        <SwiperSlide
          key={index}
          style={{
            backgroundImage: `url(${banner.image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "top center", // Focus on top part
          }}
          className="relative flex items-center justify-center text-white text-2xl font-bold"
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-3xl font-extrabold text-white text-center px-4">
              {banner.text}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
