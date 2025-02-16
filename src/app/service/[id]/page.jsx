import database, { collections } from "@/lib/database";
import { ObjectId } from "mongodb";
import React from "react";

export default async function Services({ params }) {
  // Connect to the database and get the services collection
  const id = await params.id;
  const serviceCollection = database(collections.services);
  const service = await serviceCollection.findOne({
    _id: new ObjectId(id),
  });

  return (
    <div className="pt-24 max-w-screen-lg mx-auto">
      <div className="space-y-4">
        <div className="p-4 border-b">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-96 object-cover rounded-md mb-8"
          />
          <h2 className="text-2xl font-semibold mb-6">{service.title}</h2>
          <p className="mb-6">{service.description}</p>
          {/* Render Facility List */}
          <div className="space-y-4 mb-5">
            <h2 className="text-2xl font-semibold">Facilities</h2>
            {service.facility.map((facility, idx) => (
              <div key={idx} className="p-4 border-b">
                <h3 className="font-semibold">{facility.name}</h3>
                <p>{facility.details}</p>
              </div>
            ))}
          </div>
          <p className="text-[#FF3811] text-xl font-semibold">
            Price: ${service.price}
          </p>
        </div>
      </div>
    </div>
  );
}
