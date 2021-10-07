import React from "react";
import classes from "./Header.module.css";
import Navigation from "./Navigation";
function Header(props) {
  return (
    <header className={classes.header}>
      <h1>ITBooks</h1>
      <Navigation onOpen={props.onOpen} />
    </header>
  );
}

export default Header;
