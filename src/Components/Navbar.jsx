import React, { useState } from 'react';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h3 className="text-2xl font-bold font-cursive text-black dark:text-white shadow-custom">
            Dhee<span className='text-[#5eb1f5] text-shadow-custom'>Codes</span>&#9824;
          </h3>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#hero" className="text-gray-700 dark:text-gray-300 hover:border-b-2  hover:border-[#5eb1f5] pb-5">Home</a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:border-b-2 hover:border-[#5eb1f5] pb-5">About</a>
          </li>
          <li>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:border-b-2 hover:border-[#5eb1f5] pb-5">Skills</a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:border-b-2 hover:border-[#5eb1f5] pb-5">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:border-b-2 hover:border-[#5eb1f5] pb-5">Contact</a>
          </li>
        </ul>
      

        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-md font-semibold focus:outline-none ${
            isDarkMode
              ? 'bg-gray-300 text-gray-800'
              : 'bg-gray-900 text-gray-300'
          }`}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;




