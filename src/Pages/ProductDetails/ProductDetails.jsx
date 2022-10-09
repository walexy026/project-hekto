import React from 'react'
import './ProductDetails.css'
import bagUS from '../../Assets/bagUS.svg'
import readingLamp from '../../Assets/readingLamp.svg'
import fingerBag from '../../Assets/fingerBag.svg'
const ProductDetails = () => {
  return (
    <div className='productWrapper'>
      <div className='productDescription'>
<div className='bagTypes'>
<img src={bagUS} alt="bagUS" />
<img src={readingLamp} alt="readingLamp" />
<img src={fingerBag} alt="fingerBag" />
</div>
<div></div>
<div></div>
      </div>
    </div>
  )
}

export default ProductDetails