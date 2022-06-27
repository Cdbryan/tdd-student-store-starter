import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../ProductGrid/ProductGrid";
import Hero from "../Hero/Hero";
import axios from "axios";

export default function Home({
  products,
  handleRemoveItemToCart,
  handleAddItemToCart,
  setProducts,
  isOpen,
  handleOnToggle,
}) {
  React.useEffect(() => {
    function getData() {
      axios
        .get(`https://codepath-store-api.herokuapp.com/store/`)
        .then((productData) => {
          let items = productData.data.products;
          setProducts(items); //products array has all of the items in it
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  // products.filter((product) => product.includes({search-input}))
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="home">
      <Navbar />
      <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} />
      <Hero />
      <div className="subNav">
        <form id="searchbar">
          <div id="searchbar">
            <input
              type="text"
              id="search-input"
              name="searchterm"
              placeholder="search"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <button id="submit">search</button>
            <span className="help">
              <i className="material-icons">help</i>Help
            </span>
            <div className="cart">
              <a href="/">
                My Cart<i className="material-icons">shopping_cart</i>
              </a>
            </div>
          </div>
        </form>
        <ul className="category-menu">
          <li className="">
            <button>All Categories</button>
          </li>
          <li className="">
            <button>Clothing</button>
          </li>
          <li className="">
            <button>Food</button>
          </li>
          <li className="">
            <button>Accessories</button>
          </li>
          <li className="">
            <button>Tech</button>
          </li>
        </ul>
      </div>
      <ProductGrid
        searchTerm={searchTerm}
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  );
}
