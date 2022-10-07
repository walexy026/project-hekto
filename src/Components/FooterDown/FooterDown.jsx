import React from 'react'
import './FooterDown.css'
import facebook from '../../Assets/faceBOOOK.svg'
import instagram from '../../Assets/instagRaamBlue.svg'
import twitter from '../../Assets/twiiiiter.svg'
const FooterDown = () => {
  return (
    <div className='footerDown'>
        <div><p>©Webecy - All Rights Reserved</p></div>
        <div className='socials2'>
           <a href="https://facebook.com"> <img src={facebook} alt="facebook" /></a>
           <a href="https://instagram.com"><img src={instagram} alt="instagram" /></a>
           <a href="https://twitter.com"><img src={twitter} alt="twitter" /></a>
        </div>
    </div>
  )
}

export default FooterDown