import * as React from "react";
import Logo from "../Logo/Logo";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product, productID, showDescription, handleAddItemToCart, handleRemoveItemFromCart }) {
  return (
    <div className="productCard">
      <Link to={`/products/${productID}`} className="media">
        <img className="productImage" src={product.image}></img>
      </Link>
      <div className="productInfo">
        <h1 className="productName"> {product.name} </h1>
        <h1 className="price"> ${product.price} </h1>
        <span className="span">
          <button className="add" onClick={handleAddItemToCart(productID)}> 
            <i class="material-icons">add</i>
          </button>
          <button className="remove" onClick={handleRemoveItemFromCart(productID)}> 
            <i class="material-icons">remove</i>
          </button>
        </span>
      </div>
      {/* if(showDescription)
        {
            // <h1 className="description"> ${product.description} </h1>
        } */}
    </div>
  );
}
