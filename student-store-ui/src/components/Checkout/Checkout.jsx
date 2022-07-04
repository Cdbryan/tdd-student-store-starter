import * as React from "react";
import "./Checkout.css";

export default function Checkout(){
    
    return(
        <div className="checkout form">
            <h1 className="paymentTitle"> Payment Info  
                <span> <i className="material-icons md-48">monetization_on</i></span>  
            </h1> 

            <h1 className="name"> Name </h1> 
            <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value=""></input>
            <h1 className="email"> Email </h1> 
            <input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value=""></input>
            <br/>
            <label className="checkbox">
                <input name="termsAndConditions" type="checkbox"/>
                <span class="label">I agree to the <a className="terms" href="#terms-and-conditions">terms and conditions</a></span>
            </label>
            <br/>
            <button className="checkout-button">Checkout</button>
        </div>
    )
}