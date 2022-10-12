import React, { Fragment } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
// import { navLink, NavMenu, Bars, } from "./NavBarElement";
// import {FaBars} from 'react-icons/fa'
import { useState } from "react";

const NavBar = () => {
  const  [toggle, setToggle]  = useState(true);
  // const handleClick = () => setToggle(!toggle);
  function handleClick() {
    return setToggle((preToggle) => !preToggle);
  }
  return (
    <Fragment>
      <nav className='navBarLower'>
        <div className='logo'>Hekto</div>
        <button className='hamburger' onClick={handleClick}>
          {toggle ? 
            <span className='open'>&#9776;</span>
           : 
            <span className='close'>&times;</span>
          }
        </button>
        {/* <ul className='navLink' > */}
          <ul className={toggle ? 'navLink' : 'navShow'}> 
          <li className='active'>Home</li>
          <li className='navLinks'>Pages</li>
          <li className='navLinks'>
            {" "}
            <Link className='navLinks' to="/">
              Products
            </Link>
          </li>
          <li className='navLinks'>Blog </li>
          <li className='navLinks'>
            {" "}
            <Link className='navLinks' to="./shoppingcart">
              Shop
            </Link>
          </li>
          <li className='navLinks'> <Link className='navLinks' to="./myaccount">
          Contact
            </Link></li>
        </ul>
        <form action="" className='formNav'>
          <input type="search" className='inputsearch' name="" id="" />
          <button type="submit" className='btn'></button>
          {/* <img src={searchIcon} className='search' alt="searchIcon" /> */}
        </form>
      </nav>
    </Fragment>
  );
};

export default NavBar;
