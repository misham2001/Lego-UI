import React, {  } from 'react';
import { PiPushPinBold } from "react-icons/pi";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
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
            <NavigationMenu.Root className="relative flex h-screen bg-customBg w-full max-w-[20rem] flex-col p-4 text-gray-700">
                <div>
                  <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#6B778C]">
                    MODULE
                  </h5>
                </div>

                <NavigationMenu.List className="pt-5 text-customPurple">
              
                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger
                      className="flex w-full items-center p-2 text-start leading-tight rounded-md outline-none transition-all hover:bg-purple-100 focus:bg-purple-200"
                    >
                      <div className="grid mr-4 place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      Contacts
                    </NavigationMenu.Trigger>
                  </NavigationMenu.Item>

                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="flex w-full items-center p-2 text-start leading-tight rounded-md outline-none transition-all hover:bg-purple-100 focus:bg-purple-200">
                      <div className="grid mr-4 place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      Leads
                    </NavigationMenu.Trigger>
                  </NavigationMenu.Item>

                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="flex w-full items-center p-2 text-start leading-tight rounded-md outline-none transition-all hover:bg-purple-100 focus:bg-purple-200">
                      <div className="grid mr-4 place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      Deals
                    </NavigationMenu.Trigger>
                  </NavigationMenu.Item>

                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="flex w-full items-center p-2 text-start leading-tight rounded-md outline-none transition-all hover:bg-purple-100 focus:bg-purple-200">
                      <div className="grid mr-4 place-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.902 48.902 0 0 1-3.476-.383C4.371 12.439 3 10.707 3 8.76V2.74a3.615 3.615 0 0 1 1.848-.97zM12 14.25c.28 0 .55.175.663.45l1.592 3.11c-.178.036-.36.072-.541.106l-.73-2.104a.75.75 0 0 0-.446-.557z" clip-rule="evenodd" />
                      </svg>
                      </div>
                      Sales Inbox
                    </NavigationMenu.Trigger>
                  </NavigationMenu.Item>

                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="flex w-full items-center p-2 text-start leading-tight rounded-md outline-none transition-all hover:bg-purple-100 focus:bg-purple-200">
                      <div className="grid mr-4 place-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fill-rule="evenodd" d="M3.25 2.25a.75.75 0 0 0 0 1.5H6v16.5H3.25a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H18V3.75h2.75a.75.75 0 0 0 0-1.5H6.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z" clip-rule="evenodd" />
                      </svg>
                      </div>
                      Activities
                    </NavigationMenu.Trigger>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
           </div>

       
        <div className='flex-1 p-4 rounded bg-white'>
          <Table />
        </div>
      </div>
    </>
  );
}

export default Crm;
