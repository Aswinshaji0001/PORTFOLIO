import React from 'react';

function Navbar() {
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg font-bold text-white hover:text-gray-400 transition duration-300 ">Aswin Shaji</span>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#" className="text-white hover:text-white hover:text-gray-400 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-white hover:text-gray-400 transition duration-300">
              Resume
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-white hover:text-gray-400 transition duration-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-white hover:text-gray-400 transition duration-300">
              About Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;