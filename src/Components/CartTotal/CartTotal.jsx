import './CartTotal.css'
 import React from 'react'
 import greenCheck from '../../Assets/greencheck.svg'
 
 const CartTotal = () => {
   return (
     <div className='cartTotal'>
       <h3>CartTotal</h3>
<div className='subtotal'>
    <div><b>Subtotals:</b> <b>£219.00</b></div>
    <div><b>Totals:</b> <b>£325.00</b></div>
    <div><img src={greenCheck} alt="" /> <i>Shipping & taxes calculated at checkout</i></div>
    <button type="submit">Proceed To Checkout</button>
</div>
<div className='shipping'>
    <h3>Calculate Shopping</h3>
    <form action="">
<input type="text" id='shippingCountry' placeholder='Bangladesh'/>
<input type="text" id='shippingState' placeholder='Mirpur Dhaka - 1200'/>
<input type="text" id='PostalCode' placeholder='Postal Code'/>

<button type="submit">Calculate Shiping</button>
    </form>
</div>
       
     </div>
   )
 }
 
 export default CartTotal