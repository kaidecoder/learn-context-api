import React,{useState} from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'


const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route
          path="/"
          element={<Home cart={cart} setCart={setCart}/>}
          />
          <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart}/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
