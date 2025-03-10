// src/components/RetailPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./studies.css";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S23",
    description: "6.1-inch Dynamic AMOLED, 50MP Camera, 8GB RAM",
    price: "₹74,999",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.boigTqkKicx8O0s6FTMBmQHaHk&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Apple iPhone 15",
    description: "6.1-inch Super Retina, A16 Bionic Chip, 128GB Storage",
    price: "₹79,900",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.EbIbZCiV6pLOZItX01lKlwHaEK&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    description: "Noise Cancelling Headphones, 30h Battery Life",
    price: "₹29,990",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.dV02bFj_IAez2RHiPFMpJwHaEk&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "MacBook Air M2",
    description: "13.6-inch, 8GB RAM, 256GB SSD, M2 Chip",
    price: "₹1,14,900",
    image:
      "https://tse1.mm.bing.net/th?id=OIF.qpRpa%2f22C%2fIfKOOH7vLgTw&pid=Api&P=0&h=180",
  },
];

const RetailPage = ({ setAuth }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const handleLogout = () => {
    setAuth(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="retail-container">
      <h2>Welcome to the Retail Page!</h2>
      <p>You are now logged in.</p>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <h3>Available Products</h3>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h3>Shopping Cart</h3>
      <div className="cart-container">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>
                {item.name} - <strong>{item.price}</strong>
              </p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default RetailPage;
