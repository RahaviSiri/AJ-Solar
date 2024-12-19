import React from 'react'
import { Link } from 'react-router-dom'
import "./Partners.css";

const WheretoStart = () => {
  return (
        <div className='flex flex-col items-center text-center p-10 md:p-12 poppins-regular'>
            <p className='text-black text-lg md:text-xl font-bold mb-2'>
                Are you thinking about how to start
            </p>
            <p className='text-black text-3xl md:text-5xl font-bold mb-4'>
                Seek a Collaborator for Your Solar Initiative
            </p>
            <Link to="/contact">
                <div className='bg-red-500 text-white text-bold py-2 px-6 md:py-3 md:px-8 rounded-2xl cursor-pointer hover:bg-red-300 hover:text-black hover:text-bold'>
                    Contact Us
                </div>
            </Link>
        </div>
  )
}

export default WheretoStart
