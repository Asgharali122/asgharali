import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyPortfolio</h1>

        {/* Menu */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="/" className="hover:text-yellow-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-yellow-300 transition">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-yellow-300 transition">
              Services
            </a>
          </li>
          <li>
            <a href="/portfolio" className="hover:text-yellow-300 transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-yellow-300 transition">
              Contact Us
            </a>
          </li>
        </ul>

        <button className="p-4 bg-amber-400">get started</button>

      </div>
    </nav>
  );
};

export default Navbar;