import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import "../Components/Partners.css"

const AboutPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Solution'); 
  };

  return (
    <div className="px-4 py-8 flex flex-col align-center poppins-regular">
      <div className="relative mb-3 w-full max-w-full">
          <img
            src={assets.AboutUs}
            alt="Banner"
            className="w-full h-auto object-cover sm:max-h-[400px] md:max-h-[300px] lg:max-h-[300px] sm:h-[400px] md:h-[300px] lg:h-[300px]"
          />
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-center gap-2">
        <div className="lg:w-2/4 lg:ml-8"> 
          <h1 className="text-3xl font-bold mb-4 mt-4 text-sky-700">Who We Are?</h1>
          <p className="text-base lg:text-lg leading-relaxed">
            AJ Sun Wave Energy Park is a trusted leader in Sri Lanka's solar power industry, offering advanced renewable energy solutions and storage systems for homes, businesses, and industries. We provide complete solar power services, from installing panels to after-sales support and maintenance. Our services include on-grid, hybrid, and battery backup systems, ensuring a steady and efficient energy supply.
            <br /><br />
            Since we began in the solar energy field, AJ Sun Wave Energy Park has led Sri Lanka's renewable energy efforts, with over 50MW of solar systems installed across the country. We are proud to offer custom solar installations, carefully designed, installed, and maintained by our skilled engineers to ensure top quality and performance.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <img src={assets.aboutPage} alt="About AJ Solar Wave Energy Park" className="w-full max-w-xs lg:max-w-md rounded-lg shadow-lg" />
        </div>
      </div>
      <div className='grid grid-cols-1 text-xl sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3 mb-1 px-8 py-5'>
        <div className='flex flex-col  bg-gradient-to-r from-lime-800 to-green-300 px-8 py-5 shadow-lg shadow-gray-600 rounded-lg transition-transform transform hover:scale-105'>
          <img src={assets.renewable_energy} alt="" className='w-16'/>
          <p className='text-white text-base text-xl lg:text-2xl leading-relaxed py-4'>
            Renewable Energy Source 
            <img src={assets.arrow_right} onClick={handleClick} alt="" className='hover:cursor-pointer w-8 mt-3'/>
          </p>
        </div>
        <div className='flex flex-col bg-gradient-to-r from-lime-800 to-green-300 px-8 py-5 shadow-lg shadow-gray-600 rounded-lg transition-transform transform hover:scale-105'>
          <img src={assets.save_nature} alt="" className='w-16'/>
          <p className='text-white text-base text-xl lg:text-2xl leading-relaxed py-4'>
            Environmental Protection Acts 
            <img src={assets.arrow_right} onClick={handleClick} alt="" className='hover:cursor-pointer w-8 mt-3'/>
          </p>
        </div>
        <div className='flex flex-col bg-gradient-to-r from-lime-800 to-green-300 px-8 py-5 shadow-lg shadow-gray-600 rounded-lg transition-transform transform hover:scale-105'>
          <img src={assets.eco_light} alt="" className='w-16'/>
          <p className='text-white text-base text-xl lg:text-2xl leading-relaxed py-4'>
            Parts and <br /> Maintenance 
            <img src={assets.arrow_right} onClick={handleClick} alt="" className='hover:cursor-pointer w-8 mt-3'/>
          </p>
        </div>
        <div className='flex flex-col bg-gradient-to-r from-lime-800 to-green-300 px-8 py-5 shadow-lg shadow-gray-600 rounded-lg transition-transform transform hover:scale-105'>
          <img src={assets.solar_cell} alt="" className='w-16'/>
          <p className='text-white text-base text-xl lg:text-2xl leading-relaxed py-4'>
            Innovative Green Solutions 
            <img src={assets.arrow_right} onClick={handleClick} alt="" className='hover:cursor-pointer w-8 mt-3'/>
          </p>
        </div>
      </div>

    </div>
  )
}

export default AboutPage;
