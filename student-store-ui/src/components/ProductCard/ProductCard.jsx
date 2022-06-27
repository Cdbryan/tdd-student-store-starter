import * as React from "react";
import Logo from "../Logo/Logo";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product, productID, showDescription}) {
  
  const[count, setcount] = React.useState(0)

  function handleAddItemToCart()
  {
    setcount(count + 1)
  }
  function handleRemoveItemFromCart()
  {
    setcount(count - 1)
  }

  return (
    <div className="productCard">
      <Link to={`/products/${productID}`} className="media">
        <img className="productImage" src={product.image}></img>
      </Link>
      <div className="productInfo">
        <h1 className="productName"> {product.name} </h1>
        <h1 className="price"> ${product.price} </h1>
        <span className="span">
          <button className="add" onClick={handleAddItemToCart}> 
            <i className="material-icons">add</i>
          </button>
          <button className="remove" onClick={handleRemoveItemFromCart}> 
            <i className="material-icons">remove</i>
          </button>
          <div className="counter"> {count} </div>
        </span>
      </div>
    </div>
  );
}
