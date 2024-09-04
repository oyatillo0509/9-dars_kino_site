import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 container mx-auto text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#facebook" className="hover:text-gray-400">
          Facebook
        </a>
        <a href="#twitter" className="hover:text-gray-400">
          Twitter
        </a>
        <a href="#linkedin" className="hover:text-gray-400">
          LinkedIn
        </a>
      </div>
      <p>
        <span>&copy;</span> 2024 MyApp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
