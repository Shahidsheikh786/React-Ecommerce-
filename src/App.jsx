import { useState } from 'react'
import AppContext from "./AppContext.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"

// pages
import Home from "./pages/Home";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoPage from "./pages/NoPage";


// components 
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import ProductDetails from "./pages/ProductDetails";
import ProductCategory from "./components/ProductCategory";

function App() {

 const [cartData, setCartData] = useState([]);
 const [totalPrice, setTotalPrice] = useState(0);
 
const addToCart = (item) =>{
    let isPresent = false;
    cartData.forEach((product)=>{
      if(item.id === product.id)
      isPresent = true;
    })
    if(isPresent){
      cartData.find((e)=>{
        if(e.id == item.id)
        return;
      })
     return;
    }
  setCartData([...cartData, {...item, quantity : 1 }])
    
    handlePrice()
  }
 

 const removeFromCart = (id) => {
   let tempArr = cartData.filter((element) => element.id !== id);
   setCartData(tempArr)
 }
 
const handlePrice = () =>{
    let ans = 0;
    cartData.map((item)=>{
      ans += item.quantity * item.new_price
      
    })
    setTotalPrice(ans)
  }


const handleChange = (item,opr) =>{
  let ind = -1;
  cartData.forEach((data,index)=>{
    if(data.id === item.id)
    ind = index;
  });
  const tampArr = cartData;
  tampArr[ind].quantity += opr
  
  if(tampArr[ind].quantity === 0){
   tampArr[ind].quantity = 1
     }
   setCartData([...tampArr])
  }


  return (
    <> 
    <AppContext.Provider
    value={{cartData,setCartData,addToCart,removeFromCart,handleChange,handlePrice,
    totalPrice}}>
    
    <BrowserRouter>
    <Header cartData={cartData}/>
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/mens" element={<Mens/>}/>
   <Route path="/womens" element={<Womens/>}/>
   <Route path="/kids" element={<Kids/>}/>
   <Route path="/product/:id" element={<ProductDetails/>}/>
   <Route path="/cart" element={<Cart />}/>
   <Route path="/login" element={<Login />}/>
   <Route path="/signup" element={<Signup />}/>
   <Route path="/*" element={<NoPage />}/>
   
    </Routes>
    <Footer/>
    </BrowserRouter>
    </AppContext.Provider>
    </>
  )
}

export default App
