import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Ecommerce/Login2";
import Catalogue from "./Ecommerce/Catalogue";
import ProductCard from "./Ecommerce/ProductCard";
import Cart from "./Ecommerce/Cart";
import Payment from "./Ecommerce/Payment";
import "./Studies.css";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/Login2" element={<Login />} />
        <Route
          path="/catalogue"
          element={
            <Catalogue cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}
