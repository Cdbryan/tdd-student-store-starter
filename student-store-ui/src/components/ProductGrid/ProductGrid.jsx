import * as React from "react";
import Logo from "../Logo/Logo";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  searchTerm,
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  setShoppingCart,
  shoppingCart
}) {
  return (
    <div className="ProductGrid">
      {products
        .filter((product) => {
          if (searchTerm == "") {
            return product;
          } else if (
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return product;
          }
        })
        .map((item, i) => {
          return (
            <ProductCard
              key={i}
              product={item}
              productID={i}
              showDescription="false"
              setShoppingCart={setShoppingCart}
              shoppingCart={shoppingCart}
            />
          );
        })}
    </div>
  );
}
