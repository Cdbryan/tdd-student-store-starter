import * as React from "react";
import "./Checkout.css";
import axios from "axios";

export default function Checkout({shoppingCart, total}) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  // name - the name attribute of the input being updated
  // value - the new value to set for that input
  function handleOnCheckoutFormChange(name, value) {}

  //submits users order to the api
  //uses axios.post method to send a post request to store/endpoint
  
  console.log("shopping cart before post request", shoppingCart)
  //add use effect?
  function handleOnCheckoutFormChange() {
    axios
      .post(`http://localhost:3001/store`, { name: name, email: email, order: shoppingCart , total: total})
      .then((productData) => {
        console.log(productData)})
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="checkout form">
      <h1 className="paymentTitle">
        {" "}
        Payment Info
        <span>
          {" "}
          <i className="material-icons md-48">monetization_on</i>
        </span>
      </h1>

      <h1 className="name"> Name </h1>
      <input
        name="name"
        className="checkout-form-input"
        type="text"
        placeholder="Student Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <h1 className="email"> Email </h1>
      <input
        name="email"
        className="checkout-form-input"
        type="email"
        placeholder="student@codepath.org"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      ></input>
      <br />
      <label className="checkbox">
        <input name="termsAndConditions" type="checkbox" />
        <span className="label">
          I agree to the{" "}
          <a className="terms" href="#terms-and-conditions">
            terms and conditions
          </a>
        </span>
      </label>
      <br />
      <button className="checkout-button" onClick={handleOnCheckoutFormChange}>
        Checkout
      </button>
      <h3 className="checkoutInfo">
        {" "}
        Checkout Info
        <span className="icon button">
          <i className="material-icons md-48">fact_check</i>
        </span>
      </h3>
      <p className="checkoutDes">
        A confirmation email will be sent to you so that you can confirm this
        order. Once you have confirmed the order, it will be delivered to your
        dorm room.
      </p>
    </div>
  );
}
