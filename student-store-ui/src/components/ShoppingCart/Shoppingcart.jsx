import * as React from "react";
import "./Shoppingcart.css";

export default function Shoppingcart({ isOpen, products, shoppingCart }) {
  return (
    <div className="Shoppingcart">
      {shoppingcart.map((cartItem) => {
        return (
            <div className="cartProductInfo">
                <h1 className="cart-product-name"> {products[cartItem.productID].name} </h1>
                <h1 className="cart-product-quantity"></h1>
            </div>
        );
      })}
    </div>
  );
}
