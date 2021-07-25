import express from 'express';
import data from './data.js';

const app = express();
const PORT = process.env.PORT || 5000

app.get('/api/products',(req,res)=>{
    res.send(data.products)
})
app.get('/api/product/:id',(req,res)=>{
    const product = data.products.find((x)=>x._id===req.params.id)
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message: 'product not Found'})
    }
})

app.get('/',(req,res)=>{
    res.send("Server is ready");
})

app.listen(PORT,()=>{
    console.log('Server at localhost:5000')
})