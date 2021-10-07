import React from "react";
import classes from "./BookList.module.css";
import BookItem from "./BookItem";
function BookList(props) {
  return (
    <div className={classes["book-list"]}>
      <ul>
        {" "}
        {props.books
          ? props.books.map((book, i) => {
              return (
                <BookItem
                  key={i + 1}
                  title={book.title}
                  subtitle={book.subtitle}
                  price={book.price}
                  image={book.image}
                />
              );
            })
          : ""}
      </ul>
    </div>
  );
}

export default BookList;
