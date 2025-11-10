import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger & close icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-50 text-orange-500 fixed top-0 left-0 w-full z-50 p-3">
      <div className="container mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-orange-500">
          RecipeFinder
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#home" className="hover:text-green-600">Home</a></li>
          <li><a href="#recipes" className="hover:text-green-600">Quick & Easy</a></li>
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
        </ul>

        {/* Buttons (desktop) */}
        <div className="hidden md:flex space-x-3">
          <button className="bg-transparent border-2 border-orange-500 text-orange-500 py-1 px-3 rounded hover:bg-orange-500 hover:text-white transition">
            Login
          </button>
          <button className="bg-green-700 text-white py-1 px-3 rounded border-2 border-green-700 hover:bg-green-800 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-orange-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col space-y-4 py-4 px-6 font-medium">
            <li><a href="#home" className="hover:text-green-600">Home</a></li>
            <li><a href="#recipes" className="hover:text-green-600">Quick & Easy</a></li>
            <li><a href="#about" className="hover:text-green-600">About</a></li>
            <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
          </ul>
          <div className="flex flex-col space-y-3 px-6 pb-4">
            <button className="bg-transparent border-2 border-orange-500 text-orange-500 py-1 px-3 rounded hover:bg-orange-500 hover:text-white transition">
              Login
            </button>
            <button className="bg-green-700 text-white py-1 px-3 rounded border-2 border-green-700 hover:bg-green-800 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
