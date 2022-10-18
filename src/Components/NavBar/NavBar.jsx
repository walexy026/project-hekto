import React, { Fragment } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
// import { navLink, NavMenu, Bars, } from "./NavBarElement";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  // const handleClick = () => setToggle(!toggle);
  function handleClick() {
    return setToggle((preToggle) => !preToggle);
  }
  return (
    <Fragment>
      <nav className="navBarLower">
        <div className="logo">Hekto</div>
        <button className="hamburger" onClick={handleClick}>
          {toggle ? (
            <span className="open">&#9776;</span>
          ) : (
            <span className="close">&times;</span>
          )}
        </button>
        {/* <ul className='navLink' > */}
        <ol className={toggle ? "navLink" : "navShow"}>
          <li className="active">
            <Link  className="active , navLinks" to="./home">Home</Link>{" "}
          </li>
          <li className="navLinks">Pages</li>
          <li className="navLinks">
            <Link className="navLinks" to="/">
              Products
            </Link>
          </li>
          <li className="navLinks">Blog </li>
          <li className="navLinks">
            <Link className="navLinks" to="./shoppingcart">
              Shop
            </Link>
          </li>
          <li className="navLinks">
            {" "}
            <Link className="navLinks" to="./myaccount">
              Contact
            </Link>
          </li>
        </ol>
        <form action="" className="formNav">
          <input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="inputsearch"
            name=""
            placeholder="search"
            id=""
          />
          <button type="submit" className="btn"></button>

          <div id="searchh">
            <BiSearch size="1.8rem" color="#fff" />
          </div>
        </form>
        {/* {searchInput} */}
      </nav>
    </Fragment>
  );
};

export default NavBar;
