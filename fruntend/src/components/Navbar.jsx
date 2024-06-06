import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container mx-auto px-6 py-3">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">
              <Link to="/" className="text-gray-800 lg:text-2xl hover:text-gray-700 dark:hover:text-gray-300">
                Parody's shop
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 7h16a1 1 0 010 2H4a1 1 0 110-2zm0 7h16a1 1 0 010 2H4a1 1 0 110-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex items-center`}>
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link to="/home" className="my-1 text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-500 md:mx-4 md:my-0">
                Home
              </Link>
              <Link to="/about" className="my-1 text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-500 md:mx-4 md:my-0">
                About
              </Link>
              <Link to="/contact" className="my-1 text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-500 md:mx-4 md:my-0">
                Contact
              </Link>
              
            </div>
            <div className="flex justify-center md:block">
              <Link className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" to="/cart">
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4L4 4H3m1 16a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
