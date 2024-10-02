'use client'
import React from "react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-primary text-white py-8 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection("hero")}>
          AURORAWAVE LABS
        </h1>
        <ul className="flex space-x-6">
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("about")}>
            About
          </li>
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("visionMission")}>
            Vision & Mission
          </li>
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("services")}>
            Services
          </li>
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("team")}>
            Team
          </li>
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("values")}>
            Values
          </li>
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("contact")}>
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
