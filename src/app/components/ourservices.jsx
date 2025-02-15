"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function OurServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/services.json"); // Fetch data from JSON file
        const data = await res.json(); // Parse JSON data
        setServices(data); // Set services state
      } catch (error) {
        console.log("Error fetching services:", error);
      }
    };
    fetchData(); // Call the fetch function
  }, []);

  return (
    <section className="mt-32 container mx-auto px-4">
      <div className="text-center space-y-4">
        <h3 className="text-lg font-semibold text-[#FF3811]">Services</h3>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p className="text-gray-600">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>

      {/* Render services in a grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => (
          <div
            key={service._id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            {/* Service Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover rounded-md"
            />

            {/* Service Title */}
            <h2 className="text-xl font-bold mt-4">{service.title}</h2>

            {/* Service Price */}
            <p className="text-[#FF3811] font-semibold mt-2">
              ${service.price}
            </p>

            {/* Service Description */}
            <p className="text-gray-600 mt-2">
              {service.description.split(" ").slice(0, 20).join(" ")}...
            </p>

            {/* Service Facilities */}
            <div className="mt-4 space-y-2">
              {service.facility.map((facility, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="text-[#FF3811]">✔</span>
                  <p className="text-gray-600">{facility.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
