import React, { useState } from "react";

const AddToCart = ({ item, onAddToCart }) => {
  const [dongia, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(item, dongia);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div>
      <label>
        
        <input type="number" value={dongia} onChange={handleQuantityChange} />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;