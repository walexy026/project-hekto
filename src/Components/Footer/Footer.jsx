import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerLogo">
        <a href="">Hekto</a>
        <form action="">
          <input type="text" name="" id="footerinput" placeholder="Enter Email Address"/>
          <input type="button" value="Sign Up" />
        </form>
        <strong>Contact Info</strong>
        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
      </div>
      <ul className="uli">
        <a href="">
          <li className="firstLink">Categories</li>
        </a>
        <a href="">
          <li>Laptops & Computers</li>
        </a>
        <a href="">
          <li>Cameras & Photography</li>
        </a>
        <a href="">
          <li>Smart Phones & Tablets</li>
        </a>
        <a href="">
          <li>Video Games & Consoles</li>
        </a>
        <a href="">
          <li>Waterproof Headphones</li>
        </a>
      </ul>
      <ul className="uli">
        <a href="">
          <li className="firstLink">Customer Care</li>
        </a>
        <a >
          <li>My Account</li>
        </a>
        <a href="">
          <li>Discount</li>
        </a>
        <a href="">
          <li>Returns</li>
        </a>
        <a href="">
          <li>Orders History</li>
        </a>
        <a href="">
          <li>Order Tracking</li>
        </a>
      </ul>
      <ul className="uli">
        <a href="">
          <li className="firstThird">Pages</li>
        </a>
        <a href="">
          <li>Blog</li>
        </a>
        <a href="">
          <li>Browse the Shop</li>
        </a>
        <a href="">
          <li>Category</li>
        </a>
        <a href="">
          <li>Pre-Built Pages</li>
        </a>
        <a href="">
          <li>Visual Composer Elements</li>
        </a>
        <a href="">
          <li>WooCommerce Pages</li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
