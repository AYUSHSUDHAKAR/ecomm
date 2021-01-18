import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";
import ImageHelper from "./helper/ImageHelper";

const Card = ({
  product,
  addToCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cardTitle = product ? product.name : "Some image placeholder";
  const cardDescription = product
    ? product.description
    : "Some image description";
  const cardPrice = product ? product.price : "Price";

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const addToACart = () => {
    addItemToCart(product, () => {
      setRedirect(true);
    });
  };

  const showAddToCart = (addToCart) => {
    return (
      addToCart && (
        <button
          onClick={addToACart}
          className="btn btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };
  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cardTitle}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cardDescription}
        </p>
        <p className="btn btn-success rounded btn-sm px-4">$ {cardPrice}</p>
        <div className="d-grid gap-1">
          {showAddToCart(addToCart)}
          {showRemoveFromCart(removeFromCart)}
        </div>
      </div>
    </div>
  );
};

export default Card;
