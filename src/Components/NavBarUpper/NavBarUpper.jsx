import React from 'react'
import './NavBarUpper.css'
import mailBox from '../../Assets/mailBox.svg';

const NavBarUpper = () => {
  return (
   <nav>
    <div className='contactAddress'>
      <img src={mailBox} alt="" />
    <p>mhhasanul@gmail.com</p>
    <p>(12345)67890</p>
    </div>
    <div className='options'>
    <p>English</p>
    <p>USD</p>
    <p>Login</p>
    <p>Wishlist</p>
    </div>
   </nav>
  )
}

export default NavBarUpper