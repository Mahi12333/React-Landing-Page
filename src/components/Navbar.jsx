import React from 'react'
import { navItems } from '../constants/index';
import { Menu,X } from 'lucide-react';
import { useState } from 'react';
import logo from '../../public/vite.svg';


function Navbar() {
    const [mobileDrawOpen, setMobileDrawOpen]=useState(false);
    const toogleNavbar=()=>{
        setMobileDrawOpen(!mobileDrawOpen);
    }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-400 w-full ">
    <div className="container px-4 py-4 mx-auto relative lg:text-sm ">
      <div className="flex justify-between items-center ">
          <div className="flex items-center">
              <img className='h-8 w-8 mr-2' src={logo} alt='' />
              <span className="text-xl tracking-tight">Virtual</span>
          </div>  
          <ul className="hidden lg:flex ml-14 space-x-12">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>  
        <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href='#' className='py-2 px-3 border rounded-md'>
               Sign In
            </a>
            <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
              Sign Up
            </a>
          </div>    
           <div className='lg:hidden md:flex flex-col justify-end'>
             <button onClick={toogleNavbar} className="bg-white">
               {mobileDrawOpen ? <X/> : <Menu/>}
             </button>
           </div>
      </div>
      {mobileDrawOpen && (
     
     <div
      className={`fixed z-50 w-[93%] mx-auto p-12  flex flex-col justify-center items-center lg:hidden bg-green-700 mt-4 
       ${
        mobileDrawOpen ? 'translate-x-0' : 'translate-x-full'
      } ${
        mobileDrawOpen ? 'bg-circle-expand' : ''
      }`}
    >
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  </nav>
  )
}

export default Navbar