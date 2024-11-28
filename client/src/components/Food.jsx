import React, { useState } from "react";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import MixFood from "./MixFood";
import { FaCircle } from "react-icons/fa6";
import { IoTriangle } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

const Food = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const [isVegFilterActive, setIsVegFilterActive] = useState(false)
  const [isNonVegFilterActive, setIsNonVegFilterActive] = useState(false)

  const handleVegFilter = () => {
    setIsNonVegFilterActive(false)
    setActiveMenu(activeMenu == null || "nonveg" && !isVegFilterActive ? "veg" : null)
    setIsVegFilterActive(!isVegFilterActive)

  }

  const handleNonVegFilter = () => {
    setIsVegFilterActive(false);
    setActiveMenu(activeMenu == null || "veg" && !isNonVegFilterActive ? "nonVeg" : null);
    setIsNonVegFilterActive(!isNonVegFilterActive);

  }

  return (
    <>
      <div className="w-[1260px] flex justify-center items-center mx-auto mb-[20px] relative">
        <input type="text" name="" id="" placeholder="Search For Dishes" className="w-[90%] h-[50px] text-gray-600 text-center rounded-lg bg-gray-200 outline-none focus:border-[1px] border-gray-300" />
        <IoSearchSharp className=" absolute top-[50%] right-[80px] -translate-y-[50%] text-xl text-gray-400" />
      </div>
      <div>
        <div className='w-[1134px] flex items-center gap-5 mx-auto '>

          {/* Veg Button */}
          <div className="max-w-500">
            <div className="min-w-[50px] flex justify-between gap-3 items-center border-[2px] border-gray-300 py-[6px] px-[10px] transition-all duration-200 rounded-3xl">
              <div className="w-[44px]">
                <div
                  className={`w-full h-[12px] bg-gray-200 relative rounded-2xl ${isVegFilterActive ? 'bg-green-600' : 'bg-gray-200'
                    } transition duration-150`}
                >
                  <div
                    onClick={handleVegFilter}
                    className={`w-[22px] h-[22px] flex justify-center items-center border-[2px] bg-white border-green-600 rounded-[6px] absolute top-[50%] -translate-y-[50%] ${isVegFilterActive ? 'translate-x-[100%]' : 'translate-x-0'
                      } transition duration-200`}
                  >
                    <FaCircle className="text-green-500 text-[14px]" />
                  </div>
                </div>
              </div>
              <span
                className={`text-gray-300 m-0 p-0 transition-opacity duration-200 ${isVegFilterActive ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                |
              </span>
              <select
                name=""
                id=""
                className={`m-0 p-0 w-0 transition-all duration-200 overflow-hidden ${isVegFilterActive ? 'w-[100px] opacity-100' : 'opacity-0'
                  }`}
              >
                <option value="">Pure Veg</option>
                <option value="">Veg & Egg</option>
              </select>
            </div>
          </div>


          {/* non veg button*/}
          <div className="max-w-500">
            <div className='min-w-[100px] flex justify-between items-center border-[2px] border-gray-300 py-[12px] px-[10px] transition duration-200 rounded-3xl'>
              <div className=' w-[44px]'>
                <div className={`w-full h-[12px] bg-gray-200 relative rounded-2xl ${isNonVegFilterActive ? 'bg-red-500' : 'bg-gray-200'} transition duration-150`}>
                  <div
                    onClick={handleNonVegFilter}
                    className={`w-[22px] h-[22px] flex justify-center items-center border-[2px] bg-white border-red-500 rounded-[6px] absolute top-[50%] -translate-y-[50%] ${isNonVegFilterActive ? 'translate-x-[100%]' : 'translate-x-0'} transition duration-200`}>
                    <IoTriangle className='text-red-500 text-[14px]' />

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Best Seller */}
          <div className=" flex justify-center items-center text-xl text-gray-600 border-[1px] border-gray-300 py-[5px] px-[15px] rounded-3xl">
            <p>Best Seller</p>
          </div>
        </div>

        {/* Conditional Rendering */}
        {activeMenu === "veg" && <Veg />}
        {activeMenu === "nonVeg" && <NonVeg />}
        {activeMenu === null && <MixFood />}
      </div>
    </>
  );
};

export default Food;









