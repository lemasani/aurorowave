import React from "react";
import Image from 'next/image';

import VisionMission from "./VisionMIssion";

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col p-10 gap-2">

        <div className="about-container flex flex-col lg:flex-row p-4">
          <div className="about-context w-full">
            <h2 className="text-3xl font-light text-lightGray mb-4 italic">who are we?</h2>
            <p className="text-lightGray leading-relaxed text-balance">
              At AURORAWAVE LABS, we are driven by innovation, excellence, and integrity. Specializing in cutting-edge software
              solutions, we push the boundaries of technology to address evolving business and societal needs.
            </p>
          </div>

          <div className="about-image-context w-full mt-8 relative py-10">
            <Image src='/developer.jpg' alt="Developer coding" width={420} height={420} className="mx-auto absolute mt-10 -top-10 right-10" />
            <Image src='/circuit.svg' alt="circuit" width={320} height={420} className="mx-auto w-full " />
          </div>
        </div>

        <div className="vision-container p-4">
          <VisionMission />
        </div>

      </div>
    </section>
  );
}

export default About;
