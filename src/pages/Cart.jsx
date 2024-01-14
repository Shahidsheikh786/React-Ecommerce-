
import {useContext,useEffect, useState} from "react"
import CartItem from "../components/CartItem"
import AppContext from "../AppContext.jsx"

const Cart = () =>{
  
  
  const contextValue = useContext(AppContext);
  
  const {cartData,handlePrice,totalPrice} = contextValue;
  
  const getTotalPrice = () =>{
    let value = 0;
    
    cartData.map((e,i)=>{
    value = value + e.new_price;
    })
    setTotalPrice(value)
  }
  
  useEffect(()=>{
    handlePrice()
  },[cartData])
  
  
  return ( <div >
 
  <div className="text-center font-bold text-2xl "> Total amount ${totalPrice}</div>
  
   {cartData.map((product,i)=>{
     return <CartItem  product={product}/>
   })}
   
  </div>
    )
}
export default Cart