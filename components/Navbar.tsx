'use client'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <nav className="bg-primary text-white py-8 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection("hero")}>
          AURORAWAVE LABS
        </h1>
        <div className="hidden md:flex space-x-6 list-none">
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("about")}>
            About
          </li>
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("services")}>
            Services
          </li>
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("team")}>
            Team
          </li>
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("contact")}>
            Contact
          </li>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 list-none">
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("about")}>
            About
          </li>
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("services")}>
            Services
          </li>
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("team")}>
            Team
          </li>
          <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection("contact")}>
            Contact
          </li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;