import * as React from "react";
import Logo from "../Logo/Logo";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div class="navcontent">
        <Logo class="logo" />
        <ul class="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#About">About Us</a>
          </li>
          <li>
            <a href="/#Contact">Contact Us</a>
          </li>
          <li>
            <a href="/#Buy">Buy Now</a>
          </li>
        </ul>
        <div class="socials"></div>
      </div>
    </nav>
  );
}
