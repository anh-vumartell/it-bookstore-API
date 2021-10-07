import React from "react";
import classes from "./Cart.module.css";
import laptop from "../images/laptop-img.jpg";
function Cart(props) {
  return (
    <section className={classes.cart}>
      <header>
        <img src={laptop} alt="" />
        <h3>Cart Summary</h3>
        <p>Here is the summary of your order.</p>
      </header>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>29.99</span>
      </div>

      <div className={classes.actions}>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </section>
  );
}

export default Cart;
