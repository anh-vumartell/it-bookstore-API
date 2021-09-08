import "../src/styles/App.css";
import React, { useState, useEffect, useRef } from "react";
import BookItem from "./components/BookItem";
import BookList from "./components/BookList";
import PageContainer from "./components/PageContainer";

function App() {
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef("");

  //input handler
  const inputHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };
  // console.log(input);
  //fetch API every render
  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      const res = await fetch(`https://api.itbook.store/1.0/search/${input}`);
      const bookData = await res.json();

      console.log(bookData);
      setBooks(bookData.books);
      setIsLoading(false);
    };
    fetchBooks();
  }, [input]);
  console.log(books);
  return (
    <PageContainer>
      <div className="grid">
        <form className="form-control" onSubmit={inputHandler}>
          <input
            ref={inputRef}
            placeholder="Search over 1000+ books (e.g: mongodb)"
          />
          <button type="submit">Search</button>
        </form>
        <div>{isLoading ? <div className="loading-spin"></div> : ""}</div>
        <BookList>
          {books
            ? books.map((book, i) => {
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
        </BookList>
      </div>
    </PageContainer>
  );
}

export default App;
