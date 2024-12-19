import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import "../Components/Partners.css"

const Footer = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleDropdownToggle = (event) => {
        event.stopPropagation(); // Prevent click from propagating to the document
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLinkClick = (path) => {
        setIsDropdownOpen(false); // Close dropdown
        navigate(path); // Navigate to the selected path
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false); // Close dropdown if clicking outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
        <div className='text-black bg-gradient-to-r from-cyan-500 to-green-200 poppins-regular flex flex-col items-center p-8'>
            <div className='flex flex-col md:flex-row justify-between w-full max-w-6xl'>
                {/* Left Section - Quick Navigation */}
                <div className='flex flex-col items-start w-full md:w-1/2 p-4'>
                    <p className='text-2xl md:text-3xl font-bold mb-2'>Quick Navigation</p>
                    <hr className='w-12 border-none h-[4px] bg-black mb-4'/>
                    <NavLink to="/" className="flex items-center gap-1 px-4 py-2 transition-colors duration-300 w-full">
                        <p className='text-lg md:text-xl'><i className="fa-solid fa-arrow-right"></i> Home</p>
                    </NavLink>
                    <NavLink to="/about" className="flex items-center gap-1 px-4 py-2 transition-colors duration-300 w-full">
                        <p className='text-lg md:text-xl'><i className="fa-solid fa-arrow-right"></i> About</p>
                    </NavLink>
                    <NavLink to="/solution" className="flex items-center gap-1 px-4 py-2 transition-colors duration-300 w-full">
                        <p className='text-lg md:text-xl'><i className="fa-solid fa-arrow-right"></i> Solution</p>
                    </NavLink>
                    <div className="relative flex items-center gap-1 w-full" ref={dropdownRef}>
                        <p 
                            className='text-lg md:text-xl cursor-pointer px-4 py-2 transition-colors duration-300 w-full' 
                            onClick={handleDropdownToggle}
                        >
                            <i className="fa-solid fa-arrow-right"></i> Projects
                        </p>
                        {isDropdownOpen && (
                            <div className="absolute top-full mt-2 flex flex-col bg-black shadow-md rounded-md w-full">
                                <div 
                                    className="text-lg md:text-xl border-t-4 border-green-700 px-4 py-2 text-center cursor-pointer transition-colors duration-300"
                                    onClick={() => handleLinkClick('/residential')}
                                >
                                    Residential
                                </div>
                                <div 
                                    className="text-lg md:text-xl px-4 py-2 text-center cursor-pointer hover:bg-green-900 hover:text-white transition-colors duration-300"
                                    onClick={() => handleLinkClick('/commercial')}
                                >
                                    Commercial
                                </div>
                            </div>
                        )}
                    </div>
                    <NavLink to="/contact" className="flex items-center gap-1 px-4 py-2 transition-colors duration-300 w-full">
                        <p className='text-lg md:text-xl'><i className="fa-solid fa-arrow-right"></i> Contact Us</p>
                    </NavLink>
                </div>

                {/* Right Section - Contact Information */}
                <div className='flex flex-col items-start w-full md:w-1/2 p-4'>
                    <p className='text-2xl md:text-3xl font-bold mb-2'>Contact Us</p>
                    <hr className='w-12 border-none h-[4px] bg-black mb-4'/>
                    <div className='flex items-center gap-3 mb-3'>
                        <i className="fa-solid fa-house text-xl md:text-2xl"></i>
                        <p className='text-sm md:text-base'>Kaithady Nunavil,Chavakacheri</p>
                    </div>
                    <div className='flex items-center gap-3 mb-3'>
                        <i className="fa-solid fa-envelope text-xl md:text-2xl"></i>
                        <p className='text-sm md:text-base'>ajenergypark@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-3 mb-3'>
                        <i className="fa-solid fa-phone text-xl md:text-2xl"></i>
                        <p className='text-sm md:text-base'>077 7123 986</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <a href="https://www.facebook.com/profile.php?id=61562148731964&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                           <img src={assets.facebook_icon} className='w-8 h-8 md:w-10 md:h-10' alt="Facebook" />
                        </a>
                        <a href="https://wa.me/94759329632" target="_blank" rel="noopener noreferrer">
                            <img src={assets.whatsapp_icon} className='w-8 h-8 md:w-10 md:h-10' alt="WhatsApp" />
                        </a>
                    </div>
                </div>

                <div className='flex flex-col items-start w-full md:w-1/2 p-4'>
                    <p className='text-2xl md:text-3xl font-bold mb-2'>Follow Us in Facebook</p>
                    <hr className='w-12 border-none h-[4px] bg-black mb-4'/>
                    <img src={assets.fb_page} alt="Facebook Page" className='w-full max-w-xs rounded-xl shadow-md shadow-white'/>
                </div>
            </div>
        </div>
        
        <div className='text-white bg-black p-4 text-center'>
            <p className='text-sm md:text-base'>&copy; {new Date().getFullYear()} AJ Solar Wave Energy Park. All rights reserved.</p>
        </div>
        </>
    );
};

export default Footer;
