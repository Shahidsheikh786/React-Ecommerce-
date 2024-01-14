import React,{useState} from 'react'
import {Link} from "react-router-dom"

const MenuLinks = ({setOpenSidebar, style, activeCategory, setActiveCategory}) => {
  
  
  
  return (
    <div>
 <ul className={`flex ${style}  gap-3 font-bold`}>
 
   <Link to={`/`} onClick={()=>setOpenSidebar(false)}> 
   <li onClick={()=>{ setActiveCategory("Home");
  
   }}> Home {"Home" == activeCategory ? <hr
   className="h-1 bg-red-600 rounded-full "/> : ""} </li>
   </Link>
 
 
    <Link to={`/mens`} onClick={()=>setOpenSidebar(false)}> 
   <li onClick={()=>{ setActiveCategory("Mens");
  
   }}> Mens {"Mens" == activeCategory ? <hr
   className="h-1 bg-red-600 rounded-full "/> : ""} </li>
   </Link>
 
    <Link to={`/womens`} onClick={()=>setOpenSidebar(false)}> 
   <li onClick={()=>{ setActiveCategory("Womens");
  
   }}> Womens {"Womens" == activeCategory ? <hr
   className="h-1 bg-red-600 rounded-full "/> : ""} </li>
   </Link>
   
    <Link to={`/kids`} onClick={()=>setOpenSidebar(false)}> 
   <li onClick={()=>{ setActiveCategory("kids");
  
   }}> kids {"kids" == activeCategory ? <hr
   className="h-1 bg-red-600 rounded-full "/> : ""} </li>
   </Link>
 

  </ul>
    </div>
  )
}

export default MenuLinks