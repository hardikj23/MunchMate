import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from "validator"

// login user

const loginUser = async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await userModel.findOne({email})

        if (!user){
            res.json({success:false,message:"User doesn't exist!"})  
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch){
            return res.json({success:false,message:"Invalid credentials!"})
        }

        const token = createToken(user._id)
        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// Creating token 

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_TOKEN)
}



//Regiser User

const registerUser = async(req,res)=>{
    const {name,email, password} = req.body
    try {
        const existingUser = await userModel.findOne({email}) 
        // checking if user already exists
        
        if (existingUser) {
            return res.json({success:false,message:"User Already Exists!"})
        }
        // validating email and strong password

        if (!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid Email."})   
        }

        if (password.length < 8 ){
            return res.json({success:false,message:"Please enter a strong password."})   
        }

        //hashing user password

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)
        
        const newUser = new userModel({
            name,
            email,
            password:hashedPass,
        })

        const user = await newUser.save()
        
        const token = createToken(user._id)
        res.json({success:true, token}) 

    } catch (error) {
        console.log(error)   
        res.json({success:false, message:"Error"}) 
    }
}

export {loginUser,registerUser}