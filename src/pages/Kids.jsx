
import React from 'react'
import all_product from "../assets/all_product.js"
import Product from "../components/Product"
import ProductCategory from "../components/ProductCategory"
import banner from "../assets/banner_kids.png"

const Kids = () => {
  
  const filterData = all_product.filter((product) => product.category == "kid")
  
  return (
    <div>
        <ProductCategory data={filterData} banner={banner}/>
    </div>
  )
}

export default Kids