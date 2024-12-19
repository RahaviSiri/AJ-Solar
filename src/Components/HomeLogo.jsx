import React from 'react';
import { assets } from '../assets/assets';

const HomeLogo = () => {
  return (
    <div className='flex flex-col items-center mt-4 mb-4'>
        <hr className='w-2/3 border-zinc-400 border-solid border mb-4'/>
        <div className='flex flex-wrap justify-center items-center gap-4 max-w-4xl'>
            <img src={assets.ceylon_electricity} alt="Ceylon Electricity" className='w-32 sm:w-36 md:w-40' />
            <img src={assets.lanka_electricity} alt="Lanka Electricity" className='w-32 sm:w-36 md:w-40' />
            <img src={assets.sri_lanka_sustainable_energy_authority} alt="Sri Lanka Sustainable Energy Authority" className='w-32 sm:w-36 md:w-40' />
            <img src={assets.soorya_bala_logo} alt="Soorya Bala Logo" className='w-32 sm:w-36 md:w-40' />
        </div>
    </div>
  );
}

export default HomeLogo;
