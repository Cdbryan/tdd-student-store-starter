import * as React from "react";
import Logo from "../Logo/Logo";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import Shoppingcart from "../ShoppingCart/shoppingcart";

export default function ProductCard({
  product,
  productID,
  showDescription,
  setShoppingCart,
  shoppingCart
}) {
  const [count, setcount] = React.useState(0);

  function handleAddItemToCart(product) {
    setcount(count + 1);

    if(shoppingCart.length == 0)
    {
      setShoppingCart([{"product": product, "quantity": 1}])
    }
    else{
      var foundMatch = false 
      let newState = shoppingCart.map( item => { 
        if(item.product.id == product.id)
        {
          foundMatch = true
          let itemQuant = item.quantity + 1 
          return {...item, quantity: itemQuant}
        }
        return item
      })
      if(foundMatch == false)
      {
        newState.push({"product": product, "quantity": 1})
      }
      setShoppingCart(newState)
    }
  }

  function handleRemoveItemFromCart(product) {
    if(count > 0)
    {
      setcount(count - 1);
    }
   
    let newState = shoppingCart.map( item => { 
      if(item.product.id == product.id)
      {
        let itemQuant = item.quantity - 1 
        console.log("removing: ", item )
        if(itemQuant == 0)
        {
          shoppingCart.filter((item) => {item.id != product.id})
        }
        else{
          return {...item, quantity: itemQuant}
        }
      }
      return item;
    })
    setShoppingCart(newState)
  }

  React.useEffect( () => {console.log(shoppingCart)} , [shoppingCart])


  return (
    <div className="productCard">
      <Link to={`/products/${productID}`} className="media">
        <img className="productImage" src={product.image}></img>
      </Link>
      <div className="productInfo">
        <h1 className="productName"> {product.name} </h1>
        <h1 className="price"> ${product.price} </h1>
        <span className="span">
          <button className="add" onClick={() => handleAddItemToCart(product)}>
            <i className="material-icons">add</i>
          </button>
          <button className="remove" onClick={() => handleRemoveItemFromCart(product)}>
            <i className="material-icons">remove</i>
          </button>
          <div className="counter"> {count} </div>
        </span>
      </div>
    </div>
  );
}
