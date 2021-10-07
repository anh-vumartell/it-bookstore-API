import React from "react";
import classes from "./Hero.module.css";
import heroImage from "../images/Group 1.jpg";

function Hero(props) {
  return (
    <div className={classes.hero}>
      <div className={classes["hero-info"]}>
        <h1>The biggest collection of IT books you've ever found.</h1>
        <h2>Subcribe to our service and search the latest IT books.</h2>
        <div className={classes["hero-actions"]}>
          <button>Learn more</button>
          <button>Start searching</button>
        </div>
      </div>
      <div className={classes["hero-images"]}>
        <img src={heroImage} alt="laptop" />
      </div>
    </div>
  );
}

export default React.memo(Hero);
