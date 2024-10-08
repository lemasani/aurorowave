'use client';
import React from "react";
import { FaMicrosoft, FaFigma, FaUniversity } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const Hero = () => {

  const hexagonVariants: Variants = {
    animate: (custom) => ({
      x: [0, Math.random() * custom.xRange - custom.xOffset, 0],
      y: [0, Math.random() * custom.yRange - custom.yOffset, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    }),
  };
  return (
    <section className="hero text-white py-20 text-center h-screen relative">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative">
      <div className="absolute top-0 right-0 h-full w-1/2">
          {/* Insert the SVG pattern as background */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <polygon id="hex" points="50,0 100,25 100,75 50,100 0,75 0,25" fill="#C25E00" />
            </defs>

            <motion.use href="#hex" x="50" y="50" fill="#FF9900" opacity="0.8" transform="scale(1.2) rotate(10 50 50)" variants={hexagonVariants} animate="animate" custom={{ xRange: 30, xOffset: 15, yRange: 20, yOffset: 10 }} />
            <motion.use href="#hex" x="150" y="100" fill="#C25E00" opacity="0.6" transform="scale(0.8) rotate(-20 50 50)" variants={hexagonVariants} animate="animate" custom={{ xRange: 40, xOffset: 20, yRange: 30, yOffset: 15 }} />
            <motion.use href="#hex" x="200" y="200" fill="#D26900" opacity="0.7" transform="scale(1.5) rotate(30 50 50)" variants={hexagonVariants} animate="animate" custom={{ xRange: 50, xOffset: 25, yRange: 40, yOffset: 20 }} />
            <motion.use href="#hex" x="80" y="220" fill="#FF6600" opacity="0.5" transform="scale(0.9) rotate(-15 50 50)" variants={hexagonVariants} animate="animate" custom={{ xRange: 35, xOffset: 17, yRange: 25, yOffset: 12 }} />
            <motion.use href="#hex" x="250" y="300" fill="#FF6600" opacity="0.7" transform="scale(1.1) rotate(5 50 50)" variants={hexagonVariants} animate="animate" custom={{ xRange: 45, xOffset: 22, yRange: 35, yOffset: 17 }} />
            <motion.use href="#hex" x="100" y="300" fill="#C25E00" opacity="0.9" transform="scale(1.3) rotate(25 50 50)" variants={hexagonVariants} animate="animate" custom={{ xRange: 55, xOffset: 27, yRange: 45, yOffset: 22 }} />
            <motion.use href="#hex" x="300" y="50" fill="#FF9900" opacity="0.8" transform="scale(1.2) rotate(10 50 50)" variants={hexagonVariants} animate="animate" custom={{ xRange: 30, xOffset: 15, yRange: 20, yOffset: 10 }} />
            <motion.use href="#hex" x="400" y="150" fill="#C25E00" opacity="0.6" transform="scale(0.8) rotate(-20 50 50)" variants={hexagonVariants} animate="animate" custom={{ xRange: 40, xOffset: 20, yRange: 30, yOffset: 15 }} />
            <motion.use href="#hex" x="500" y="250" fill="#D26900" opacity="0.7" transform="scale(1.5) rotate(30 50 50)" variants={hexagonVariants} animate="animate" custom={{ xRange: 50, xOffset: 25, yRange: 40, yOffset: 20 }} />
            <motion.use href="#hex" x="600" y="350" fill="#FF6600" opacity="0.5" transform="scale(0.9) rotate(-15 50 50)" variants={hexagonVariants} animate="animate" custom={{ xRange: 35, xOffset: 17, yRange: 25, yOffset: 12 }} />
            <motion.use href="#hex" x="700" y="450" fill="#FF6600" opacity="0.7" transform="scale(1.1) rotate(5 50 50)" variants={hexagonVariants} animate="animate" custom={{ xRange: 45, xOffset: 22, yRange: 35, yOffset: 17 }} />
            <motion.use href="#hex" x="800" y="550" fill="#C25E00" opacity="0.9" transform="scale(1.3) rotate(25 50 50)" variants={hexagonVariants} animate="animate" custom={{ xRange: 55, xOffset: 27, yRange: 45, yOffset: 22 }} />
          </svg>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 relative">Pioneering Innovative Software Solutions</h1>
        <p className="text-xl relative text-balance md:text-xl">Transforming the digital landscape with cutting-edge technology tailored to meet the unique needs of businesses and communities across Tanzania and beyond.</p>
      </div>

      {/* Decorative Shape */}
      <div className="absolute bottom-20 left-10 -z-10">
        <div className="w-40 h-40 bg-gradient-to-r from-orange-400 to-orange-600 transform rotate-45 rounded-lg shadow-xl"></div>
      </div>

      {/* Partners Section */}
      <div className="partners mt-8">
        <h2 className="font-light italic mb-5">Our Partners</h2>
        <div className="container mx-auto flex justify-center items-center gap-5">
          <FaMicrosoft className="h-8 w-8" />
          <FaFigma className="h-8 w-8" />
          <FaUniversity className="h-8 w-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;