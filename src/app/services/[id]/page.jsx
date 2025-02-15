import database, { collections } from "@/lib/database";
import { ObjectId } from "mongodb";
import React from "react";

export default async function Services({ params }) {
  // Connect to the database and get the services collection
  const serviceCollection = database(collections.services);
  const services = await serviceCollection.findOne({
    _id: new ObjectId(params.id),
  });

  return (
    <div className="pt-24">
      <div className="space-y-4">
        <div key={services._id} className="p-4 border-b">
          <h2 className="text-2xl font-semibold">{services.title}</h2>
          <p>{services.description}</p>
          <p>Price: ${services.price}</p>
        </div>
      </div>
    </div>
  );
}
