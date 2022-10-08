import React, { Fragment } from "react";
import classes from "./NavBar.module.css";
import searchIcon from "../../Assets/searchIcon.svg";
import { Link } from "react-router-dom";
// import { navLink, NavMenu, Bars, } from "./NavBarElement";
// import {FaBars} from 'react-icons/fa'
import { useState } from "react";

const NavBar = () => {
  const { toggle, setToggle } = useState(true);

  function handleClick() {
    return setToggle((preToggle) => !preToggle);
  }
  return (
    <Fragment>
      <nav className={classes.navBarLower}>
        <div className={classes.logo}>Hekto</div>
        <ul className={classes.navLink}>
          {/* <ul className={toggle ? 'ul' : 'navShow'}>  */}
          <li className={classes.active}>Home</li>
          <li className={classes.navLinks}>Pages</li>
          <li className={classes.navLinks}>
            {" "}
            <Link className={classes.navLinks} to="/">Products</Link>
          </li>
          <li className={classes.navLinks}>Blog </li>
          <li className={classes.navLinks}>
            {" "}
            <Link className={classes.navLinks} to="./shoppingcart">Shop</Link>
          </li>
          <li className={classes.navLinks}>Contact</li>
            </ul>
          <form action="" className={classes.formNav}>
            <input
              type="search"
              className={classes.inputsearch}
              name=""
              id=""
            />
            <button type="submit" className={classes.btn}></button>
            {/* <img src={searchIcon} className={classes.search} alt="searchIcon" /> */}
          </form>
        <div className="hamburger" onClick={handleClick}>
          {toggle ? <span>&#9776;</span> : <span>&times;</span>}
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
