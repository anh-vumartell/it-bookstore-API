import React from "react";
import classes from "./Navigation.module.css";
function Navigation(props) {
  return (
    <div className={classes.navbar}>
      <ul className={classes.navlist}>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          {" "}
          <a href="#">Collections</a>
        </li>
        <li>
          {" "}
          <a href="#">Join us</a>
        </li>
        <li>
          <button onClick={props.onOpen} className={classes.cart}>
            Your cart
            <span className={classes.badge}>0</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
