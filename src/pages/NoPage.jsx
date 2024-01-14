import React from 'react'
import {Link} from "react-router-dom" 
const NoPage = () => {
  return (
    <div className="my-10 p-5">
    
    <h1 className="text-6xl">404 Page is not found</h1>
    
    <h1 className="my-3 text-2xl">Go to <Link to="/" className="text-blue-600 underline"> Home</Link ></h1>
    </div>
  )
}

export default NoPage