import React from "react";

function BookList(props) {
  return (
    <div>
      <ul>{props.children}</ul>
    </div>
  );
}

export default BookList;
