import React from "react";
import "./NavBarUpper.css";
import mailBox from "../../Assets/mailBox.svg";
import telephone from "../../Assets/telephone.svg";
import userLogin from "../../Assets/userLogin.svg";
import cart from "../../Assets/cart.svg";
import AddtoCart from "../AddtoCart/AddtoCart";

const NavBarUpper = () => {
  return (
    <div className="upper">
      <div className="contactAddress">
        <div className="optionFlex1">
          <img src={mailBox} className="mail" alt="mailbox" />
          <p>mhhasanul@gmail.com</p>
        </div>
        <div className="optionFlex1">
          <img src={telephone} className="telephone" alt="mailbox" />
          <p>(12345)67890</p>
        </div>
      </div>
      <div className="options">
        <div className="optionFlex1">
          <p>English</p>
          <p>USD</p>
          <div className="optionFlex log">
            <a href="http://project-hekto.vercel.app/MyAccount">Login</a>
            <img src={userLogin} alt="userlogin" />
          </div>
        </div>
          <div className="optionFlex1">
          <div className="optionFlex1">
            <p>Wishlist</p>
            <AddtoCart />
          </div>
          <a href="http://project-hekto.vercel.app/shoppingcart">
            <img src={cart} alt="cart" />
          </a>
          </div>
      </div>
    </div>
  );
};

export default NavBarUpper;
