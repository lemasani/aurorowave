import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">AURORAWAVE LABS</h2>
            <p className="text-sm">© 2024 Aurorawave Labs. All rights reserved.</p>
          </div>
          <div>
            <p>Email: <a href="mailto:hello@aurorawavelabs.com" className="underline">hello@aurorawavelabs.com</a></p>
            <p>Phone: <a href="tel:+255734712088" className="underline">+255 734 712 088</a></p>
            <p>Website: <a href="http://www.aurorawavelabs.com" target="_blank" rel="noopener noreferrer" className="underline">www.aurorawavelabs.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
