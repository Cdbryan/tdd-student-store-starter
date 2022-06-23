import * as React from "react"
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductGrid from "../ProductGrid/ProductGrid"


export default function Home({products, handleRemoveItemToCart, handleAddItemToCart}) {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <form id="searchbar">
          <div id="Navbar">
            <input
              type="text"
              id="search-input"
              name="searchterm"
              placeholder="search"
            />
            <button id="submit">search</button>
          </div>
          <br></br>
        </form>
      <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart}  handleRemoveItemToCart={handleRemoveItemToCart} />
    </div>
  )
}
