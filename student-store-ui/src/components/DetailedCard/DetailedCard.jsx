import * as React from "react";
import "./DetailedCard.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function DetailedCard({products, productId}) {

    const[count, setcount] = React.useState(0)

    function handleAddItemToCart()
    {
        setcount(count + 1)
    }
    function handleRemoveItemFromCart()
    {
        setcount(count - 1)
    }
    console.log("products in product detailedCard: " , products)
    var product = products[productId]
    return(
        <div className="detailedCard">
          <img className="dproductImage" src={product.image}></img>
            <div className="dproductInfo">
                <h1 className="dproductName"> {product.name} </h1>
                <h1 className="price"> ${product.price} </h1>
                <span className="span">
                    <button className="add" onClick={handleAddItemToCart} > 
                    <i className="material-icons">add</i>
                    </button>
                    <button className="remove" onClick={handleRemoveItemFromCart} > 
                    <i className="material-icons">remove</i>
                    </button>
                    <div className="dcounter"> {count} </div>
                </span>
                <br />
                <div className="productDescription"> {product.description} </div>
        </div>
        
      </div>

    ); 
}