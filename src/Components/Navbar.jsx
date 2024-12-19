import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../assets/assets'; 
import { NavLink, useNavigate } from 'react-router-dom';
import "../Components/Partners.css";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isSidebarProjectsOpen, setIsSidebarProjectsOpen] = useState(false); 
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleDropdownToggle = (event) => {
        event.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLinkClick = (path) => {
        setIsDropdownOpen(false);
        navigate(path);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSidebarLinkClick = (path) => {
        handleLinkClick(path);
        setVisible(false);
        setIsSidebarProjectsOpen(false);
    };

    return (
        <div className='poppins-regular'>
            <div className='navbar-container w-screen flex items-center bg-gradient-to-r from-cyan-500 to-green-200'>
                <div className='flex flex-1 items-center'>
                    <img src={assets.company_logo_no_bg} alt="" className='w-24 md:w-32' />
                    <ul className='hidden md:flex gap-5 text-sm font-bold text-sky-900 pr-1'>
                        <NavLink to="/" className="flex items-center gap-2 hover:bg-sky-900 hover:text-white px-4 py-2 transition-colors duration-300">
                            <p className='text-xl'>Home</p>
                        </NavLink>
                        <NavLink to="/about" className="flex items-center gap-2 hover:bg-sky-900 hover:text-white px-4 py-2 transition-colors duration-300">
                            <p className='text-xl'>About</p>
                        </NavLink>
                        <NavLink to="/solution" className="flex items-center gap-2 hover:bg-sky-900 hover:text-white px-4 py-2 transition-colors duration-300">
                            <p className='text-xl'>Solution</p>
                        </NavLink>
                        <div className="relative flex items-center gap-2" ref={dropdownRef}>
                            <p 
                                className='text-xl cursor-pointer hover:bg-sky-900 hover:text-white px-4 py-2 transition-colors duration-300' 
                                onClick={handleDropdownToggle}
                            >
                                Projects
                            </p>
                            <div className={`absolute top-full mt-2 flex flex-col bg-white shadow-md rounded-md transition-opacity duration-200 ${isDropdownOpen ? 'opacity-100' : 'opacity-0'} z-10`}>
                                <div 
                                    className="text-lg border-t-4 border-sky-700 w-40 px-4 py-2 text-center cursor-pointer hover:bg-sky-900 hover:text-white transition-colors duration-300"
                                    onClick={() => handleLinkClick('/residential')}
                                >
                                    Residential
                                </div>
                                <div 
                                    className="text-lg w-40 px-4 py-2 text-center cursor-pointer hover:bg-sky-900 hover:text-white transition-colors duration-300"
                                    onClick={() => handleLinkClick('/commercial')}
                                >
                                    Commercial
                                </div>
                            </div>
                        </div>
                        <NavLink to="/contact" className="flex items-center gap-2 hover:bg-sky-900 hover:text-white px-4 py-2 transition-colors duration-300">
                            <p className='text-xl'>Contact Us</p>
                        </NavLink>
                    </ul>
                </div>
                <div className='flex items-center ml-auto pr-4'>
                    <img onClick={() => setVisible(!visible)} src={assets.menu_icon} className='w-5 cursor-pointer md:hidden' alt="menu icon" />
                </div>
            </div>

            {/* Menu bar for small screens */}
            {visible && (
                <div className={`bg-sky-200 text-lg mb-5`}>
                    <div className='flex flex-col text-gray-600 p-3'>
                        <NavLink 
                            to="/"
                            onClick={() => handleSidebarLinkClick('/')} 
                            className='flex items-center gap-2 cursor-pointer py-2 pl-6 border'
                        >
                            <i className="fa-solid fa-house w-5 h-5"></i> Home
                        </NavLink>
                        <NavLink 
                            to="/about"
                            onClick={() => handleSidebarLinkClick('/about')} 
                            className='flex items-center gap-2 cursor-pointer py-2 pl-6 border'
                        >
                            <i className="fa-regular fa-address-card w-5 h-5"></i> About
                        </NavLink>
                        <NavLink 
                            to="/solution"
                            onClick={() => handleSidebarLinkClick('/solution')} 
                            className='flex items-center gap-2 cursor-pointer py-2 pl-6 border'
                        >
                            <i className="fa-solid fa-lightbulb w-5 h-5"></i> Solution
                        </NavLink>
                        <div className='flex items-center gap-2 py-2 pl-6 border cursor-pointer' onClick={() => setIsSidebarProjectsOpen(!isSidebarProjectsOpen)}>
                            <i className="fa-sharp fa-solid fa-solar-panel w-5 h-5"></i> Projects
                            <img src={assets.dropdown} alt="dropdown" className={`inline-block ml-2 transform ${isSidebarProjectsOpen ? 'rotate-180' : ''} w-3`} />
                        </div>
                        {isSidebarProjectsOpen && (
                            <div className='flex flex-col ml-8'>
                                <NavLink 
                                    to="/residential"
                                    onClick={() => handleSidebarLinkClick('/residential')} 
                                    className='flex items-center gap-2 cursor-pointer py-2 pl-6 border'
                                >
                                    <i className="fa-solid fa-house-chimney w-5 h-5"></i> Residential
                                </NavLink>
                                <NavLink 
                                    to="/commercial"
                                    onClick={() => handleSidebarLinkClick('/commercial')} 
                                    className='flex items-center gap-2 cursor-pointer py-2 pl-6 border'
                                >
                                    <i className="fa-solid fa-building w-5 h-5"></i> Commercial
                                </NavLink>
                            </div>
                        )}
                        <NavLink 
                            to="/contact"
                            onClick={() => handleSidebarLinkClick('/contact')} 
                            className='flex items-center gap-2 cursor-pointer py-2 pl-6 border'
                        >
                            <i className="fa-solid fa-address-book w-5 h-5"></i> Contact Us
                        </NavLink>
                    </div>
                    <p className='text-center text-lg p-4 bg-sky-700 text-white text-bold'>Welcome to AJ Sun Wave Energy Park</p>
                </div>
            )}
        </div>
    );
};

export default Navbar;
