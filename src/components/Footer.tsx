import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 sm:opacity-[0.7] bottom-0 text-white py-7">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cenima. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
