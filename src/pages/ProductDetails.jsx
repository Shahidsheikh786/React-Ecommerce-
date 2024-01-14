import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import all_product from "../assets/all_product.js"
import DisplayProduct from "../components/DisplayProduct"
import RelatedProducts from "../components/RelatedProducts"


const ProductDetails = () => {
  const {id} = useParams()
  const [data, setData] = useState(null);
  
  useEffect(()=>{
setData(all_product.find((product) => product.id == id))
  },[id])
 

  return (
    <div>
    <DisplayProduct product={data}/>
    <RelatedProducts category={data?.category}/>
    </div>
  )
}

export default ProductDetails