import './AddtoCart.css'
import React, { useState } from "react";

const AddtoCart = () => {
    const [addCart, setAddCart] = useState(0);
    const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
    {[...Array(1)].map((star, index) => {
      index += 1;
      return (
        <button
          type="button"
          key={index}
          className={index <= (hover || addCart) ? "on" : "off"}
          onClick={() => setAddCart(index)}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(addCart)}
        >
          <span className="star">&#9829;</span>
        </button>
      );
    })}
  </div>
  )
}

export default AddtoCart