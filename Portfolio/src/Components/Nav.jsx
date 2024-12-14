import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black from-slate-900 to-slate-700 text-white p-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white-400">Aswin Shaji</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">About</a>
            </li>
            <li>
              <a href="#works" className="hover:text-yellow-400 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 mt-4">
          <ul className="space-y-4">
            <li>
              <a href="#about" className="block text-white hover:text-yellow-400 transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" className="block text-white hover:text-yellow-400 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" className="block text-white hover:text-yellow-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;