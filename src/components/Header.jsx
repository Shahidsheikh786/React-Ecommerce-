import React,{useState} from 'react'
import MenuLinks from "./MenuLinks"
import SideBar from "./SideBar"
import {Link} from "react-router-dom"

// icons
import { IoMenu } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";

const Header = ({cartData}) => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Home")
  return (
    <div className="flex justify-between p-3 items-center text-lg">
    
   {openSidebar ? <SideBar setOpenSidebar={setOpenSidebar}
  activeCategory={activeCategory}  setActiveCategory={setActiveCategory}/> : "" } 
    
  <div className="flex gap-2 items-center " >
  <h1 className="text-2xl md:hidden cursor-pointer"
  onClick={()=>setOpenSidebar(true)}><IoMenu/></h1>
  <img src="/logo.png" className="h-10"/> <h1 className="font-bold text-2xl">Shopper</h1></div>  
  
  <div className="hidden md:block">
 <MenuLinks activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
  </div>
  
  <div className="flex gap-3 items-center ">
  <Link to="/login" > <h3 className="p-2 px-3  border rounded-full">Login</h3> </Link>
  
 <Link to="/cart"> <h3 className="relative flex text-3xl"><IoMdCart/> <span className="text-white bg-red-600 rounded-full
 text-sm p-1 h-4 absolute top-0 -right-1 text-[10px] items-center justify-center flex">{cartData.length}</span></h3> </Link>
  </div>
    </div>
  )
}

export default Header