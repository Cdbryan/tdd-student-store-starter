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
    console.log("product that was added" , product)
    //check shopping cart to see if product exists if so then just update quantity if not make new object with quantity one 
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
          console.log("updating: ", item )
          return {...item, quantity: itemQuant}
        }
        return item
      })
      if(foundMatch == false)
      {
        
        newState.push({"product": product, "quantity": 1})
        console.log("val of newstate", newState)
      }

      setShoppingCart(newState)
      console.log("updated shopping cart" , shoppingCart)
    }

    // if(shoppingCart.find(element => element.id == product.id) == null)
    // {
    //   let quantity = 1
    //   setShoppingCart([...shoppingCart, {"product": product, "quantity": quantity}]);
    // }
    // else //product exists in array 
    // {
    //   let item = shoppingCart.find(element => element.id == product.id)
    //   item.quantity += 1
    //   setShoppingCart([...shoppingCart, quantit])
    // }
    // {console.log("updated shopping cart" , shoppingCart)}
  }
  function handleRemoveItemFromCart() {
    if(count > 0)
    {
      setcount(count - 1);
    }
    setShoppingCart((shoppingCart) => shoppingCart.filter((item) => item != product))
    console.log("shopping cart remove" , shoppingCart)
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
          <button className="add" onClick={() => handleAddItemToCart(product)}>
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
