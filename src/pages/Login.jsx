import React from 'react'
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <div className="min-h-[700px] h-[calc(100vh-500px)] w-[100vw] bg-pink-300 flex
    justify-center items-center">
    <div className="bg-white p-5">
    <h1 className="text-3xl text-center ">Login</h1>
    
    <div className="flex flex-col gap-3 p-4 ">
    <input className="border-2 p-3 " placeholder="Enter your Email "/>
    <input className="border-2 p-3 " placeholder="Enter your Password "/>

    
    <button className="bg-red-500 text-white my-3 p-3">Submit</button>
    
 <h1 className="flex items-center gap-3"> <hr className="h-1 w-full "/> OR <hr
 className="h-1 w-full"/></h1>
 
       <button className="bg-white border rounded-full  p-2">SignIn with
       Google</button>
       
       <h1 className="text-center">Don't have an account <Link to="/signup"
       className="underline text-blue-500">Sign Up</Link></h1>
 
    </div>
    
    </div>
    </div>
  )
}

export default Login