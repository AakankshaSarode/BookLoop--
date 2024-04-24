import React from "react";
import { AiOutlineMenu,AiOutlineSearch ,AiOutlineClose} from "react-icons/ai";
import { IoBookSharp, IoHelpCircle} from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { HiHome } from "react-icons/hi2";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
 import Img from "../../assets/logo1.png";
import { useState } from "react";
const Navbar = () => {
   const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1500px] mx-auto flex justify-between items-center ">
      {/*left side*/}
      <div className="flex items-center ">
        <div onClick={()=> setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <div className="w-[280px] ">
            <img src={Img} alt="" />
          </div>
       {/*<h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 ">
          BOOK<span className="font-bold">LOOP</span>
        </h1>
  */} 
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Exchange</p>
          <p className="p-2">Donation</p>
        </div>
      </div>
      {/*search Input*/}
       <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
       <AiOutlineSearch  size={25} />
        <input className="bg-transparent p-2 focus:outline-none w-full"  ctype="text" placeholder="search books" />
       </div>
       {/*card*/}

       <button className="bg-black text-white hidden md:flex items-center py-2">
       <IoBookSharp  size={20} className="mr-2" />Cart
       </button>
        <button className="bg-white/80 text-black hidden md:flex items-center py-2"><RiLoginCircleFill size={20} className="mr-2 " /> Log In</button>
       {/*mobile menu*/}
       {/*overlay*/}
       {nav ? 
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div > : ''}
        {/*side drawer menu*/}
         <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' :'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
         <AiOutlineClose
          onClick={()=>setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer " />
      <div className="w-[280px] ">
        <img src={Img} alt="" />
      </div>
       <nav>
        <ul className="flex flex-col p-4 text-gray-800 ">
          <li className="text-xl py-4 flex"><HiHome  size={25} className="mr-4"/>Home</li>
          <li className="text-xl py-4 flex"><MdLibraryBooks size={25} className="mr-4"/>About</li>
          <li className="text-xl py-4 flex"><RiLoginCircleFill  size={25} className="mr-4"/>Log In</li>
          <li className="text-xl py-4 flex"><IoHelpCircle  size={25} className="mr-4"/>Help</li>
          <li className="text-xl py-4 flex"><FaUserGroup  size={25} className="mr-4"/>Invite</li>
        </ul>
       </nav>
         </div>
    </div>
  );
};

export default Navbar;
