'use client'
import React from "react";
import { motion } from "framer-motion";

const BackgroundShapes = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-primary via-gray-800 to-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-gray-800 to-black opacity-80"></div>

      {/* Double Layer Hexagon Top-Left */}
     {/* Double Layer Hexagon Top-Left */}
<motion.svg
  width="300"
  height="300"
  className="absolute top-[-50px] left-[-50px] opacity-80"
  xmlns="http://www.w3.org/2000/svg"
  animate={{ rotate: 360 }}
  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
>
  <polygon points="150,50 250,100 250,200 150,250 50,200 50,100" fill="url(#grad1)" />
  <motion.polygon
    points="150,0 300,75 300,225 150,300 0,225 0,75"
    fill="none"
    stroke="url(#grad1)"
    strokeWidth="10"
    animate={{ rotate: -360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  />
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: "#F97316", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "#1F2937", stopOpacity: 1 }} />
    </linearGradient>
  </defs>
</motion.svg>

      {/* Abstract Wave Pattern */}
      <motion.svg
        width="1440"
        height="300"
        className="absolute top-[60%] left-0 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ translateY: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M0 150 Q360 250 720 150 T1440 150 L1440 300 L0 300 Z"
          fill="#F97316"
        />
      </motion.svg>

      {/* Hexagon Shape */}
      <svg
        width="120"
        height="120"
        className="absolute bottom-[10%] left-[20%] opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="60,0 120,30 120,90 60,120 0,90 0,30" fill="#F97316" />
      </svg>

      {/* Semi-circle Bottom Right */}
      <svg
        width="200"
        height="100"
        className="absolute bottom-[-50px] right-[-50px] opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,100 A100,100 0 0,1 200,100 L200,100 L0,100 Z" fill="#F97316" />
      </svg>

      {/* Small Dot Grid Pattern */}
      <svg
        className="absolute top-[40%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 opacity-40"
        width="500"
        height="400"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="smallGrid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#F97316" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#smallGrid)" />
      </svg>

      {/* Triangle Shape */}
      <svg
        width="200"
        height="200"
        className="absolute top-[90%] right-[30%] opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="100,0 0,200 200,200" fill="url(#grad1)" />
      </svg>
    </div>
  );
};

export default BackgroundShapes;