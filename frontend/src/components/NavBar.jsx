/*import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger & close icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

   <nav className="fixed top-0 left-0 w-full z-50 bg-orange-50/40 backdrop-blur-md shadow-sm transition-all duration-300 py-1">


      <div className="container mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo *
        <a href="/" className="text-2xl font-bold text-orange-500">
          RecipeFinder
        </a>

        {/* Desktop Menu *
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link to ="/">Home</Link></li>
          <li><a href="#recipes" className="hover:text-green-600">Quick & Easy</a></li>
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
        </ul>

        {/* Buttons (desktop) *
        <div className="hidden md:flex space-x-3">
          <button className="bg-transparent border-2 border-orange-500 text-orange-500 py-1 px-3 rounded hover:bg-orange-500 hover:text-white transition">
            Login
          </button>
          <button className="bg-green-700 text-white py-1 px-3 rounded border-2 border-green-700 hover:bg-green-800 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button *
        <button
          className="md:hidden text-orange-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu *
{isOpen && (
  <div
    className={`md:hidden bg-orange-50 shadow-lg border-t border-gray-100 rounded-2xl transform transition-all duration-500 ease-in-out origin-top ${
      isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
    }`}
  >
    {/* Nav Links *
    <ul className="flex flex-col items-start space-y-4 py-4 px-6 font-medium animate-slide-down">
      <li><a href="#home" className="hover:text-green-600">Home</a></li>
      <li><a href="#recipes" className="hover:text-green-600">Quick & Easy</a></li>
      <li><a href="#about" className="hover:text-green-600">About</a></li>
      <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
    </ul>

    {/* Buttons *
    <div className="flex items-start space-x-3 px-6 pb-4">
      <button className="bg-transparent border-2 border-orange-500 text-orange-500 py-1 px-4 rounded hover:bg-orange-500 hover:text-white transition">
        Login
      </button>
      <button className="bg-green-700 text-white py-1 px-4 rounded border-2 border-green-700 hover:bg-green-800 transition">
        Sign Up
      </button>
    </div>
  </div>
)}

</nav>
  );
};

export default NavBar;*/
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const linkClass =
    "hover:text-yellow-400 transition-all duration-200";
  const activeClass =
    "text-yellow-400 font-semibold";

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : linkClass}>Home</NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : linkClass}>About</NavLink>

          {/* Dropdown Menu */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="hover:text-yellow-400">Services ▾</button>

            {dropdownOpen && (
              <div className="absolute bg-gray-800 shadow-lg mt-2 rounded p-3 w-40 space-y-2 z-50">

                <NavLink
                  to="/services/web"
                  className={({ isActive }) => isActive ? activeClass : linkClass}
                >
                  Web Development
                </NavLink>

                <NavLink
                  to="/services/uiux"
                  className={({ isActive }) => isActive ? activeClass : linkClass}
                >
                  UI/UX Design
                </NavLink>

              </div>
            )}
          </div>

          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : linkClass}>Contact</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-3">

          <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>

          <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink>

          {/* Dropdown inside Mobile */}
          <details className="text-white">
            <summary className="cursor-pointer">Services</summary>

            <div className="ml-4 mt-2 space-y-2">
              <NavLink
                to="/services/web"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                Web Development
              </NavLink>

              <NavLink
                to="/services/uiux"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                UI/UX Design
              </NavLink>
            </div>
          </details>

          <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
<button className="relative">Get started</button>
        </div>
      )}
    </nav>
  );
}

