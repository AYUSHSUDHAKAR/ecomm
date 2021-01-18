import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/CartHelper";
// import Stripe from "react-stripe-checkout";
import { API } from "../backend";
import { loadStripe } from "@stripe/stripe-js";

const StripeCheckout = ({
  products,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalPrice = () => {
    var amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });
    return amount;
    // return products.reduce((currentValue, nextValue) => {
    //   return currentValue + nextValue.count * nextValue;
    // }, 0);
  };

  const makePayment = () => {
    const body = {
      token,
      products,
    };
    const headers = {
      // withCredential: false,
      "Content-Type": "application/json",
    };
    return fetch(`${API}/stripepayment`, {
      method: "POST",
      // withCredentials: false,
      // "access-control-allow-origin": "http://localhost:3000",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        //call create order or clear cart
      })
      .catch((err) => console.log(err));
  };

  const handleClick = async (event) => {
    // Get Stripe.js instance

    const stripePromise = await loadStripe(
      "pk_test_51I0Wb0KqHKGFHkOJqpgcf60Q0nZen14AjMGqf8wyUOIcstQUiKD8gazEnzI6BUcapiYnCOJv2zt6FR68swHAhdJl00970TZ1jQ"
    );
    const stripe = stripePromise;

    const body = {
      token,
      products,
    };
    const headers = {
      // withCredential: false,
      "Content-Type": "application/json",
    };

    // Call your backend to create the Checkout Session
    const response = await fetch(`${API}/stripepayment`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    console.log(response);
    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  const showStripeButton = () => {
    return isAuthenticated() ? (
      // <Stripe
      //   stripeKey="pk_test_51I0Wb0KqHKGFHkOJqpgcf60Q0nZen14AjMGqf8wyUOIcstQUiKD8gazEnzI6BUcapiYnCOJv2zt6FR68swHAhdJl00970TZ1jQ"
      //   token={makePayment}
      //   amount={getFinalPrice() * 100}
      //   name="Checkout"
      //   shippingAddress
      //   billingAddress
      // >
      <button role="link" className="btn btn-success" onClick={handleClick}>
        Pay with Stripe
      </button>
    ) : (
      // </Stripe>
      <Link to="/signin">
        <button className="btn btn-warning">Signin</button>
      </Link>
    );
  };

  return (
    <div>
      <h3>Stripe checkout {getFinalPrice()}</h3>
      {showStripeButton()}
    </div>
  );
};

export default StripeCheckout;
