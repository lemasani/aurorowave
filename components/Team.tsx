import React from "react";

const teamMembers = [
  { name: "Brian Sisti", role: "Sales & Marketing Manager" },
  { name: "Ernest Malima", role: "Product Manager" },
  { name: "Victor Kibugi", role: "Development & Engineering Manager" },
  { name: "Andrea Msilu", role: "Research & Development Manager" },
];

const Team = () => {
  return (
    <section className="py-20 bg-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-semibold text-secondary">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
