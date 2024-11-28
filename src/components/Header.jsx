import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCorporateFare } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { TbHelpOctagonFilled } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  return (
    <div2 className='w-full h-[90px] flex justify-center items-center mx-auto shadow-md text-gray-600 font-semibold '>
      <div className='w-[70%] flex justify-between'>

        <div className='flex justify-center items-center gap-10'>
          <img src="logo.png" alt="logo" className='w-[50px] rounded-2xl cursor-pointer ' />

          <div className=' flex justify-center items-center gap-3 group hover:cursor-pointer  hover:text-red-500 transition duration-150'><span className=' border-b-[3px] border-gray-600 group-hover:border-red-500 group-hover:text-red-500 '>Other</span> <IoIosArrowDown className='mb-[10px] text-red-500 font-semibold' /></div>
        </div>
        <ul className='flex justify-between items-center gap-16 cursor-pointer '>

          <li className='flex justify-center items-center gap-2  cursor-pointer hover:text-red-500 transition duration-150'><MdOutlineCorporateFare className='text-xl' /><span>Swiggy Corporate</span></li>

          <li className='flex justify-center items-center gap-2  cursor-pointer  hover:text-red-500 transition duration-150'><IoSearchSharp className='text-xl' />Search</li>

          <li className='flex justify-center items-center gap-2  cursor-pointer  hover:text-red-500 transition duration-150'><BiSolidOffer className='text-xl' />Offers<sup className='text-orange-500'>New</sup></li>

          <li className='flex justify-center items-center gap-2 cursor-pointer  hover:text-red-500 transition duration-150 '><TbHelpOctagonFilled className='text-xl' />Help</li>

          <li className='flex justify-center items-center gap-2 cursor-pointer  hover:text-red-500 transition duration-150 '><FaRegUser className='text-xl' />Sign In</li>

          <li className='flex justify-center items-center gap-2  cursor-pointer  hover:text-red-500 transition duration-150'><FaCartPlus className='text-xl' />Cart</li>
        </ul>
      </div>
    </div2>
  )
}

export default Header
