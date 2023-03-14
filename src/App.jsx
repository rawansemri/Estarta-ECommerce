import { BrowserRouter, Routes, Route } from "react-router-dom"
import {lazy, Suspense} from 'react'
import { LoginPage } from "./pages/Login";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
function App() {

  return (
  
    <div className="App">
      <Suspense fallback='Loading...'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/carts" element={<Cart/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
    
    
  )
}

export default App