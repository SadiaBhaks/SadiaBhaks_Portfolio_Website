import React from "react";
import  { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar(){
     const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


return(
<>
<nav className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a2e]  shadow-md  fixed top-0 z-50 w-full ">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center h-30">
<div className="text-yellow-400 font-bold text-4xl"
  style={{ textShadow: "0 0 0 #FFD700, 0 0 10px #FFD700, 0 0 50px #FFA500" }}>Sadia Bhaks</div>

 <div className="hidden md:flex space-x-8  font-medium ">
            
            <a href="#About" className="text-yellow-400 hover:text-gray-400 transition-colors duration-300 transition-transform duration-300 transition-transform duration-300 hover:-translate-y-2  p-4 rounded">
              About Me!
            </a>
            <a href="#Skills" className="text-yellow-400 hover:text-gray-400 transition-colors duration-300 transition-transform duration-300 transition-transform duration-300 hover:-translate-y-2  p-4 rounded">
              Skills
            </a>
            <a href="#Projects" className="text-yellow-400 hover:text-gray-400 transition-colors duration-300 transition-transform duration-300 transition-transform duration-300 hover:-translate-y-2  p-4 rounded">
              Projects
            </a>
            <a href="#Contact" className="text-yellow-400 hover:text-gray-400 transition-colors duration-300 transition-transform duration-300 transition-transform duration-300 hover:-translate-y-2  p-4 rounded">
              Contact
            </a>
          </div>
           <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                // Hamburger Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Close Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
</div>

</div>
 {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black shadow-md">
            
            <a
              href="#About"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 hover:text-purple-600"
            >
              About Me!
            </a>
            <a
              href="#Skills"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 hover:text-purple-600"
            >
              Skills
            </a>
            <a
              href="#Projects"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 hover:text-purple-600"
            >
              projects
            </a>
            <a
              href="#Contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 hover:text-purple-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
</nav>

</>


);

}

