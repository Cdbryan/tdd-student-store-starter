import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../ProductGrid/ProductGrid";
import Hero from "../Hero/Hero";
import axios from "axios";
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function Home({
  products,
  handleRemoveItemToCart,
  handleAddItemToCart,
  setProducts,
  isOpen,
  handleOnToggle,
  setShoppingCart,
  shoppingCart,
}) {
  const [productsCopy, setproductsCopy] = React.useState(products);
  React.useEffect(() => {
    function getData() {
      axios
        .get(`http://localhost:3001/store`)
        .then((productData) => {
          console.log(productData);
          let items = productData.data;
          setProducts(items); //products array has all of the items in it
          setproductsCopy(items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  function categorySearch(category) {
    console.log("unfiltered products", products);
    console.log("category is", category);
    if (category == "All Categories") {
      return setProducts(productsCopy);
    }
    setProducts(
      productsCopy.filter((product) => {
        return product.category == category;
      })
    );
    console.log("filtered products", products);
  }

  // products.filter((product) => product.includes({search-input}))
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="home">
      <Navbar />
      <Sidebar shoppingCart={shoppingCart} isOpen={isOpen} handleOnToggle={handleOnToggle} />
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
            <button onClick={() => categorySearch("All Categories")}>
              All Categories
            </button>
          </li>
          <li className="">
            <button onClick={() => categorySearch("clothing")}>Clothing</button>
          </li>
          <li className="">
            <button onClick={() => categorySearch("food")}>Food</button>
          </li>
          <li className="">
            <button onClick={() => categorySearch("accessories")}>
              Accessories
            </button>
          </li>
          <li className="">
            <button onClick={() => categorySearch("tech")}>Tech</button>
          </li>
        </ul>
      </div>
      <ProductGrid
        searchTerm={searchTerm}
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        setShoppingCart={setShoppingCart}
        shoppingCart={shoppingCart}
      />
      <br></br>
      <About />
      <Contact />
    </div>
  );
}
