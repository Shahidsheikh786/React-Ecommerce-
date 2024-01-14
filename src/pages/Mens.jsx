import React from 'react'
import all_product from "../assets/all_product.js"
import Product from "../components/Product"
import banner from "../assets/banner_mens.png"
import ProductCategory from "../components/ProductCategory"

const Mens = () => {
  
  const filterData = all_product.filter((product) => product.category == "men")
  
  return (
    
    <div className="">
      <ProductCategory data={filterData} banner={banner}/>
    </div>
  )
}

export default Mens