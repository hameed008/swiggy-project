
import React, { useRef, useState } from 'react';
import { productsCategory } from '../constants/data.js'
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const SlliderProducts = () => {
  const scrollContainerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    container.scrollBy({ left: -600, behavior: 'smooth' });
    updateButtonStates(container);
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    console.log(container)
    container.scrollBy({ left: 600, behavior: 'smooth' });
    updateButtonStates(container);
  };

  const updateButtonStates = (container) => {
    const { scrollLeft, scrollWidth, clientWidth } = container;


    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);

  };

  return (
    <>
      <div className='w-[1260px] flex flex-col mx-auto shadow-md pb-[80px] px-[1px]'>
        <div className='w-full  flex justify-between px-[20px] mt-[50px]'>
          <h1 className='text-2xl font-bold font-sans'>What's on your mind?</h1>
          <div className='flex justify-around'>
            <button
              onClick={scrollLeft}
              disabled={isAtStart}
              className={`mr-[15px] bg-gray-300 p-[10px] rounded-full  ${isAtStart ? 'opacity-50 cursor-not-allowed' : ''}`}><HiArrowSmLeft className='text-xl' /></button>
            <button
              onClick={scrollRight}
              disabled={isAtEnd}
              className={`bg-gray-300 p-[10px] rounded-full ${isAtEnd ? 'opacity-50 cursor-not-allowed' : ''
                }`}><HiArrowSmRight className='text-xl' /></button>
          </div>
        </div>

        <div className="relative w-full">

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll scrollbar-hide w-full"
            onScroll={() => updateButtonStates(scrollContainerRef.current)}
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE and Edge
            }}
          >
            {productsCategory.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[160px] m-2 bg-gray-300"
              >
                <img
                  src={product.url}
                  alt={product.id}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>



          {/* Custom CSS for Webkit Browsers */}
          <style>
            {`
          div::-webkit-scrollbar {
            display: none; /* Hides scrollbar for Chrome, Safari, Opera */
          }
        `}
          </style>
        </div>
      </div>
    </>
  );

};

export default SlliderProducts;
