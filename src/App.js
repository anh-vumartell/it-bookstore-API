import "../src/styles/App.css";
import React, { useState, useEffect, useRef } from "react";
import Header from "./UI/Header";
import Hero from "./components/Hero";
import Modal from "./UI/Modal";
import BookList from "./components/BookList";

import LoadingSpin from "./UI/LoadingSpin";
import SubcribeForm from "./components/SubcribeForm";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef("");

  const [isShown, setIsShown] = useState(false);

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

  //toggle modal handler
  const openModal = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };
  const closeModal = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };
  return (
    <>
      {isShown && <Modal onClose={closeModal} />}
      <Header onOpen={openModal} />
      <Hero />
      <form className="form-control">
        <input
          onChange={inputHandler}
          ref={inputRef}
          placeholder="Search over 1000+ books (e.g: mongodb)"
        />
        <button type="submit">Search</button>
      </form>

      {isLoading ? <LoadingSpin /> : ""}
      <BookList books={books}></BookList>
      <SubcribeForm />
    </>
  );
}

export default App;
