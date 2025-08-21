import React from "react";
import ServiceCard from "./ServiceCard";
import services from "../data/servicesData";


export default function Services() {
  return (
    <section className="p-6 md:p-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 underline decoration-4 decoration-pink-600 underline-offset-8 border-pink-600">
        Our Services
      </h2>
     
      <div className=" grid  ml-8 md:ml-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8
">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}