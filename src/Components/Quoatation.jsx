import React from 'react';
import { assets } from '../assets/assets';

const Quotation = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-4 px-4'>
      {/* Responsive Image */}
      <img 
        src={assets.PlanQuotation} 
        alt="Plan Quotation" 
        className='w-full sm:w-3/4 md:w-2/3'
      />
    </div>
  );
}

export default Quotation;
