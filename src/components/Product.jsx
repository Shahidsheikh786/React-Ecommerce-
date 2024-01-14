
import React from 'react'
import {Link} from "react-router-dom"

const Product = ({product}) => {
  
  return (
    <div className="flex flex-col gap-1  w-60 justify-center my-2"
    key={product.id}>
    <Link to={`/product/${product.id}`} onClick={()=> window.scrollTo(0,0)}>
    <img src={product.image} className="h-60 w-60  object-contain"/>
    <h1>{product?.name}</h1>
    <p className="font-bold"> <span className="line-through text-[#858585]">$60</span> $50 </p>
    </Link>
    </div>
    
  )
}

export default Product