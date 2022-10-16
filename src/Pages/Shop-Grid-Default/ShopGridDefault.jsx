import React from 'react'
import ProductTitle from '../../Components/ProductTitle/ProductTitle'
import './ShopGridDefault.css'

const ShopGridDefault = () => {
  return (
    <div>ShopGridDefault
        <ProductTitle title = 'Shop Grid Default' ProductDetails = 'Shop Grid Default'/>
<div className='shopGridTitle'>
    <span className='gridTitle'>
        <h4>Ecommerce Acceories & Fashion item </h4>
        <b>About 9,620 results (0.62 seconds)</b>
    </span>
    <span>
        <form action="">
            <label htmlFor="page-select">Per Page:</label>
            <input type="text" name="page-select" id="page-select" />
            <label htmlFor="sort">Sort By:</label>
            <select name="sort" id="">
                <option value="" id="sort" >Best Match</option>
            </select>
            <label htmlFor="view">View:</label>
            <input type="text" name="view" id="view" />
        </form>
    </span>
</div>





    </div>
  )
}

export default ShopGridDefault