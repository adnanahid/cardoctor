import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="my-16 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-0">
      {/* Image Section */}
      <div className="relative w-full h-full ">
        {/* Main Person Image */}
        <div className="absolute top-0 left-5 w-[460px] h-[473px]">
          <Image
            src={"/assets/images/about_us/person.jpg"}
            layout="responsive"
            width={460}
            height={473}
            alt="person"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Car Parts Image */}
        <div className="absolute top-40 right-5 w-[327px] h-[323px] z-10">
          <Image
            src={"/assets/images/about_us/parts.jpg"}
            layout="responsive"
            width={300}
            height={323}
            alt="parts"
            className="rounded-lg shadow-xl border-4 border-white"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        <h2 className="text-lg text-red-500 font-semibold">About Us</h2>
        <h1 className="text-3xl font-bold leading-tight">
          We Are Qualified & Experienced in This Field
        </h1>
        <p className="text-gray-600">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humor,
          or random words that don't look even slightly believable.
        </p>
        <p className="text-gray-600">
          The majority have suffered alteration in some form, making them appear
          less natural or understandable.
        </p>
        <button className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition">
          Get More Info
        </button>
      </div>
    </div>
  );
}
