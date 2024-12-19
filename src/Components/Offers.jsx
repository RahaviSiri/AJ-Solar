import React from 'react';
import './Partners.css';
import add_5 from './Images/5-add.png';
import add_20 from './Images/20-add.png';
import add_40 from './Images/40-add.jpg';

const Offers = () => {
  return (
    <div className="flex flex-col items-center mt-3 px-4">
      <h1 className="text-center text-4xl sm:text-4xl text-green-600 font-bold mb-4">Offers</h1>
      <p className="text-center font-semibold max-w-4xl mb-4">
        The offers will be updated every two weeks.
      </p>
      <div className="flex flex-wrap justify-center gap-8 mb-4">
        <img
          src={add_5}
          alt="Offer 5"
          className="w-40 sm:w-40 md:w-48 lg:w-56 xl:w-64 transition-transform duration-500 hover:scale-110 hover:shadow-lg opacity-100"
        />
        <img
          src={add_20}
          alt="Offer 20"
          className="w-40 sm:w-40 md:w-48 lg:w-56 xl:w-64 transition-transform duration-500 hover:scale-110 hover:shadow-lg opacity-100"
        />
        <img
          src={add_40}
          alt="Offer 40"
          className="w-40 sm:w-40 md:w-48 lg:w-56 xl:w-64 transition-transform duration-500 hover:scale-110 hover:shadow-lg opacity-100"
        />
        <img
          src={add_5}
          alt="Offer 5"
          className="w-40 sm:w-40 md:w-48 lg:w-56 xl:w-64 transition-transform duration-500 hover:scale-110 hover:shadow-lg opacity-100"
        />
        <img
          src={add_20}
          alt="Offer 20"
          className="w-40 sm:w-40 md:w-48 lg:w-56 xl:w-64 transition-transform duration-500 hover:scale-110 hover:shadow-lg opacity-100"
        />
        <img
          src={add_40}
          alt="Offer 40"
          className="w-40 sm:w-40 md:w-48 lg:w-56 xl:w-64 transition-transform duration-500 hover:scale-110 hover:shadow-lg opacity-100"
        />
      </div>
    </div>
  );
};

export default Offers;
