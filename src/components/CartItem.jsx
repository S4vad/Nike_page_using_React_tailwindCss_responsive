import React from "react";
import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../constant";

// {item:{product,qty,size} is taking  all simultaneosly in Cart.jsx it pass only one and here splittin}
const CartItem = ({ item: { product, qty, size } }) => {
  return (
    <div className="p-2 hover:bg-[#DAFFA2] cursor-pointer bg-gray-50 space-y-2">
      <div className="flex  space-x-2">
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
          <div className="font-bold">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>

        <div className="font-bold">{product.price}</div>
      </div>
      <div className="flex justify-between pl-32 ">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold">SIZE</div>
            <Select
              defaultValue={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select
              defaultValue={qty}
              title=""
              options={QTY}
              className={"w-16 p-1"}
            />
          </div>
        </div>
        <button className="">
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
``;
