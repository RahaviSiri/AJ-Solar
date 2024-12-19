import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Partners.css";

const Join = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between w-full bg-sky-500 h-auto md:h-[160px] mt-4 poppins-regular px-6 py-4'>
        <div className='flex flex-col'>
            <p className='text-slate-50 text-3xl lg:text-4xl pt-3 md:pt-6'>
                Looking to Transition to Solar Power and Cleaner Energy?
            </p>
            <p className='text-slate-50 text-lg md:text-xl pt-2 md:pt-3 mb-8'>
                Save on your monthly energy bill and ensure continuous power supply.
            </p>
        </div>
        <div className='mt-4 md:mt-0'>
            <Link to="/contact">
                <button className='text-slate-50 border-white shadow-lg border-2 px-4 py-2 hover:bg-white hover:text-sky-700 transition-colors'>
                    Contact Now
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Join;
