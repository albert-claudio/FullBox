import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

function App() {

  return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory category="men"/>}/>
          <Route path='/womens' element={<ShopCategory category="women"/>}/>
          <Route path='/kids' element={<ShopCategory category="kid"/>}/>
          <Route path='product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/' element={<LoginSignup/>}/>
          <Route path='/' element={<Shop/>}/>
        </Routes>
        
        
        
        
        </BrowserRouter>
      </div>
  )
}

export default App
