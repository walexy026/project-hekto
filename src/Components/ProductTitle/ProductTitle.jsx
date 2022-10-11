import React from 'react'
import './ProductTitle.css'
import { Link } from 'react-router-dom'
const ProductTitle = (props) => {
  return (
    <div className='titleBackground'>
    <h2 className='titlePD'>{props.title}</h2>
    <div className='linkWrapper'>  
    <Link id='Pd1'>Home</Link>. <Link id='Pd2'>Pages</Link>. <Link id='Pd3'>{props.ProductDetails}</Link>
    </div>
    </div>
  )
}


export default ProductTitle

export const title = ()=> {
  return(
    <div>ggh</div>
  )
}