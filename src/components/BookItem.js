import React from "react";

function BookItem(props) {
  return (
    <div>
      <li>
        <header className="book-header">
          <h2>{props.title}</h2>
          <h3>{props.subtitle}</h3>
        </header>
        <span className="price-tag">{props.price}</span>

        <img className="book-image" src={props.image} alt="book_img" />
      </li>
    </div>
  );
}

export default BookItem;
