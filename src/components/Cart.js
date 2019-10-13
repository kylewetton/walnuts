import React, { useEffect, useState } from "react";
import {
  CartContainer,
  CartCounterContainer,
  LineItem,
  CartButtons,
  StyledDeleteCartItem
} from "./styles";
import Button from "./Button";

const Cart = ({ items, products, onDeleteItem }) => {
  let cartItems = products.filter(val => items.includes(val.fields.id));

  const [state, setState] = useState({ active: false });

  const handleToggleCart = e => {
    e.preventDefault();
    setState({ active: !state.active });
  };

  const handleDeleteItem = id => {
    onDeleteItem(id);
  };

  return (
    <CartContainer className={state.active ? "" : "--is-hidden"}>
      <div className="cart-padding">
        <svg
          onClick={handleToggleCart}
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
        <div className="lineitem-wrapper">
          {cartItems.map((val, i) => {
            let id = val.fields.id;
            return (
              <CartLineItem
                onDeleteItem={() => handleDeleteItem(id)}
                key={i}
                item={val}
              />
            );
          })}
        </div>
      </div>
      <CartButtons active={state.active}>
        <Button text={"Checkout"} />
        <Button text={"Close"} onClick={handleToggleCart} />
      </CartButtons>
      <CartCounter items={items} />
    </CartContainer>
  );
};

const CartLineItem = ({ item, onDeleteItem }) => {
  return (
    <LineItem>
      <div className="thumbnail">
        <img src={item.fields.image.fields.file.url} />
      </div>
      <div className="name">{item.fields.name}</div>
      <div className="controls">
        <DeleteCartItem onDeleteItem={onDeleteItem} />
      </div>
    </LineItem>
  );
};

const DeleteCartItem = ({ onDeleteItem }) => {
  return (
    <StyledDeleteCartItem onClick={onDeleteItem}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.263"
        height="16.264"
        viewBox="0 0 16.263 16.264"
      >
        <g id="Group_41" transform="translate(-876.368 -2002.868)">
          <g id="Group_40" transform="translate(1681.056 -36.428) rotate(45)">
            <line
              id="Line_7"
              y2="19"
              transform="translate(884.5 2001.5)"
              fill="none"
              stroke="#707070"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_8"
              y2="19"
              transform="translate(894 2011) rotate(90)"
              fill="none"
              stroke="#707070"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    </StyledDeleteCartItem>
  );
};

const CartCounter = ({ items }) => {
  return <CartCounterContainer>{items.length}</CartCounterContainer>;
};

export default Cart;
