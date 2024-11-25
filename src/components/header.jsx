import React from 'react';

function Header() {
  return (
    <div className="flex items-center justify-between bg-gray-200 p-4 shadow-md">
      
      <div className="flex items-center space-x-3 gap-x-6">

        <button>
          <div className="grid grid-cols-2 gap-1 w-8 h-8">
            <div className="w-full h-full bg-[#42055F] rounded-md"></div>
            <div className="w-full h-full bg-[#42055F] rounded-md"></div>
            <div className="w-full h-full bg-[#42055F] rounded-md"></div>
            <div className="w-full h-full bg-[#42055F] rounded-md"></div>
          </div>
        </button>

        <div className="flex items-center mb-5 bg-[#FDFCFE]">
          <div className="flex items-center">
            <div className="h-full border-dotted border-purple-500"></div>
          </div>
          <div className="relative ml-4">
            <div className="absolute w-[17px] h-[17px] bg-purple-600 rounded-full"></div>
            <div className="absolute w-[17px] h-[17px] bg-gray-300 rounded-full left-2"></div>
          </div>
        </div>

        <span className="text-lg font-medium">Zinghub</span>
        <span className="text-sm font-medium text-gray-600 hidden sm:block">Good morning</span>

      </div>

      <div className="flex justify-end items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>

        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}

export default Header;