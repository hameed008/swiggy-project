import React from 'react'
import { topRestaurant } from '../constants/restaurant.js'
import { MdStarRate } from "react-icons/md";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
const Restorant = () => {
  return (
    <>
      <div className='w-[1260px] flex flex-col mx-auto shadow-md pb-[80px] px-[50px] mb-[50px] '>
        <div className='w-full  flex justify-between px-[50px] mt-[50px]'>
          <h1 className='text-2xl font-bold font-sans '>What's on your mind?</h1>
          <div className='flex justify-around -mr-[70px]'>
            <button className='mr-[15px] bg-gray-200 p-[10px] rounded-full'><HiArrowSmLeft className='text-xl' /></button>
            <button className='bg-gray-300 p-[10px] rounded-full'><HiArrowSmRight className='text-xl' /></button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center pt-[30px] pb-[50px]">
          {
            topRestaurant.map((restaurant) => {
              return (
                <div
                  className="w-[250px] h-[170px] m-[10px] flex-shrink-0 group"
                  key={restaurant.id}
                >
                  <img
                    src={restaurant.url}
                    alt={restaurant.title}
                    className="w-full h-full object-cover rounded-md group-hover:w-[95%]  transition duration-300"
                  />
                  <h1 className='text-xl font-bold py-[2px]'>{restaurant.title}</h1>
                  <div className='flex items-center'>
                    <div className=' p-[5px] rounded-full mr-[2px] flex items-center justify-center'> <MdStarRate className='text-green-600 rounded-full text-[20px]' /></div>

                    <p>{restaurant.rating}</p> <span>{restaurant.to}</span></div>

                  <p className='text-gray-600'>{restaurant.description}</p>
                </div>

              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default Restorant
