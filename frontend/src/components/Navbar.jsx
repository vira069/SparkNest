import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-blue-100 z-50">
      <div className="flex items-center justify-between py-3 md:px-10 px-7">
        {/* Logo Section */}
        <div className="font-bold text-2xl text-blue-900 cursor-pointer">
          SparkNest
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-blue-900 focus:outline-none" onClick={toggleMenu}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex md:items-center md:space-x-6 absolute md:static w-full bg-blue-100 md:bg-transparent top-16 left-0 md:flex-row flex-col items-center md:w-auto transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
          <li><Link to="/" className="hover:text-blue-700 block py-2 md:py-0 transition">Home</Link></li>
          <li><Link to="/Standard" className="hover:text-blue-700 block py-2 md:py-0 transition">Standard</Link></li>
          <li><Link to="/Labs" className="hover:text-blue-700 block py-2 md:py-0 transition">Labs</Link></li>
          <li><Link to="/TestYourSkills" className="hover:text-blue-700 block py-2 md:py-0 transition">Test Your Skills</Link></li>
          <li><Link to="/AnyDoubt" className="hover:text-blue-700 block py-2 md:py-0 transition">Any Doubts</Link></li>
          <li>
            <Link to="/Login">
              <button className="bg-blue-900 text-white py-2 px-4 rounded-xl md:ml-8 hover:bg-blue-700 duration-300">
                Login/Register
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
