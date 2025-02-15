"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Banner() {
  // State to keep track of the current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array containing the images to display
  const images = [
    "/assets/images/banner/1.jpg",
    "/assets/images/banner/2.jpg",
    "/assets/images/banner/3.jpg",
    "/assets/images/banner/4.jpg",
    "/assets/images/banner/5.jpg",
  ];

  // Function to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-[calc(100vh-64px)] relative">
      <Image
        src={images[currentImageIndex]} // Display the current image
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        alt="Banner Image"
      />
    </div>
  );
}
