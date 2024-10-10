import React from "react";

const visionMission = [
  {
    title: "Vision",
    content: "We envision AURORAWAVE LABS as the premier provider of transformative software solutions in Tanzania."
  },
  {
    title: "Mission",
    content: "At AURORAWAVE LABS, our mission is to pioneer the future of software solutions by integrating cutting-edge technologies."
  },
]


const VisionMission = () => {
  return (
    
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row p-10 gap-8">
          {visionMission.map((item, index) => (
            <div key={index} className="vision-mission-container flex-1 p-4">
              <h2 className="text-3xl font-light text-lightGray mb-4 italic">{item.title}</h2>
              <p className="text-lightGray leading-relaxed text-left">
                {item.content}
              </p>
            </div>
          ))}
        </div>` 
      </div>
  );
};

export default VisionMission;
