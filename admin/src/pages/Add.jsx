/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {assets} from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = () => {

  const Url = "http://localhost:4000"
  const [image,setImage] = useState(false)
  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad",
  })


    const onChangeHandler = (event)=>{
      const name = event.target.name
      const value = event.target.value
      setData(data=>({...data, [name]:value}))
    }

 
    const onSubmitHandler = async (event)=>{
        event.preventDefault()
        const formData = new FormData()
        formData.append('name',data.name)
        formData.append('price',Number(data.price))
        formData.append('category',data.category)
        formData.append('description',data.description)
        formData.append('image',image)

        const response = await axios.post(`${Url}/API/food/add`, formData)
        console.log(response.data)
        if (response.data.success) {
          setData({
            name:"",
            description:"",
            price:"",
            category:"Salad",
           })
           setImage(false)
           toast.success(response.data.message)
        }
        else{
          toast.error(response.data.message)
        }
    }
    return (
      <>
      <div className='w-[70%] ml-[5vw] mt-12 text-[#6d6d6d] text-lg'>
        <form className='flex flex-col gap-5 ' onSubmit={onSubmitHandler} autoComplete='on'>
          <div className='flex flex-col gap-[10px]'>
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={image?URL.createObjectURL(image):assets.upload_area} className='w-32 cursor-pointer rounded-lg' />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
          </div>
          <div className='flex flex-col gap-[10px] w-[40%]'>
            <p>Product Name</p>
            <input type="text" onChange={onChangeHandler} value={data.name}
            placeholder='Type Here' 
            name = "name"
            className='p-2 border border-gray-700' />
          </div>
          <div className='flex flex-col gap-[10px] w-[40%]'>
            <p>Product Description</p>
            <textarea name="description" onChange={onChangeHandler} value={data.description}
              rows="3" placeholder='Write Content Here' 
              required 
              className='p-2 border border-gray-700'>
            </textarea>
          </div>
          <div className='flex sm:flex-row flex-col gap-[30px]'>
            <div className='flex flex-col gap-[10px]'>
              <p>Product Category</p>
              <select name="category" onChange={onChangeHandler} value={data.category}
              className='max-w-32 p-[10px] border border-gray-700'>
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <p>Product price</p>
              <input type="number" onChange={onChangeHandler} value={data.price}
              placeholder='₹100' 
              name = "price"
              className='max-w-32 p-[10px] border border-gray-700'/>
            </div>
          </div>
          <button type='submit' className='max-w-32 border-none bg-black text-white cursor-pointer p-[10px]'>ADD</button>
        </form>
      </div>
    </>
  )
}

export default Add
