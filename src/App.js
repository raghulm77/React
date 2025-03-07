import React, { useState, useCallback } from "react";
import FlowerCard from "./FlowerCard";
import "./App.css";

const flowers = [
  { name: "Rose", description: "A symbol of love and romance.", image: "https://tse4.mm.bing.net/th?id=OIP.qeXkjS3N8ovfxk6vt0s99wHaFi&pid=Api&P=0&h=180" },
  { name: "Lily", description: "Represents purity and refined beauty.", image: "https://tse3.mm.bing.net/th?id=OIP.itHHHG_vv1biTPzsxgd3tQHaE7&pid=Api&P=0&h=180" },
  { name: "Tulip", description: "A symbol of deep love and comfort.", image: "https://tse4.mm.bing.net/th?id=OIP.nxHZBvMP_R55v4XFEgu-5wHaE3&pid=Api&P=0&h=180" },
  { name: "Sunflower", description: "Signifies happiness and positivity.", image: "https://tse1.mm.bing.net/th?id=OIP.X7HGex_mqQhZv5YwsQv5bgHaFq&pid=Api&P=0&h=180" },
  { name: "Orchid", description: "Represents luxury and strength.", image: "https://tse1.mm.bing.net/th?id=OIP.HEvls_HAv6maSQr2hyxbugHaEc&pid=Api&P=0&h=180" }
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFlower = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flowers.length);
  }, []);

  const prevFlower = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flowers.length) % flowers.length);
  }, []);

  return (
    <div className="container">
      <h1>Flower Viewer</h1>
      <FlowerCard flower={flowers[currentIndex]} />
      <div className="button-container">
        <button onClick={prevFlower}>Previous</button>
        <button onClick={nextFlower}>Next</button>
      </div>
    </div>
  );
};

export default App;
