import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login2";
import Catalogue from "./Catalogue";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import Payment from "./Payment";
import "./Studies.css";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/Login2" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}
