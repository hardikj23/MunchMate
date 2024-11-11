/* eslint-disable no-unused-vars */
import React from "react";

const Header = () => {
  return (
    <>
      <div className='h-[20vh] md:h-[30vw] my-[20px] md:my-[30px] mx-auto bg-[url("./public/header_img.png")] bg-no-repeat relative bg-cover rounded-xl'>
        <div className="absolute flex flex-col items-start max-w-[90%] md:max-w-[50%] gap-[4vw] md:gap-[1.5vw] bottom-[5%] md:bottom-[10%] left-[4vw] md:left-[6vw] animate-fadeIn">
          <h2 className="font-medium text-white text-4xl md:text-6xl">
            Order your Favourite Food here!
          </h2>
          <p className="font-semibold text-white text-sm md:text-base md:block hidden">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <button className="border-none font-medium text-gray-500 bg-white py-2 md:py-3 px-3 md:px-4 rounded-3xl text-[11px] md:text-[13px]">
            View Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
