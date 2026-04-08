import React from "react";

function MenuItem({ image, name, price }) {
  const handleAddToCart = () => {
    alert(`Added ${name} to cart!`);
  };

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ₹{price} </p>
      <button className="addToCartButton" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;
