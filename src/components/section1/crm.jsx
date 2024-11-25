import React, {  } from 'react';
import { PiPushPinBold } from "react-icons/pi";
import Sidebar from './sidebar';
import Table from '../section2/table';

function Crm() {
 
  return ( 
    <>
      <div className="flex w-full bg-customBg">
   
        <div className=" ">
          <div className="items-center p-4 flex gap-12 justify-between">
            <h1 className="text-xl font-semibold text-[#42055F]">CRM</h1>
            <div className="flex bg-white ml-4 mr-4">
              <button className="w-3 h-6 pr-10 ml-2">
                <PiPushPinBold />
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-6 mr-2">
                  <path fillRule="evenodd" d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <Sidebar />
        </div>

       
        <div className='flex-1 p-4 rounded bg-white'>
          <Table />
        </div>
      </div>
    </>
  );
}

export default Crm;
