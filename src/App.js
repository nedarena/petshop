import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { Cart } from './components/Cart/Cart';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavTop from './components/Nav_top/NavTop';
import NavBottom from './components/Nav_bottom/NavBottom';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState(new Map());

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const newItems = new Map(prevItems)
      if (newItems.has(product.id)) {
        const currentItem = newItems.get(product.id)
        newItems.set(product.id, {
          ...currentItem,
          quantity: currentItem.quantity + 1,
        })
      } else {
        newItems.set(product.id, { product, quantity: 1 })
      }
      return newItems
    })
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return

    setCartItems((prevItems) => {
      const newItems = new Map(prevItems)
      const item = newItems.get(productId)
      if (item) {
        newItems.set(productId, {
          ...item,
          quantity: newQuantity,
        })
      }
      return newItems
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const newItems = new Map(prevItems)
      newItems.delete(productId)
      return newItems
    })
  }

  return (
    <div className="App">
        <Router>
            <NavTop/>
            <div className='line'></div>
            <NavBottom/>
            <Routes>
                <Route path='/' element={<Home onAddToCart={addToCart}/>}/>
                <Route path='/cart' element={<Cart cart={cartItems} onDelete={removeFromCart} onUpdateQuantity={updateQuantity}/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;