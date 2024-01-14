import React,{useState,useContext} from 'react'
import AppContext from "../AppContext.jsx"
import img1 from "../assets/product_10.png"
import star from "../assets/star_icon.png"
import OtherTabs from "./OtherTabs"

const DisplayProduct = ({product}) => {
  const contextValue = useContext(AppContext);
  
  const {cartData,setCartData,addToCart} = contextValue;
  
  console.log(cartData)
  
   const [size,setSize] = useState("S");
   
   const sizeData = ["S","M","L","XL","XXL"]
   
  return (
    <div>
    
    <div className="my-2 md:flex gap-3 p-4">
    <div className="flex flex-col gap-3 relative w-full md:w-[400px] ">
   
    <img src={product?.image} className="h-[400px] md:h-[400px]  md:min-w-[400px] min-w-[100px]  border object-contain"/>
    
        {/*side Imgs*/}
    <div className="flex   justify-between gap-2 ">
    <img src={product?.image} className="h-20 w-32 object-contain my-1"/>
    <img src={product?.image} className="h-20 w-32 object-contain my-1"/>
    <img src={product?.image} className="h-20 w-32 object-contain my-1"/>
    <img src={product?.image} className="h-20 w-32 object-contain my-1"/>
  </div>

    </div>
     
      <div>
      <h1 className=" text-xl font-bold "> {product?.name} </h1>
        
        <p className="flex gap-1 my-1">
        <img src={star} className="object-contain"/>
        <img src={star} className="object-contain"/>
        <img src={star} className="object-contain"/>
        <img src={star} className="object-contain"/> (122)
        </p>
        
        <div className="text-xl font-bold"><span className="text-[#949494]
        line-through mx-2">${product?.old_price}</span> ${product?.new_price}</div>
        
        <p className="my-2">sint esse ea veniam qui ullamco culpa et elit veniam labore eu voluptate laborum ea aute voluptate officia fugiat deserunt sunt aliquip in aute magna officia pariatur nostrud nulla dolore</p>
        
        <div className="my-4">
        <h1 className="font-bold text-xl my-2">Select size</h1>
        
        <ul className="flex gap-2 ">
        {sizeData.map((e,i)=>{
          return  <li key={i}
          onClick={()=>{setSize(e)}}
          className={` bg-[#e6e6e6]  p-3 px-5 border
          ${size == e ? " border-red-600" : "" }
          `}>{e}</li>
        })}

        </ul>
        </div>
        
        <button className="p-3 cursor-pointer px-8 bg-red-600 text-white"
        onClick={()=>addToCart(product) }>Add to cart</button>
        
        </div>
    </div>
    
        <OtherTabs/>
 
    
    </div>
  )
}

export default DisplayProduct