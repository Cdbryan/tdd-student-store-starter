import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

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
        isOpen ? <ShoppingCart shoppingCart={shoppingCart}/> : null
      }
    </section>
  );
}
