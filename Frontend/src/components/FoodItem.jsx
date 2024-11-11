/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React ,{useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'


const FoodItem = ({id,name,image,price, description}) => {
  
    const {cartItems, addToCart, removeFromCart,Url} = useContext(StoreContext)

    return (
    <>
    <div style={{boxShadow : '0 0 10px rgba(0,0,0,0.3)' }} className='w-full m-auto rounded-2xl transition animate-fadeIn duration-100' >
        <div className='relative'>
            <img src={Url+"/images/"+image} className='rounded-t-2xl w-full'/>
            {!cartItems[id] 
            ? <img src={assets.add_icon_white} onClick={()=>addToCart(id)} className='w-9 absolute bottom-4 right-4 rounded-[50%] cursor-pointer '/> 
            : <div className='absolute right-4 bottom-4 flex items-center gap-[10px] p-[6px] rounded-3xl bg-white'>
                <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} />
                <p>{cartItems[id]}</p>
                <img src={assets.add_icon_green} onClick={()=>addToCart(id)} />
            </div>
        }
        </div>
        <div className='p-5'>
            <div className='flex justify-between items-center my-3'>
                <p className='font-semibold text-2xl'>{name}</p>
                <img src={assets.rating_starts} className='w-16 '/>
            </div>
            <p className='font-medium text-gray-400 text-sm'>{description}</p>
            <p className='font-semibold text-xl text-orange-400 my-2'>₹{price}</p>
        </div>
    </div>
    </>
  )
}

export default FoodItem