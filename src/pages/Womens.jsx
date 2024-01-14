
import React from 'react'
import all_product from "../assets/all_product.js"
import Product from "../components/Product"
import Category from "../components/ProductCategory";

import banner from "../assets/banner_women.png"
const Womens = () => {
  const filterData = all_product.filter((product) => product.category == "women")
  
  return (
    <div>
     
 <Category data={filterData} banner={banner}/>
    </div>
  )
}

export default Womens