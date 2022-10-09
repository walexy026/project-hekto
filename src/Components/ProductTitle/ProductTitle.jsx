import React from 'react'
import './ProductTitle.css'
import { Link } from 'react-router-dom'
const ProductTitle = () => {
  return (
    <div className='titleBackground'>
    <h2 className='titlePD'>Product Details</h2>
    <div className='linkWrapper'>  
    <Link id='Pd1'>Home</Link>. <Link id='Pd2'>Pages</Link>. <Link id='Pd3'>Product Details</Link>
    </div>
    </div>
  )
}

export default ProductTitle