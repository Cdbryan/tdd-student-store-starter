import * as React from "react";
import Logo from "../Logo/Logo";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({products, handleAddItemToCart,handleRemoveItemToCart}) {
  console.log("products")
  console.log(products)
  return (
    <div className="ProductGrid">
      {products.map((item, i) => {return (
        <ProductCard key={i} product={item} productID={i} showDescription="false"  />
      )})}
  </div>
  )}
