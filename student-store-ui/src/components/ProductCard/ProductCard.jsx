import * as React from "react";
import "./ProductCard.css";

export default function ProductCard({product, productID, showDescription}) {
    return(
    <div className="ProductCard">
        <img className="ProductImage" src={product.image}></img>
        <h1 className="ProductName"> {product.name} </h1>
    </div>
    )
}


