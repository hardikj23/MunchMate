/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-[8px_4%]">
      <div className="flex flex-col items-center">
        <img src={assets.logo} className="w-32" />
        <h2 className="text-xl font-semibold">Admin Panel</h2>
      </div>
      <img src={assets.profile_image} className="w-10" />
    </div>
  );
};

export default Navbar;
