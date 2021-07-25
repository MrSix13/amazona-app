import Product from "../components/Product";
import { useState,useEffect } from "react";
import axios from 'axios';

const HomeScreen = () => {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
      const fetchData = async ()=>{
         const {data} = await axios.get('/api/products');
         setProducts(data)
      }
      fetchData();
  },[])
    return (
        <div className="row center">
                {products.map((product)=>(
                  <Product key={product._id} product = {product}/>
                ))}
        </div>
    )
}

export default HomeScreen
