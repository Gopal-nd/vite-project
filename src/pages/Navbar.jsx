import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from '../components/mode-toggle'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <ModeToggle/>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/accordian" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accordian</Link>
                <Link to="/randomcolor" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">RandomColor</Link>
                <Link to="/slider" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Slider</Link>
                <Link to="/loader" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">LoadMore</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={isOpen ? "block md:hidden" : "hidden md:hidden"}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">Home</Link>
          <Link to="/accordian" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">Accordian</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
