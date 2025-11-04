import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-orange-600/90 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          RecipeFinder
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-white font-medium py-1 px-3">
          <li><a href="#home" className="hover:text-green-600 ">Recipes</a></li>
          <li><a href="#recipes" className="hover:text-green-600">Quick & Easy</a></li>
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
          </ul>
          {/*buttons*/}
          <div className="flex space-x-3">
        {/*<button className="bg-transparent text-white py-1 px-3 rounded border-2">Login</button>
          <button className="bg-green-900 text-white py-1 px-3 rounded border-2">SignUp</button>*/}
   <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg  bg-linear-to-br from-teal-400 to-lime-100 text-white  focus:outline-none">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-orange-600 rounded-md ">
Log In
</span>
</button>

           </div>



   
    

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

     </div>
    </nav>
  );
};

export default NavBar;
