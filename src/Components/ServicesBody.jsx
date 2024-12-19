import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const ServicesBody = () => {
  return (
    <div className='flex justify-center items-center p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-screen-lg'>
        <div className='relative text-white px-4 py-6 rounded-lg shadow-lg group'>
          <div className='absolute inset-0 bg-cover bg-center rounded-lg transition-opacity duration-300' style={{ backgroundImage: `url(${assets.back_5})` }}>
            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg'></div>
          </div>
          <div className='relative z-10'>
            <h1 className='mt-3 text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300'>
              Free Solar Consultations
            </h1>
            <div className='pt-2'>
              <p className='font-bold transition-colors duration-300 text-sm sm:text-base'>
                Get expert advice on solar solutions and how they can benefit you.
              </p>
            </div>
            <Link to="/consultation">
              <div className='bg-red-500 text-white my-2 py-1 px-3 rounded-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                Read More
              </div>
            </Link>
          </div>
        </div>

        <div className='relative text-white px-4 py-6 rounded-lg shadow-lg group'>
          <div className='absolute inset-0 bg-cover bg-center rounded-lg transition-opacity duration-300' style={{ backgroundImage: `url(${assets.back_6})` }}>
            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg'></div>
          </div>
          <div className='relative z-10'>
            <h1 className='mt-3 text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300'>
              Solar System Installation
            </h1>
            <div className='pt-2'>
              <p className='font-bold transition-colors duration-300 text-sm sm:text-base'>
                Professional installation services to ensure your solar system operates efficiently.
              </p>
            </div>
            <Link to="/installation">
              <div className='bg-red-500 text-white my-2 py-1 px-3 rounded-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                Read More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBody;
