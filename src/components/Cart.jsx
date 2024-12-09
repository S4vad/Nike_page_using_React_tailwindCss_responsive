import React from "react";
import CartItem from "./CartItem";

const Cart = ({ CartItems, onClickTrash }) => {
  return (
    <div>
      <h2 className="font-bold text-4xl mb-5 dark:text-white">Cart</h2>
      <ul className="space-y-5">
        {CartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} onClickTrash={onClickTrash} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
