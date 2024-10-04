import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-600 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-3">
        <Link to="/" className="text-3xl font-bold ">
          My<span className="text-gray-400">Blog</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:bg-gray-400 hover:text-white py-2 px-4 rounded-full transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:bg-gray-400 hover:text-white py-2 px-4 rounded-full transition duration-300">
            About
          </Link>
          <Link to="/contact" className="hover:bg-gray-400 hover:text-white py-2 px-4 rounded-full transition duration-300">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-600">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <Link to="/" className="hover:bg-gray-400 hover:text-white py-2 px-4 rounded-full transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:bg-gray-400 hover:text-white py-2 px-4 rounded-full transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:bg-gray-400 hover:text-white py-2 px-4 rounded-full transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
