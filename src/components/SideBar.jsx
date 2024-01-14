import React from 'react'
import MenuLinks from "./MenuLinks"

const SideBar = ({setOpenSidebar,activeCategory, setActiveCategory}) => {
const style = "flex-col"


  return (
    <div className="">
    <div onClick={()=> setOpenSidebar(false)} className="bg-[#30303096] fixed
    top-0 left-0 w-full h-[100vh] z-10"></div>
    
    <div className=" p-3 fixed bg-white w-[50%] h-full z-10 top-0 left-0">
 
    <MenuLinks style={style} setOpenSidebar={setOpenSidebar}
      activeCategory={activeCategory} 
      setActiveCategory={setActiveCategory}/>
      
    </div>
    
    </div>
  )
}

export default SideBar