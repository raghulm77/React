import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./Studies.css";

const products = [
  {
    id: 1,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and 12-hour battery life.",
    price: "₹6,499",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.PTa4DuZ7vnfAmK-mCARqPQHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    description: "Crystal clear sound with active noise cancellation.",
    price: "₹10,999",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.dVfJuk_WPbGJ45UBzCrCnQHaHt&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    description: "RGB backlit gaming keyboard with fast response keys.",
    price: "₹7,999",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.OvsKuaw4wI3RdQGYYXyBCQHaFq&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "Smartphone Stand",
    description: "Adjustable aluminum stand for hands-free viewing.",
    price: "₹1,299",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.7wMcRckie06hiM5Q1w0pfgHaI7&pid=Api&P=0&h=180",
  },
];

const Catalogue = ({ cartItems, setCartItems }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/Login2");
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalogue-container">
      <div className="header">
        <h1>Product Catalogue</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
        <button className="cart-button" onClick={() => navigate("/cart")}>
          Cart ({cartItems.length})
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
