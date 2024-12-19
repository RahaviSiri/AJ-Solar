import React from 'react';
import { assets } from '../assets/assets';

const ServicesIntro = () => {
  return (
    <div className='mx-5 my-8'>
        <div className='bg-emerald-50 flex flex-col md:flex-row gap-6 p-6 flex-wrap mt-5'>
            <div className='flex-1 mb-5 mt-3'>
                <p className='text-lg font-bold mb-2'>Modern Technologies</p>
                <h1 className='text-3xl md:text-5xl font-bold leading-tight text-emerald-800'>
                    Step-by-Step Guide for Installing Solar Energy Solutions
                </h1>
                <p className='mt-4 text-base'>
                    The procedure for solar system installation can vary depending on the size and complexity of the system, as well as the specific requirements of the homeowner or business owner.
                </p>
            </div>
            <div className='flex-1 mt-3'>
                <p className='text-base'>
                    However, there are some general steps that are involved in most solar system installations:
                </p>
                <ol className='list-decimal list-inside mt-2 mx-6'>
                    <li className='mt-2 text-base'>Site assessment</li>
                    <li className='mt-2 text-base'>System design</li>
                    <li className='mt-2 text-base'>Permitting</li>
                    <li className='mt-2 text-base'>Installation</li>
                    <li className='mt-2 text-base'>Inspection</li>
                    <li className='mt-2 text-base'>Interconnection</li>
                </ol>
            </div>
            <div className='flex-1 mt-3'>
                <p className='text-base'>
                    Once the solar panel system has been interconnected to the grid, it will begin generating electricity for the homeowner or business owner.
                </p>
                <img src={assets.SolarMaintainence} alt="" className='mt-2 rounded-xl w-80 mt-5'/>
            </div>
        </div>
    </div>
  );
}

export default ServicesIntro;
