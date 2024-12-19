import React from 'react';
import huawei from "./Images/huawei-logo.png";
import goodwe from "./Images/goodwe-logo.png";
import deye from "./Images/deye-logo.png";
import growatt from "./Images/growatt-logo.png";
import sma from "./Images/sma-logo.png";
import solis from "./Images/solis-logo.jpg";
import ae from "./Images/ae-logo.png";
import canadian from "./Images/canadian-logo.png";
import longi from "./Images/longi-logo.png";
import jinko from "./Images/jinko-logo.png";
import ja from "./Images/ja-logo.png";
import "./Partners.css"; // You will add custom CSS here for animation

const Partners = () => {
  return (
    <div className="flex flex-col items-center mt-3 poppins-regular px-4 mt-10">
      <h1 className="text-center text-3xl sm:text-4xl text-cyan-600 font-bold mb-4">
        Our Partners
      </h1>
      <p className="text-center font-semibold max-w-4xl mb-9">
        At AJ Solar Wave Energy Park, we are committed to delivering exceptional solar solutions by collaborating exclusively with trusted partners. We ensure that all our partners meet stringent quality standards, guaranteeing that our customers receive the best in solar technology and service.
      </p>

      {/* Scrolling container */}
      <div className="scrolling-wrapper flex items-center justify-center overflow-hidden relative w-full mb-8">
        <div className="scrolling-content flex animate-scroll gap-8">
          <img src={huawei} alt="Huawei Logo" className="w-32 sm:w-40" />
          <img src={goodwe} alt="GoodWe Logo" className="w-32 sm:w-40" />
          <img src={deye} alt="Deye Logo" className="w-32 sm:w-40" />
          <img src={growatt} alt="Growatt Logo" className="w-32 sm:w-40" />
          <img src={sma} alt="SMA Logo" className="w-32 sm:w-40" />
          <img src={solis} alt="Solis Logo" className="w-32 sm:w-40" />
          <img src={ae} alt="AE Logo" className="w-32 sm:w-40" />
          <img src={canadian} alt="Canadian Logo" className="w-32 sm:w-40" />
          <img src={ja} alt="JA Logo" className="w-32 sm:w-40" />
          <img src={jinko} alt="Jinko Logo" className="w-32 sm:w-40" />
          <img src={longi} alt="Longi Logo" className="w-32 sm:w-40" />
        </div>
      </div>
    </div>
  );
};

export default Partners;

