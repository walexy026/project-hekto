import React from 'react'
import './ShopGrid.css'

const ShopGrid = (props) => {
  return (
    <div>
<div>
    <div>{props.pics}</div>
    <p>{props.picsTitle}</p>
    <div>
        <span className='yellow'>{props.yellow}</span>
        <span className='pink'>{props.pink}</span>
        <span className='blue'>{props.blue}</span>
    </div>
    <div>
        <b>{props.price}</b>
        <s>{props.discount}</s>
    </div>

</div>


    </div>
  )
}

export default ShopGrid