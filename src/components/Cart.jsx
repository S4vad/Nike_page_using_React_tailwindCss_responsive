import React from 'react'
import CartItem from "./CartItem"

const Cart = ({CartItems}) => {
  return (
    <div>
      <h2 className='font-bold text-4xl mb-5'>Cart</h2>
      <ul className='space-y-5'>
        {CartItems.map(cartItem =>
        <div>
          <li key={cartItem.product.id}></li>
          <CartItem item={cartItem} />
        </div>

        )}
      </ul>
    </div>
  )
}

export default Cart