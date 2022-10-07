import React, { Fragment } from 'react'
import classes from './NavBar.module.css';
import searchIcon from '../../Assets/searchIcon.svg'
// import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Fragment>
<nav className={classes.navBarLower}>
  <div className={classes.logo}>Hekto</div>
  <ul className={classes.navLink}>
    <a href=""><li>Home</li></a>
    <a href=""><li>Pages</li></a>
    <a href=""><li>Products</li></a>
    <a href=""><li>Blog </li></a>
    <a href=""><li>Shop</li></a>
    <a href=""><li>Contact</li></a>
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
    </Fragment>
  )
}

export default NavBar