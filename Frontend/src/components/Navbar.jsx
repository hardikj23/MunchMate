/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState,useRef, useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [li, setli] = useState('home');
  
  const {scrollToSection,getTotalCartAmount,token,setToken} = useContext(StoreContext)

  const navigate = useNavigate()
  const logOut = ()=>{
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  return (
    <>
      {/* Navbar container */}
      <div className='flex justify-between items-center flex-wrap md:flex-nowrap bg-white sticky top-0 z-10 p-5'>
        {/* Logo */}
        <img
          src={assets.logo}
          className='w-40 h-auto md:w-1/6 hover:scale-110'
          alt='Logo'
        />

        {/* Menu items */}
        <div className='hidden md:block'>
          <ul className='flex list-none gap-5 text-dusk text-xl'>
            <Link to='/'
              onClick={() => setli('home')}
              className={`cursor-pointer transform hover:scale-110 transition duration-300 ${
                li === 'home' ? 'active border-b-2 border-black pb-1' : ''
              }`}
            >
              Home
            </Link>
            <li
              onClick={() => {
                setli('menu');
                scrollToSection('menu');
              }}
              className={`cursor-pointer transform hover:scale-110 transition duration-300 ${
                li === 'menu' ? 'active border-b-2 border-black pb-1' : ''
              }`}
            >
              Menu
            </li>
            <li
              onClick={() => {
                setli('contact'); 
                scrollToSection('contact');
              }}
              className={`cursor-pointer transform hover:scale-110 transition duration-300 ${
                li === 'contact' ? 'active border-b-2 border-black pb-1' : ''
              }`}
            >
              Contact Us
            </li>
          </ul>
        </div>

        {/* Right-hand icons */}
        <div className='flex items-center gap-4 md:gap-10 md:mt-0'>
          <img src={assets.search_icon} className='w-6 sm:block hidden h-6' alt='Search' />
          <div className='relative'>
            <Link to='/cart'><img src={assets.basket_icon} className='w-6 h-6' alt='Basket' /></Link>
            <div className={getTotalCartAmount()===0?"":"absolute top-[-4px] right-[-4px] w-[10px] h-[10px] rounded-full bg-orange-500"}></div>
          </div>
          {!token?<button onClick={()=>setShowLogin(true)} 
          className='border border-red-400 rounded-3xl bg-transparent text-dusk text-sm py-2 px-5 cursor-pointer transition duration-500 hover:bg-red-300'>
            Sign In
          </button>
          : <div className='relative group'>
            <img src={assets.profile_icon}  />
            <ul className='absolute hidden right-0 z-[1] group-hover:flex flex-col gap-2 py-[12px] px-[25px] bg-[#fff2ef] border border-orange-500 rounded-md list-none outline-none w-[150px] max-w-[250px]'>
              <li className='flex items-center gap-2 cursor-pointer whitespace-nowrap hover:text-orange-500'><img src={assets.bag_icon} className='w-5'/><p>Orders</p></li>
              <hr className='w-full border-black'/>
              <li onClick={logOut}
              className='flex items-center gap-2 cursor-pointer whitespace-nowrap hover:text-orange-500'>
                <img src={assets.logout_icon} className='w-5'/>
                Log Out</li>
            </ul>
          </div> }
          
        </div>







        {/* Mobile menu button */}
        <div className='md:hidden'>
          <button className='text-dusk'>
            <svg className='w-6 h-6' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M3 6h18M3 12h18M3 18h18' />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
