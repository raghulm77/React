import React, { useState, useCallback } from "react";
import FlowerCard from "./FlowerCard";
import "./App.css";

const flowers = [
  { name: "Rose", description: "A symbol of love and romance.", image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Rose" },
  { name: "Lily", description: "Represents purity and refined beauty.", image: "https://via.placeholder.com/150/FFFFFF/000000?text=Lily" },
  { name: "Tulip", description: "A symbol of deep love and comfort.", image: "https://via.placeholder.com/150/FFC0CB/000000?text=Tulip" },
  { name: "Sunflower", description: "Signifies happiness and positivity.", image: "https://via.placeholder.com/150/FFD700/000000?text=Sunflower" },
  { name: "Orchid", description: "Represents luxury and strength.", image: "https://via.placeholder.com/150/800080/FFFFFF?text=Orchid" }
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
