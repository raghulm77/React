import React from "react";

const FlowerCard = React.memo(({ flower }) => {
  return (
    <div className="flower-card">
      <h2>{flower.name}</h2>
      <img src={flower.image} alt={flower.name} />
      <p>{flower.description}</p>
    </div>
  );
});

export default FlowerCard;
