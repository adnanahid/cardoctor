import database, { collections } from "@/lib/database";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

export default async function OurServices() {
  const serviceCollection = database(collections.services);
  const services = await serviceCollection.find().toArray();

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
        {services.map((service) => (
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

            <div className="flex justify-between items-center">
              {/* Service Price */}
              <p className="text-[#FF3811] font-semibold mt-2">
                ${service.price}
              </p>
              <Link href={`/services/${service._id}`} className="">
                <FaArrowCircleRight className="text-2xl" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
