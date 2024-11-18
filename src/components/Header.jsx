import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">E-Commerce</div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/category/all" className="hover:text-blue-600">Categories</a>
        <a href="/about" className="hover:text-blue-600">About Us</a>
        <a href="/contact" className="hover:text-blue-600">Contact</a>
      </nav>

      {/* Search Bar */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search products..."
          className="border rounded-lg px-2 py-1 w-40 md:w-60"
        />
        <button className="bg-blue-600 text-white px-4 py-1 rounded-lg">Search</button>
      </div>
    </header>
  );
};

export default Header;
