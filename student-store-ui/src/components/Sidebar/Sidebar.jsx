import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Checkout from "../Checkout/Checkout";

export default function Sidebar({shoppingCart, isOpen, handleOnToggle = () => {}}) {

  if(isOpen == false)
  {
    var visibility = "hidden"
  }

  return (
    <section className={isOpen ? "sidebar" : "closed"}> 
      <button className="toggle" onClick={handleOnToggle}>
      <i className="material-icons md-48">arrow_forward</i>
      </button>
      {console.log("isOpen: " , isOpen)}
      {
        isOpen ? 
          <div>
            <ShoppingCart shoppingCart={shoppingCart}/>
            <Checkout/>
          </div> : null
      }
    </section>
  );
}
