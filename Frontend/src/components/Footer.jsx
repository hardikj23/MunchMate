/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'
const Footer = () => {

  const {contactRef} = useContext(StoreContext)

  return (
    <>
    <div ref={contactRef} className='bg-[#323232] text-[#d9d9d9] flex flex-col gap-5 py-5 px-[8vw] items-center pt-20 mt-20'>
      <div className='flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr] w-full sm:gap-x-20 gap-[35px]'>
        <div className='bg-[#323232] flex flex-col gap-5 items-start'>
            <img src={assets.logo} className='w-64 max-w-full h-auto' />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum obcaecati voluptatum impedit, illo perferendis voluptatem nobis consequuntur saepe provident. Aliquid molestiae distinctio unde nam veritatis ab quod repudiandae voluptates dolorem!</p>
              <div className='flex justify-start items-center gap-5'>
                <img src={assets.facebook_icon} />
                <img src={assets.twitter_icon} />
                <img src={assets.linkedin_icon}/>
              </div>
        </div>
        <div className='flex flex-col gap-5 items-start'>
          <h2 className='text-2xl font-semibold text-white'>COMPANY</h2>
          <ul className='flex flex-col gap-3'>
            <li className='list-none cursor-pointer'>Home</li>
            <li className='list-none cursor-pointer'>About Us</li>
            <li className='list-none cursor-pointer'>Delivery</li>
            <li className='list-none cursor-pointer'>Privacy policy</li>
          </ul>
        </div>
        <div className='flex flex-col gap-5 items-start'>
          <h2 className='text-2xl font-semibold text-white'>GET IN TOUCH</h2>
          <ul className='flex flex-col gap-3'>
            <li className='list-none cursor-pointer'>+91-8050235734</li>
            <li className='list-none cursor-pointer'>contact@MunchMate.com</li>
          </ul>
        </div>
      </div>
      <hr className='bg-gray-500 w-full border-none h-1 mt-3'/>
      <p className='text-center'>COPYRIGHT 2024 © MunchMate.com - All Rights Reserved.</p>
    </div>
    
    </>
  )
}

export default Footer
