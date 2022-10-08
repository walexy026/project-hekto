import React from 'react'
import './Partner.css'
import PartnerLogo from '../../Assets/partnerLogo.svg'
const Partner = () => {
  return (
    <div>
        <img src={PartnerLogo} alt="PartnerLogo" className='partnerlogo' />
        {/* <img src={require('../../Assets/partnerLogo.svg')} alt="PartnerLogo" className='partnerlogo' /> */}
    </div>
  )
}

export default Partner