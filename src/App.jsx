import './App.css'
import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Product from './component/page/product.jsx'
import Cart from './component/page/cart.jsx'
import About from './component/page/about.jsx'
import User from './component/page/user.jsx'

export const RootContext = React.createContext();

export default function App() {
  const [cart, setCart] = React.useState([]);

  const ProviderContext = RootContext.Provider;
  
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link to="/">Beranda</Link>
            </li>
            <li className="li">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="li">
              <Link to="/about">About</Link>
            </li>
            <li className="li">
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>
        <ProviderContext
          value={{
            data: cart,
            isiData: isi => setCart(old => [...old, isi]),
          }}
        >
          <Routes>
            <Route path="/" exact element={<Product />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/user" exact element={<User />} />
          </Routes>
        </ProviderContext>
      </div>
    </Router>
  )
}
