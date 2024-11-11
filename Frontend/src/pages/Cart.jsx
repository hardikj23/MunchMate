/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { addToCart, food_list, removeFromCart, cartItems, getTotalCartAmount , Url } = useContext(
    StoreContext
  );

  const isCartEmpty = !Object.values(cartItems).some(
    (quantity) => quantity > 0
  );

  const navigate = useNavigate()

  return (
    <>
      <div className="mt-24">
        {isCartEmpty ? (
          <h2 className="m-auto text-center text-2xl text-gray-600">
            Your Cart Is Empty!
          </h2>
        ) : (
          <div>
            <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-xs">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <>
                    <div
                  
                      className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-black text-sm my-2"
                    >
                      <img src={Url+"/images/"+item.image} alt="" className="w-12" />
                      <p>{item.name}</p>
                      <p>₹{item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>₹{item.price * cartItems[item._id]}</p>
                      <p
                        className="cursor-pointer"
                        onClick={() => removeFromCart(item._id)}
                      >
                        x
                      </p>
                    </div>
                    <hr className="bg-[#e2e2e2] border-none h-[1px] " />
                  </>
                );
              }
            })}
            <div className="mt-20 sm:flex-row sm:justify-between items-center md:w-[80%] mx-auto flex flex-col-reverse">
              <div className="flex-1 flex-col gap-5 mr-32">
                <h2 className="text-3xl text-semibold">Cart Total</h2>
                <div className="mt-8">
                  <div className="flex justify-between text-[#555]">
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                  </div>
                  <hr className="my-2 mx-0"/>
                  <div className="flex justify-between text-[#555]">
                    <p>Delivery Fee</p>
                    <p>₹{60}</p>
                  </div>
                  <hr className="my-2 mx-0"/>
                  <div className="flex justify-between text-[#555]">
                    <b>Total</b>
                    <b>₹{getTotalCartAmount() + 60}</b>
                  </div>
                  <hr className="my-2 mx-0"/>
                  <button onClick={()=>navigate('/order')}
                  className="border-none bg-orange-500 text-white py-3 px-2 w-48 rounded-md cursor-pointer text-sm">
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
              <div className="sm:flex-1 flex justify-start mb-5">
                <div>
                  <p className="text-[#555]">If you have a Promo Code, Enter it here</p>
                  <div className="mt-3 flex justify-between items-center bg-[#eaeaea] rounded-md">
                    <input type="text" placeholder="Promo Code" className="bg-transparent border-none outline-none pl-px-[10px]" />
                    <button className="w-[150px] py-3 px-[5px] border-none bg-black text-white rounded-md">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
