import React, { useState } from 'react';
import './css/Nav.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg font-bold text-white hover:text-gray-400 transition duration-300 ">Aswin Shaji</span>
        </div>
        <button className="hamburger" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`flex items-center space-x-5 ${open ? 'open' : ''}`}>
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