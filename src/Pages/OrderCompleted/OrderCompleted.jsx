import React from 'react'
import './OrderCompleted.css'
import clock from '../../Assets/clock.svg'
import checkdone from '../../Assets/checkdone.svg'
import checklist from '../../Assets/checklist.svg'
import ProductTitle from '../../Components/ProductTitle/ProductTitle'

const OrderCompleted = () => {
  return (
    <div>
<ProductTitle title='Order Completed' ProductDetails='Order Completed'/>
    <div className='order'>
      <div className='orderText'>
        <img id='clock' src={clock} alt="" />
        <img id='checkdone' src={checkdone} alt="" />
        <img id='checklist' src={checklist} alt="" />
        <h3>Your Order Is Completed! </h3>
        <p>Thank you for your order! Your order is being processed and will be completed within 3-6
hours. You will receive an email confirmation when your order is completed.
</p>
<a href='http://localhost:3000/shoppingcart'>Continue Shopping</a>
      </div>
    </div>
    </div>
  )
}

export default OrderCompleted