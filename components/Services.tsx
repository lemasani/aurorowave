import React from "react";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet the unique needs of your business.",
  },
  {
    title: "Web Development and Design",
    description: "Professional website development and design services to establish your online presence.",
  },
  {
    title: "Mobile App Development",
    description: "Innovative mobile app development for iOS and Android platforms.",
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-semibold text-secondary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
