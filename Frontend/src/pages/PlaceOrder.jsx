/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <>
      <form
        action=""
        className="flex items-start justify-between gap-12 mt-[100px] sm:w-[80%] sm:mx-auto"
      >
        <div className="w-full max-w-[500px]">
          <p className="font-semibold text-3xl mb-7">Delivery Information</p>
          <div className="flex gap-[10px]">
            <input type="text" placeholder="First Name" className="w-full border border-orange-500 outline-none mb-3 p-2 rounded-md"/>
            <input type="text" placeholder="Last Name" className="w-full border border-orange-500 outline-none mb-3 p-2 rounded-md"/>
          </div>
          <input type="email" placeholder="Email Address" className="w-full border border-orange-500 outline-none mb-3 p-2 rounded-md"/>
          <div className="flex gap-[10px]">
            <input type="text" placeholder="City" className="w-full border border-orange-500 outline-none mb-3 p-2 rounded-md"/>
            <input type="text" placeholder="State" className="w-full border border-orange-500 outline-none mb-3 p-2 rounded-md"/>
          </div>
          <div className="flex gap-[10px]">
            <input type="text" placeholder="Postal Code" className="w-full border border-orange-500 outline-none mb-3 p-2 rounded-md"/>
          </div>
          <input type="text" placeholder="Phone Number" className="w-full border border-orange-500 outline-none mb-3 p-2 rounded-md"/>
        </div>
        <div className="w-full max-w-[500px]">
          <div className="sm:flex-row sm:justify-between items-center md:w-[80%] mx-auto flex flex-col-reverse">
            <div className="flex-1 flex-col gap-5 mr-32">
              <h2 className="text-3xl text-semibold">Cart Total</h2>
              <div className="mt-8">
                <div className="flex justify-between text-[#555]">
                  <p>Subtotal</p>
                  <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr className="my-2 mx-0" />
                <div className="flex justify-between text-[#555]">
                  <p>Delivery Fee</p>
                  <p>₹{60}</p>
                </div>
                <hr className="my-2 mx-0" />
                <div className="flex justify-between text-[#555]">
                  <b>Total</b>
                  <b>₹{getTotalCartAmount() + 60}</b>
                </div>
                <hr className="my-2 mx-0" />
                <button className="border-none bg-orange-500 text-white py-3 px-2 w-48 rounded-md cursor-pointer text-sm mt-7">
                  PROCEED TO PAYMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
