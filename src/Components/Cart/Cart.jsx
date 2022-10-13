import "./Cart.css";

import React from "react";
import {useCart} from 'react-use-cart'
// import CartTotal from "../CartTotal/CartTotal";

const Cart = (props) => {
  // let {img, price, quantity } = props.cart
  const {addItem} = useCart();
  return (
    <div className="cartWrapper">
      <div className="cartPricing">
        <div className="heading">
          <h2>{props.heading}</h2>
          <h2>{props.heading}</h2>
          <h2>{props.heading}</h2>
          <h2>{props.heading}</h2>
        </div>
        <div className="cart">
          <div className="product">
            <img src={props.img} alt="pic" />
            <div className="productdesc">
              <h3>{props.name}</h3>
              <b>{props.color}</b>
              <b>{props.size}</b>
            </div>
          </div>
          <div className="price">
            <p>{props.price}</p>
          </div>
          <div className="quantity">
            <button>{props.decrease}</button>
            <p>{props.count}</p>
            <button>{props.increase}</button>
          </div>
          <div className="total">
            <p>{props.total}</p>
          </div>
        </div>
        <hr />
      </div>
      {/* <CartTotal/> */}
    </div>
  );
};

export default Cart;
