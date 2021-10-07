import React from "react";
import classes from "./BookItem.module.css";
function BookItem(props) {
  return (
    <li className={classes["book-item"]}>
      <div className={classes["book-header"]}>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
      </div>
      <span className={classes["price-tag"]}>{props.price}</span>

      <img className={classes["book-image"]} src={props.image} alt="book_img" />
    </li>
  );
}

export default BookItem;
