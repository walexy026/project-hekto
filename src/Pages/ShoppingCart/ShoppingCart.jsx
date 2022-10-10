import React from 'react'
import './ShoppingCart.css'
import Cart from '../../Components/Cart/Cart'
import bagOne from '../../Assets/bag0ne.svg'
import bagTwo from '../../Assets/bagTwo.svg'
import bagThree from '../../Assets/bagThree.svg'
import bagFour from '../../Assets/bagFour.svg'
import bagFive from '../../Assets/bagFive.svg'
import CartTotal from '../../Components/CartTotal/CartTotal'


const ShoppingCart = () => {
  const cartData= [
    {id:1,heading:'dkv', logo:bagOne, name:'Ut diam consequat',color:'Color:Brown', size:'Size:XL', price:'$32.00', decrease:'-', count:'1', increase:'+', total:'£219.00'},
    {id:2, logo:bagTwo, name:'Vel faucibus posuere',color:'Color:Brown', size:'Size:XL', price:'$32.00', decrease:'-', count:'1', increase:'+', total:'£219.00'},
    {id:3, logo:bagThree, name:'Ac vitae vestibulum',color:'Color:Brown', size:'Size:XL', price:'$32.00', decrease:'-', count:'1', increase:'+', total:'£219.00'},
    {id:4, logo:bagFour, name:'Elit massa diam',color:'Color:Brown', size:'Size:XL', price:'$32.00', decrease:'-', count:'1', increase:'+', total:'£219.00'},
    {id:5, logo:bagFive, name:'Proin pharetra elementum',color:'Color:Brown', size:'Size:XL', price:'$32.00', decrease:'-', count:'1', increase:'+', total:'£219.00'}

  ]

  return (
    <div>ShoppingCart

<div className='cartMap'>
        {
          cartData.map(items=>(
            <Cart heading={items.heading} img={items.logo} name={items.name} color={items.color} size={items.size} price={items.price} decrease={items.decrease} count={items.count} increase={items.increase} total={items.total} key={items.id}/>
          ))
        }
      <CartTotal/>
      </div>
    </div>
  )
}

export default ShoppingCart