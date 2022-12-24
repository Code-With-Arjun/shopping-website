
import Cart from "./component/Cart";
// import Api from "./component/Api";
import React,{ useEffect, useState } from 'react'
import Header from "./component/Header";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Men from "./component/Men";
import Jwellary from "./component/Jwellary";
import Electronics from "./component/Electronics";
import Women from "./component/Women";
import Checkout from "./component/Checkout";
import Service from "./api/Service";
import { useDispatch } from "react-redux";
import { addApiData } from "./action";
function App() {
  const [data,setData]=useState([])
  const [itemsByCategory,setItemsByCategory]=useState([])
  const dispatch=useDispatch()
  useEffect(()=>{
    const fetchApi=async()=>{
const res=await Service.get('/products')
setData(res.data)
dispatch(addApiData(res.data))
    }
    fetchApi()

},[])

const filterData=(items)=>{
  if(items=="all"){
    setItemsByCategory(data)
  }
const filterItems=data.filter((value)=>{
  return value.category===items;
})
setItemsByCategory(filterItems)
// console.log(itemsByCategory)
}
// console.log(data)
  return (
    <>
<BrowserRouter>
<Header filterData={filterData}/>
<Routes>
  <Route path="/" element={<Cart data={data}/>}/>
  <Route path="/cart" element={<Checkout data={itemsByCategory}/>}/>
  <Route path="/men" element={<Men data={itemsByCategory}/>}/>
  <Route path="/women" element={<Women data={itemsByCategory}/>}/>
  <Route path="/jwellary" element={<Jwellary data={itemsByCategory}/>}/>
  <Route path="/electronics" element={<Electronics data={itemsByCategory}/>}/>
</Routes>
</BrowserRouter>
{/* <Api/> */}

    </>

  );
}

export default App;
