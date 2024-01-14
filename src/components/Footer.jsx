import React from 'react'

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from
"react-icons/fa";



const Footer = () => {
  return (
    <div className=" my-6 flex flex-col items-center gap-7 ">
    <div className="flex gap-3 justify-center items-center"><img src="/logo.png"
    className="h-20 object-contain"/><h1
    className="text-5xl font-bold ">SHOPPER</h1></div>
    
    <ul className="flex p-3 gap-2 md:gap-6 mx-auto">
    <li>Company</li>
    <li>Products</li>
    <li>Offer</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    
    <ul className="flex gap-3 text-2xl">
    <i><FaInstagram/></i>
    <i><FaLinkedin/></i>
    <i><FaFacebook/></i>
    </ul>
    
    <hr className="h-[1px]  bg-[#949494] w-[90%] "/>
    
    <h1>Copyright @ 2024 all rights reseved</h1>
    </div>
  )
}

export default Footer