/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const [active,setActive] = useState("")

  return (
    <>
    <div className='w-[18%] min-h-[100vh] border-[1.5px] border-[#a9a9a9] border-t-0 md:text-[1vw] text-[10px]'> 
        <div className='pt-12 pl-[20%] flex flex-col gap-5'>
            <NavLink onClick={()=>setActive("add")} to='/add' className={` ${active==="add"?"bg-[#fff0ed] border-orange-500":<></>} flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-[10px] rounded-e-sm cursor-pointe[#fff0ed]`}>
                <img src={assets.add_icon} alt="" />
                <p className='hidden sm:block'>Add Items</p>
            </NavLink>
            <NavLink onClick={()=>setActive("list")} to='/list' className={` ${active==="list"?"bg-[#fff0ed] border-orange-500":<></>} flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-[10px] rounded-e-sm cursor-pointer hover:bg-orange-300`}>
                <img src={assets.order_icon} alt="" />
                <p className='sm:block hidden'>List Items</p>
            </NavLink>
            <NavLink onClick={()=>setActive("orders")} to='/orders' className={` ${active==="orders"?"bg-[#fff0ed] border-orange-500":<></>} flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-[10px] rounded-e-sm cursor-pointer hover:bg-orange-300`}>
                <img src={assets.order_icon} alt="" />
                <p className='sm:block hidden'>Orders</p>
            </NavLink>
        </div>
    </div>
    </>
  )
}

export default Sidebar