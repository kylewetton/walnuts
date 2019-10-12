import React, { useEffect, useState } from "react";
import { CartContainer, CartCounterContainer, LineItem } from "./styles";
import Button from "./Button";

const Cart = ({ items, products }) => {
  let cartItems = products.filter(val => items.includes(val.fields.id));
  console.log(cartItems);
  return (
    <CartContainer>
      <svg
        className="cart-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="34.5"
        viewBox="0 0 36 34.5"
      >
        <path
          d="M15,31.5A1.5,1.5,0,1,1,13.5,30,1.5,1.5,0,0,1,15,31.5Z"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M31.5,31.5A1.5,1.5,0,1,1,30,30,1.5,1.5,0,0,1,31.5,31.5Z"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M1.5,1.5h6l4.02,20.085a3,3,0,0,0,3,2.415H29.1a3,3,0,0,0,3-2.415L34.5,9H9"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
      {cartItems.map((val, i) => {
        return <CartLineItem key={i} item={val} />;
      })}
      <Button text={"Checkout"} />
      <CartCounter items={items} />
    </CartContainer>
  );
};

const CartLineItem = ({ item }) => {
  return (
    <LineItem>
      <div className="thumbnail">
        <img src={item.fields.image.fields.file.url} />
      </div>
      <div className="name">{item.fields.name}</div>
      <div className="controls">x</div>
    </LineItem>
  );
};

const CartCounter = ({ items }) => {
  return <CartCounterContainer>{items.length}</CartCounterContainer>;
};

export default Cart;
