import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
        <nav className="flex justify-center space-x-4 mt-2">
          <a href="/terms" className="hover:text-blue-400">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
