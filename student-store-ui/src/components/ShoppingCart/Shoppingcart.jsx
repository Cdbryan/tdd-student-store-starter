import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ shoppingCart }) {
  


  
  if(shoppingCart.length == 0){

    return (
    <div>
      <h1 className="shoppingCartTitle"> Shopping Cart 
        <span class="shoppingCartbutton"><i class="material-icons md-48">add_shopping_cart</i></span>
      </h1>
      <h1 className="emptycart"> No items added to cart yet. Start shopping now! </h1>
    </div>)
  }

  var subtotal = 0;
  var tax = 0.08;
  var total = 0;
  var totprodprice = 0; 

  //maybe use .find in shopping cart array to check if product already exists if so then just adjust the
  //quantity of that product not everything


  console.log("Look at this Shopping Cart", shoppingCart);

  function updatePrices(product){
    console.log(product)
    subtotal += product.product.price; 
    tax += product.product.price * .08
    total = subtotal + tax
    totprodprice = product.quantity * product.product.price
  }

  return (
    <div className="shopping-cart">
      <h1 className="shoppingCartTitle"> Shopping Cart 
        <span class="shoppingCartbutton"><i class="material-icons md-48">add_shopping_cart</i></span>
      </h1>
      <div className="CartTable">
        <div className="header">
          <div className="header-row">
            <span className="flex-2">Name</span>
            <span className="center">Quantity</span>
            <span className="center">Unit Price</span>
            <span className="center">Cost</span>
          </div>

          {shoppingCart.map((product) => {
             
              updatePrices(product) 
              return (
                <div className="product-row">
                  <span className="flex-2 cart-product-name">{product.product.name}</span>
                  <span className="center cart-product-quantity">{product.quantity}</span>
                  <span className="center cart-product-price">{product.product.price}</span>
                  <span className="center cart-product-subtotal">{totprodprice.toFixed(2)}</span>
                </div>
              );
        
          })}
        </div>
        <div className="receipt">
          <div className="receipt-subtotal">
            <span className="label">Subtotal</span>
            <span></span>
            <span></span>
            <span className="center subtotal">{subtotal.toFixed(2)}</span>
          </div>
          <div className="receipt-taxes">
            <span className="label">Taxes and Fees</span>
            <span></span>
            <span></span>
            <span className="center">{tax.toFixed(2)}</span>
          </div>
          <div className="receipt-total">
            <span className="label">Total</span>
            <span></span>
            <span></span>
           
            <span className="center total-price"> {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
