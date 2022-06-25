import * as React from "react"
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import axios from 'axios';



export default function Home({products, handleRemoveItemToCart, handleAddItemToCart, setProducts}) {
  
  React.useEffect(() => {
    function getData() {
      axios
        .get(`https://codepath-store-api.herokuapp.com/store/`)
        .then((productData) => {
          let items = productData.data.products;
          setProducts(items)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <Hero />
      <div className="subNav">
        <form id="searchbar">
          <div id="searchbar">
            <input
              type="text"
              id="search-input"
              name="searchterm"
              placeholder="search"
            />
            <button id="submit">search</button>
            <span className="help"><i className="material-icons">help</i>Help</span>
            <div className="cart"> 
              <a href="/">My Cart<i className="material-icons">shopping_cart</i></a>
            </div>
          </div>
        </form>
      </div>
      <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart}  handleRemoveItemToCart={handleRemoveItemToCart} />
    </div>
  )
}
