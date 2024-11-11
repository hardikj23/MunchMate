/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const List = () => {

  const Url = "http://localhost:4000"
  const [list,setList] = useState([])

  const fetchList = async () =>{
    const response = await axios.get(`${Url}/API/food/list`)
    if (response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) =>{
    const response = await axios.post(`${Url}/API/food/remove`, {id:foodId})
    await fetchList()
    if (response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
  }


  useEffect(()=>{
    fetchList()
  },[])


  return (
    <>
    <div className='flex-col m-3 w-full'>
      <p className='text-gray-600 text-xl py-3'>All Foods List</p>
      <div>
        <div className='hidden sm:grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] grid-cols-[1fr_3fr_1fr] gap-4 items-center sm:gap-[10px] py-3 px-4 border border-[#cacaca]'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return (
            <div key={index} className='grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] grid-cols-[1fr_3fr_1fr] gap-4 items-center sm:gap-[10px] py-3 px-4 border border-[#cacaca] bg-[#f9f9f9]'>
              <img src={`${Url}/images/`+ item.image} className='w-12' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <p className='cursor-pointer' onClick={()=>removeFood(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default List
