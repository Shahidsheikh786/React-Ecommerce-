import React from 'react'
import popularProducts from "../assets/data.js"
import newCollection from "../assets/new_collections.js"

import Product from "../components/Product"
import NewsLetter from "../components/NewsLetter"



const Home = () => {
  
  return (
    <div>
   
   
   <div className="flex flex-col items-center">
   <h1 className="text-3xl font-bold mb-1">POPULAR IN WOMENS </h1>
   <hr className="h-2 bg-black rounded-full w-32"/>
   
   <div className="flex flex-wrap justify-center gap-1 p-2 my-5">
   {popularProducts.map((product)=>{
     return <Product product={product}/>
   })}
   </div>
    </div>
    
    
    <div className="flex flex-col items-center">
   <h1 className="text-3xl font-bold mb-1">POPULAR IN WOMENS </h1>
   <hr className="h-2 bg-black rounded-full w-32"/>
   
   <div className="flex flex-wrap justify-center gap-1 p-2 my-5">
   {newCollection.map((product)=>{
     return <Product product={product}/>
   })}
   </div>
    </div>
    <NewsLetter/>
    
    </div>
  )
}

export default Home