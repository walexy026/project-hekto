import React from "react";
import "./NavBarUpper.css";
import mailBox from "../../Assets/mailBox.svg";
import telephone from "../../Assets/telephone.svg";
import wishlist from "../../Assets/wishlist.svg";
import userLogin from "../../Assets/userLogin.svg";
import cart from "../../Assets/cart.svg";

const NavBarUpper = () => {
  return (
    <nav>
      <div className="contactAddress">
        <div className="optionFlex">
          <img src={mailBox} className="mail" alt="mailbox" />
          <p>mhhasanul@gmail.com</p>
        </div>
        <div className="optionFlex">
          <img src={telephone} className="telephone" alt="mailbox" />
          <p>(12345)67890</p>
        </div>
      </div>
      <div className="options">
        <p>English</p>
        <p>USD</p>
        <div className="optionFlex">
          <p>Login</p>
          <img src={userLogin} alt="userlogin" />
        </div>
        <div className="optionFlex">
          <p>Wishlist</p>
          <img src={wishlist} alt="wishlist" />
        </div>
        <img src={cart} alt="cart" />
      </div>
    </nav>
  );
};

export default NavBarUpper;
