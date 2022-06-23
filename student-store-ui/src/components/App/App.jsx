import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setisFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setisOpen] = React.useState(false); //represents whether or not the Sidebar is open or closed state.
  const [shoppingCart, setshoppingCart] = React.useState([]); //array

  // handleAddItemToCart(){
  //   console.log("hi")

  // }

  // handleRemoveItemToCart(){

  // }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}
