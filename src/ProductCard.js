import React from "react";
import "./Studies.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
