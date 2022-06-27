import * as React from "react";
import "./Sidebar.css";

export default function Sidebar({isOpen, handleOnToggle = () => {}}) {

  return (
    <section className={isOpen ? "sidebar" : "closed"}> 
      <button className="toggle" onClick={handleOnToggle}>
      <i className="material-icons md-48">arrow_forward</i>
      </button>
    </section>
  );
}
