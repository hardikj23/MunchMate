import express from 'express'
import cors from 'cors'
import { Connectdb } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config.js'
import cartRouter from './routes/cartRoute.js';

//app config
const app = express()
const port = 4000;

//middlewares
app.set(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

//db connection
Connectdb()

//API endpoint

app.use('/API/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/API/user', userRouter)
app.use('/API/cart', cartRouter)


app.get("/",(req,res)=>{
    res.send('API Working')
})



app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
