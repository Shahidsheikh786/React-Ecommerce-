import React,{useState,useEffect} from 'react'

import all_product from "../assets/all_product.js"
import Product from "./Product"

const RelatedProducts = ({category}) => {
 const [data, setData] = useState([]);
 
  useEffect(() => {
   const fiteredData = all_product.filter((element) => element.category ==
   category).splice(0,4)
   
   setData(fiteredData)
   
  }, [category]);
  

  return (
    <div>
    
    <div className="flex flex-col items-center my-3 relative">
    <h1 className="font-bold m-3 text-xl">Related Products</h1>
    <hr className="h-1 bg-red-500 rounded-3xl w-[70px] "/>
    </div>
    
    <div className="flex gap-3 flex-wrap justify-center">
    
    {data?.map((product)=>{
      return <Product product={product}/>
    })}
    </div>
    </div>
  )
}

export default RelatedProducts