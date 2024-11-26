import React from 'react';

function Header() {
  return (
    <div className="flex items-center justify-between bg-gray-200 p-2 shadow-md">
    
      <div className="flex items-center space-x-3 gap-x-6">      
        
            <button className="p-2">
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
            <div className="absolute w-[17px] h-[17px] bg-gray-300 rounded-full left-2 mt-1"></div>
          </div>
        </div>

        <span className="text-lg font-medium">Zinghub</span>
       

        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
          <span className="text-sm font-medium text-gray-600 ml-2">
            Good morning
          </span>
        </div>
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
