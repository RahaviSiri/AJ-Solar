import React from 'react';
import { assets } from '../assets/assets';

const Services = () => {
  return (
    <div className='flex flex-col items-center mt-8 mb-5 px-4 flex-wrap'>
       <div className="relative mb-7 w-full max-w-full">
        <img
          src={assets.OurServices}
          alt="Banner"
          className="w-full h-auto object-cover max-h-[300px] sm:max-h-[300px] md:max-h-[300px] lg:max-h-[450px]"
        />
      </div>
      <div className='flex flex-col items-center bg-gray-100 rounded-lg shadow-xl max-w-3xl  p-6'>
        <h1 className='text-center text-2xl sm:text-3xl lg:text-4xl mb-4 font-semibold'>We Offer Different Services</h1>
        <p className='text-center text-base sm:text-lg lg:text-lg mb-3 leading-relaxed'>
          Our solar panels have integrated front skirts and concealed mounting hardware, giving them a smooth, clean appearance that blends nicely with your roof.
        </p>
      </div>
    </div>
  );
}

export default Services;
