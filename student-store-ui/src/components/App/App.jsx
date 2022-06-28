import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setisFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setisOpen] = React.useState(false); //represents whether or not the Sidebar is open or closed state.
  const [shoppingCart, setshoppingCart] = React.useState([]); //array

  function handleAddItemToCart() {
    console.log("handleAddItemToCart");
  }

  function handleRemoveItemToCart() {
    console.log("handleRemoveItemToCart");
  }

  function handleOnToggle(){
    if(isOpen){
      setisOpen(false)
    }
    else if(isOpen == false){
      setisOpen(true)
    }
  }

  //handle on toggle sets is open to opposite feature

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  setProducts={setProducts}
                  isOpen={isOpen}
                  handleOnToggle={handleOnToggle}
                />
              }
            />

            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  products={products}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
