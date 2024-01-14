import React from 'react'

const NewsLetter = () => {
  return (
    <div className=" bg-gradient-to-b from-pink-400 via-pink-200 to-pink-50
    p-5
    mx-auto
    h-[350px] w-[80%] flex flex-col justify-center items-center">
    <h1 className="text-3xl font-bold">Get Exclusive Offer On Your Email</h1>
    <h1 className="text-lg">Subscribe to our news letter for stay updated</h1>
    
    <div className="md:flex w-full md:w-[70%] relative mt-3">
    <input type="text" placeholder="Enter Your Email" className="w-full  outline-none p-2 px-3 md:pr-[110px] text-lg
    rounded-[30px] "/>
    <button className="p-2 md:mt-0 mt-4 text-lg px-3 bg-black w-[100px] rounded-[30px] md:absolute right-0 top-0 text-white">Subscribe</button>
    </div>
    
    </div>
  )
}

export default NewsLetter