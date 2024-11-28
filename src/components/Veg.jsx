import React, { useState } from 'react'
import { vegProducts } from '../constants/vegCardData';
import { IoIosArrowUp } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { MdStarRate } from "react-icons/md";

const Veg = () => {

  const [isAddCartActice, setIsAddCartActive] = useState(false)
  const [cartCount, setCartCount] = useState(1)


  const handleADDCart = () => {
    setIsAddCartActive(true)
  }

  const increamentCartCount = () => {
    setCartCount(cartCount + 1)
  }

  const decreamentCartCount = () => {
    if (cartCount >= 2) {
      setCartCount(cartCount - 1)
    } else {
      setIsAddCartActive(false)
    }

  }


  return (
    <>
      <h1 className=' text-center text-xl font-bold'>Veg Food</h1>
      <div className="w-[1260px] flex flex-col items-center gap-5 mx-auto pt-[30px] pb-[50px]">
        {
          vegProducts.map((product) => {
            return (

              <div
                className="w-[90%] flex flex-col justify-between flex-shrink-0 shadow-md bg-gray-100 py-[40px] px-[50px]"
                key={product.id}
              >
                <div className='w-full flex justify-between pb-[25px]'>
                  <h1 className='text-xl font-bold text-gray-900'>Dosa (20)</h1>
                  <IoIosArrowUp className='mr-[15px] text-2xl text-gray-500' />
                </div>


                <div className='w-full flex  gap-2 justify-between flex-shrink-0 '>
                  <div className='w-[500px] flex flex-col gap-2 '>
                    <h1 className='text-xl font-bold text-gray-600'>{product.title}</h1>
                    <div className='flex gap-1 items-center'>
                      <MdStarRate className="text-lg text-green-600" />
                      <span className='text-green-600'>{product.rating} </span>
                      <span>({product.total_rating})</span>
                    </div>
                    <p className='text-gray-500'>{product.description}</p>
                  </div>

                  <div className='w-[160px] h-[160px] relative'>
                    <img
                      src={product.url}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-2xl shadow-xl"
                    />

                    {
                      isAddCartActice ? <div className=' flex justify-between gap-4 px-[9px] py-[4px] bg-white absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-xl font-bold text-green-600 rounded-md hover:bg-slate-100 ' >

                        <button onClick={decreamentCartCount} className='hover:bg-gray-200 p-[5px] rounded-full'><AiOutlineMinus /></button>
                        <p>{cartCount}</p>
                        <button onClick={increamentCartCount} className='hover:bg-gray-200 rounded-full p-[5px]  '><FiPlus /></button>
                      </div>

                        :

                        <button className='px-[40px] py-[5px] bg-white absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-xl font-bold text-green-600 rounded-md hover:bg-slate-100 ' onClick={handleADDCart}>Add</button>
                    }

                  </div>
                </div>

              </div>

            );
          })
        }
      </div>
    </>
  )
}

export default Veg
