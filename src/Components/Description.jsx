import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './Images/descri-backround.jpg';
import { assets } from '../assets/assets'; 
import "../Components/Partners.css"

const Description = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden mt-1">
            {/* Blurred Background */}
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0, // Ensure this is behind other content
                }}
            ></div>
            
            {/* Overlay to reduce opacity */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white overlay
                    zIndex: 1, // Ensure overlay is above the blurred background
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full px-4 sm:px-8 md:px-16 py-8 poppins-regular">
                {/* For the left Side */}
                <div className="relative flex flex-col lg:flex-row items-center justify-center sm:px-10 lg:px-3">
                    {/* For the first image */}
                    <div className="relative z-10 flex-shrink-0 w-full max-w-sm lg:max-w-md  lg:block">
                        <img src={assets.back_2} alt="AJ Solar Wave Energy Park" className="shadow-2xl shadow-black w-full h-auto rounded-xl" />
                    </div>

                    {/* For the second image (hidden on small screens) */}
                    <div className="relative flex-shrink-0 w-full max-w-sm lg:max-w-md hidden lg:block lg:-mt-40 lg:-ml-80">
                        <img src={assets.back_6} alt="AJ Solar Wave Energy Park" className="shadow-2xl shadow-black w-full h-auto rounded-xl" />
                    </div>
                </div>

                {/* For the right side */}
                <div className="w-full text-center lg:text-left mt-8 lg:mt-0 lg:ml-16">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold mb-3 text-sky-700 font-mono">Leading Solar Innovator in Sri Lanka</h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg break-words mb-6 font-medium px-2 sm:px-0">
                        AJ Sun Wave Energy Park is a leader in renewable energy, offering top solar power solutions in Sri Lanka. We provide advanced solar and energy storage systems for homes, businesses, and industries. With over 50MW of solar power installed across the country, we are proud to be Sri Lanka's top solar-based Engineering, Procurement, and Construction company. Working with world-class manufacturers and trusted local suppliers, we deliver high-quality solar energy systems at affordable prices. Our goal is to offer innovative and cost-effective solar solutions that meet the changing energy needs of our clients.
                    </p>
                    {/* Link */}
                    <div className="flex justify-center">
                        <Link to="/about" className="p-2 md:px-10 md:py-3 bg-gradient-to-r from-sky-700 to-green-300 text-white font-semibold rounded shadow-lg hover:bg-blue-600 transition-colors inline-block">
                            More Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
