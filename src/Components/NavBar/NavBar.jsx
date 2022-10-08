import React, { Fragment } from 'react'
import classes from './NavBar.module.css';
import searchIcon from '../../Assets/searchIcon.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
<nav className={classes.navBarLower}>
  <div className={classes.logo}>Hekto</div>
  <ul className={classes.navLink}>
    <li className={classes.navLinks}>Home</li>
    <li className={classes.navLinks}>Pages</li>
  <li className={classes.navLinks}> <Link to="/" >Products</Link></li> 
    <li className={classes.navLinks}>Blog </li>
  <li className={classes.navLinks}> <Link to="./shoppingcart" >Shop</Link></li> 
    
    <li className={classes.navLinks}>Contact</li>
    {/* <Link></Link> */}
    {/* <Link></Link> */}
    {/* <Link></Link> */}
    {/* <Link></Link> */}
  </ul>
  <form action="" className={classes.formNav}>
    <input type="search" className={classes.inputsearch} name="" id="" />
    <button type="submit" className={classes.btn}></button>
    <img src={searchIcon} className={classes.search} alt="searchIcon" />
  </form>
</nav>
    </>
  )
}

export default NavBar