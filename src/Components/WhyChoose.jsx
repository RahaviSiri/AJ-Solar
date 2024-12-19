import React from 'react';
import "../Components/Partners.css"

const WhyChoose = () => {
  return (
    <div className='flex flex-col items-center p-4 mb-6 poppins-regular'>
      <h1 className='text-3xl sm:text-4xl font-bold mb-6 text-lime-800'>Why Choose Us?</h1>
      
      <div className='flex flex-col lg:flex-row gap-7 w-full max-w-6xl'>
        {/* First paragraph */}
        <div className='bg-sky-100 p-10 rounded-lg shadow-xl transition-transform transform hover:scale-105 flex-1'>
          <ol className='list-decimal space-y-4 text-left'>
            <li>At AJ Solar Wave Energy Park, we have sufficient experience in the renewable energy industry, making us a trusted name in Sri Lanka.</li>
            <li>Our team of skilled engineers and technicians is focused on providing solar power solutions customized to each client's needs.</li>
            <li>With a proven history of installing more than 50MW of solar systems across the country, we are dedicated to offering top service, from consultation to installation and maintenance.</li>
          </ol>
        </div>
        
        {/* Second paragraph */}
        <div className='bg-teal-100 p-10 rounded-lg shadow-xl transition-transform transform hover:scale-105 flex-1'>
          <ol className='list-decimal space-y-4 text-left'>
            <li>We take pride in providing complete solar energy solutions that are both innovative and reliable.</li>
            <li>Our products include the latest solar panels, energy storage systems, and hybrid solutions, all designed to improve efficiency and lower costs.</li>
            <li>By working with leading global manufacturers, we make sure our clients get the best products, backed by our focus on quality and performance.</li>
            <li>Whether for homes, businesses, or industries, our solutions are created to meet the changing energy needs of our clients.</li>
          </ol>
        </div>

        {/* Third paragraph */}
        <div className='bg-yellow-100 p-10 rounded-lg shadow-xl transition-transform transform hover:scale-105 flex-1'>
          <ol className='list-decimal space-y-4 text-left'>
            <li>Sustainability is at the heart of everything we do. At AJ Sun Wave Energy Park, we are committed to using renewable energy to fight climate change and reduce reliance on fossil fuels.</li>
            <li>We focus on our customers, making sure every project is done with care and precision.</li>
            <li>We go above and beyond to make sure our customers are fully satisfied, offering clear communication, fair pricing, and excellent after-sales support.</li>
            <li>Your trust is our most valuable asset, and we work hard to earn and keep it.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
