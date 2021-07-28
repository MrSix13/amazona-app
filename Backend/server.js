import express from 'express';
import dotenv from 'dotenv';
import ConnectMongoDB from './database.js'
import userRouter from './routers/userRoutes.js';
import productRouter from './routers/productRoutes.js'

dotenv.config()

ConnectMongoDB();
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/users', userRouter);
app.use('/api/products', productRouter)
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})




app.get('/',(req,res)=>{
    res.send("Server is ready");
})

app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`)
})