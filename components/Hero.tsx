import React from "react";
import { FaGoogle, FaApple, FaMicrosoft, FaFigma, FaUniversity } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero text-white py-20 text-center h-screen relative">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative">
        {/* Hexagon Shape */}
        <svg
          width="120"
          height="120"
          className="absolute opacity-20"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="60,0 120,30 120,90 60,120 0,90 0,30" fill="#F97316" />
        </svg>
        <h1 className="text-5xl font-bold mb-4 relative">AURORAWAVE LABS</h1>
        <p className="text-xl relative">Crafting extraordinary software solutions in Tanzania and beyond</p>
      </div>

      <div className="partners mt-[-20px]">
        <h2 className="text-xl font-light italic text-gray-200 mb-4">Our Partners</h2>
        <div className="container mx-auto flex justify-center items-center gap-5">
          <FaGoogle className="h-8 w-8" />
          <FaApple className="h-8 w-8" />
          <FaMicrosoft className="h-8 w-8" />
          <FaFigma className="h-8 w-8" />
          <FaUniversity className="h-8 w-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;