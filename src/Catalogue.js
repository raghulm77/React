import { useState } from "react";
import ProductCard from "./ProductCard";
import "./Studies.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "2000rs",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/skullcandy_s6hbgy_374_hesh_2_bluetooth_headphones_1085703.jpg",
  },
  {
    id: 2,
    name: "Smartwatch",
    price: "15000rs",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.oQ9gioHYyztzuhHEVAu9OQHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "500rs",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.eUN84socyXVZeTMQzPdNmQHaHa&pid=Api&P=0&h=180",
  },
];

export default function Catalogue() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="catalogue-container">
      <h1>Product Catalogue</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
