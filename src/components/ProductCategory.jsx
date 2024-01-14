
import React from 'react'
import all_product from "../assets/all_product.js"
import Product from "../components/Product"
import banner from "../assets/banner_women.png"
import { MdArrowDropDown } from "react-icons/md";

const ProductCategory = ({banner, data}) => {
  
  return (
    <div>
    
      <div className="p-3"> <img src={banner} /> </div>
      
    <div className="flex p-3 items-center justify-between"><h1><span
    className="font-bold"> Showing
    1-{data.length} </span>  out of {data.length} products</h1> <button className="border p-1 flex items-center px-2 rounded-3xl">sort
    <MdArrowDropDown/> </button></div>
    
    <div className="flex flex-wrap justify-center gap-3">
    {data.map((product)=>{
      return <Product product={product}/>
    })}
    </div>
    
    <div className="flex justify-center  p-5"><button className="border p-2 px-4 rounded-3xl">Load More</button></div>
    
    </div>
  )
}

export default ProductCategory