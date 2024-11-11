import mongoose from 'mongoose'

export const Connectdb = async () => {
    await mongoose.connect('mongodb://localhost:27017/MunchMate').then(()=>console.log("Database Connected!"))
}
