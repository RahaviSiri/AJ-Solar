import React from 'react';
import dec_1 from "./Images/Des-2.png";

const Intro = () => {
  return (
    <div className="flex justify-center">
      <img
        src={dec_1}
        alt="Description"
        className="w-full max-w-3xl h-auto" 
      />
    </div>
  );
}

export default Intro;
