import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0 bg-blue-100'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text-xl cursor-pointer flex items-center text-blue-900'>
          SparkNest
        </div>
        <div className='md:hidden' onClick={toggleMenu}>
          <button className='text-blue-900 focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li><Link to="/" className="hover:text-blue-700 block py-2 md:py-0">Home</Link></li>
          <li><Link to="/Standard" className="hover:text-blue-700 block py-2 md:py-0">Standard</Link></li>
          <li><Link to="/Labs" className="hover:text-blue-700 block py-2 md:py-0">Labs</Link></li>
          <li><Link to="/TestYourSkills" className="hover:text-blue-700 block py-2 md:py-0">Test Your Skills</Link></li>
          <li><Link to="/AnyDoubt" className="hover:text-blue-700 block py-2 md:py-0">Any Doubts</Link></li>
          <li>
          <Link to="/Login">
              <button className='bg-blue-900 text-white py-2 px-4 rounded-xl md:ml-8 hover:bg-blue-700 duration-500'>
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