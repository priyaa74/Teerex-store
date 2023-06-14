import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../components/Products'
import Cart from '../components/Cart'

function AllRoutes() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Products/>} />
    <Route path='/cart' element={<Cart/>} />
   </Routes>
   </>
  )
}

export default AllRoutes