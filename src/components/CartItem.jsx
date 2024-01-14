

import sana from "../assets/product_6.png"
import {useContext, useState} from "react"
import AppContext from "../AppContext.jsx"

const CartItem = ({product}) => {
  
    const contextValue = useContext(AppContext);
  
  const {removeFromCart,handleChange,CartItem} = contextValue;
  
  return (
    
    <div>
       <div className=" flex flex-col  md:flex-row items-center gap-4 p-4
       border" >
       <div className="flex gap-4 items-center">
   
   <img src={product.image} className="h-32  object-contain rounded-full"/>
   </div>
   <div className="w-full">
   <h1 className="font-bold text-2xl w-[100%] ">{product.name}</h1>
   
   <div className="flex gap-2 text-xl items-center " >Price : ${product.new_price}
   <span>Quantity :
   <button  onClick={()=> handleChange(product, -1)} className="border p-1 rounded-full px-2
   mx-1">-</button>
   {product.quantity} 
   <button onClick={()=> handleChange(product, +1)} className="border p-1 px-2 rounded-full mx-1
   ">+</button> </span></div>
   
   </div>
   <div className="border p-1 px-2 rounded-full w-10 text-center"
   onClick={()=>removeFromCart(product.id)}>X</div>
   </div>
    </div>
  )
}

export default CartItem