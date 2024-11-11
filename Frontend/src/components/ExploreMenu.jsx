/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { menu_list } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

function ExploreMenu({category,setCategory}) {

    const {menuRef} = useContext(StoreContext)
  return (
   <>
   <div ref={menuRef} className='flex flex-col gap-5'>
        <h2 className='font-medium text-2xl text-gray-800'>Explore Our Menu</h2>
        <p className='max-w-4xl text-gray-500'>
            Choose from a Diverse menu featuring a delectable array of dishes crafted  with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <div className='flex items-center justify-between gap-7 text-center overflow-auto my-5 mx-0'>
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)}  key={index} >
                        <img src={item.menu_image} className={`${category===item.menu_name?'border-4 border-orange-500 p-0.5':''}  w-[7.5vw] min-w-20 cursor-pointer rounded-full transition duration-200 `}/>
                        <p className='mt-2 text-gray-500 text-md'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='border-none h-[2px] my-2 mx-0 bg-gray-300 '/>
   </div>

   </>
  )
}

export default ExploreMenu
