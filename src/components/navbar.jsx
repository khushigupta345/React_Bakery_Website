import { useState } from "react";

import logo from '../assets/y.jpeg'
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    //bg-gradient-to-r from-blue-600 to-blue-600
    <nav className="text-black bg-gradient-to-r from-[#1e0c05] via-blue-400 to-purple-800  p-4">
      <div className="flex justify-between items-center h-16">
 
<img src={logo} alt="Website Logo" className="h-12" />
        <ul className="hidden md:flex space-x-10 text-2xl">
          <li><a href="/home" className=" hover:text-white-400 hover:bg-blue-400 rounded-lg transition duration-300 hover:p-3 ">Home</a></li>
          <li><a href="/about" className="hover:text-white-400 hover:bg-blue-400 rounded transition duration-300 hover:p-3 ">About</a></li>
          <li><a href="/services" className="hover:text-white-400 hover:bg-blue-400 rounded transition duration-300 hover:p-3 ">Services</a></li>
          <li><a href="/contact" className="hover:text-white-400 hover:bg-blue-400 rounded transition duration-300 hover:p-3 ">Contact</a></li>
        </ul>

       
        <button
          className="md:hidden pr-4  text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

     
      {open && (
        <ul className="flex flex-col mt-4 md:hidden space-y-4 text-xl bg-blue-400 p-4 rounded">
          <li><a href="/home" className= " inline-block hover:text-blue-400">Home</a></li>
         <hr className="border-t-3" />
          <li><a href="/about" className=" inline-blockhover:text-blue-400">About</a></li>
           <hr className="border-t-3" />
          <li><a href="/services" className=" inline-block hover:text-blue-400">Services</a></li>
           <hr className="border-t-3" />
          <li><a href="/contact" className=" inline-block hover:text-blue-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}