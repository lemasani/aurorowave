import React from "react";

const values = [
  "Innovation: Embrace creativity and forward-thinking.",
  "Excellence: Strive for high standards of quality.",
  "Integrity: Conduct business with honesty and ethical integrity.",
  "Collaboration: Foster a culture of teamwork.",
  "Adaptability: Embrace change and agility.",
];

const Values = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {values.map((value, index) => (
            <li key={index} className="mb-2">{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Values;
