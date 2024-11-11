import foodModel from "../models/foodModel.js"
import fs from 'fs'

//add food item

const addFood = async(req,res) => {
    let {name,description,price,category} = req.body
    
    let image_filename = `${req.file.filename}`;


    const food = new foodModel({
        name,
        description,
        price,
        image:image_filename,
        category
    })
    try{
        await food.save()
        res.json({success:true,message:"Food Added"})
    }
    catch(err){
        console.log(err)
        res.json({success:false,message:"Error"})
    }
}

//retrieve all food list
const listFood = async (req,res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:'Error'})
    }
}

//remove food from list

const removeFood = async(req,res)=>{
    try {
        const foodItem = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${foodItem.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:'Food Removed'})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:'Error'})
    }
}

export {addFood, listFood, removeFood}